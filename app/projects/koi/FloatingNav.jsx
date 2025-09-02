'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

/** new hierarchy based on your update */
const SECTIONS = [
  { id: 'project-overview', label: 'Project Overview' },
  { id: 'final-prototype',  label: 'Final Prototype' },
  { id: 'why',              label: 'Why KOI' },

  // Styles (parent) -> Color, Typography, Elevation
  {
    id: 'styles-root',      // parent anchor for the whole Styles area
    label: 'Styles',
    children: [
      { id: 'styles-color', label: 'Colour' },             // small anchor you’ll add
      { id: 'typography',   label: 'Typography System' },  // existing section
      { id: 'elevation',    label: 'Elevation' },          // existing section
    ],
  },

  // Components (parent) -> Buttons, Icon Buttons
  {
    id: 'components',
    label: 'Components',
    children: [
      { id: 'buttons',       label: 'Buttons' },
      { id: 'icon-buttons',  label: 'Icon Buttons' },
    ],
  },

   // ✅ add Home Page here
  { id: 'home-page', label: 'Home Page' },
  // Home Page — removed per your note

  { id: 'product',          label: 'Product Page' },

  // Sign up / Sign in (parent) -> Text Fields, Checkbox Components
  {
    id: 'auth',
    label: 'Sign up / Sign in',
    children: [
      { id: 'auth-text-fields', label: 'Text Field Components' }, // tiny anchor you’ll add
      { id: 'checkbox',         label: 'Checkbox Components' },   // existing section
    ],
  },

  { id: 'reflections',      label: 'Reflections' },
];

const flattenIds = (tree) => {
  const out = [];
  for (const n of tree) {
    out.push(n.id);
    n.children?.forEach((c) => out.push(c.id));
  }
  return out;
};

export default function FloatingNav() {
  const [active, setActive] = useState('');
  const allIds = useMemo(() => flattenIds(SECTIONS), []);
  const parentById = useMemo(() => {
    const map = {};
    SECTIONS.forEach((p) => p.children?.forEach((c) => (map[c.id] = p.id)));
    return map;
  }, []);

  // prevent observer flicker when clicking links
  const lockRef = useRef(false);
  const lockTimer = useRef(null);
  const lockFor = (ms = 800) => {
    lockRef.current = true;
    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => (lockRef.current = false), ms);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (lockRef.current) return;
        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        visible.sort((a, b) => {
          const da = Math.abs(a.boundingClientRect.top);
          const db = Math.abs(b.boundingClientRect.top);
          if (da !== db) return da - db;
          const aIsChild = !!parentById[a.target.id];
          const bIsChild = !!parentById[b.target.id];
          if (aIsChild && !bIsChild) return 1;
          if (!aIsChild && bIsChild) return -1;
          return 0;
        });

        let id = visible[0].target.id;
        const parent = parentById[id];
        if (parent) {
          const el = document.getElementById(parent);
          if (el) {
            const top = el.getBoundingClientRect().top;
            if (top > -1 && top < window.innerHeight * 0.5) id = parent;
          }
        }
        setActive(id);
      },
      { rootMargin: '-35% 0px -60% 0px', threshold: 0 }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [allIds, parentById]);

  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    history.pushState(null, '', `#${id}`);
    setActive(id);
    lockFor(800);
    el.scrollIntoView({ behavior: 'auto', block: 'start' });
  };

  return (
    <nav className="hidden lg:flex fixed left-6 top-28 z-30 w-[220px]">
      {/* scrollable rail with a sticky bottom bar */}
      <div className="flex-1 max-h-[calc(100vh-7rem)] overflow-auto pr-1">
        <ul className="space-y-2">
          {SECTIONS.map(({ id, label, children }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={(e) => go(e, id)}
                className={`block rounded-lg px-3 py-2 text-sm transition
                  ${active === id
                    ? 'bg-slate-800 text-white'
                    : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'}`}
              >
                {label}
              </a>

              {children?.length > 0 && (
                <ul className="ml-4 mt-1 space-y-1 border-l border-slate-200 pl-2">
                  {children.map(({ id: cid, label: clabel }) => (
                    <li key={cid}>
                      <a
                        href={`#${cid}`}
                        onClick={(e) => go(e, cid)}
                        className={`block rounded px-2 py-1 text-xs transition
                          ${active === cid
                            ? 'bg-slate-800 text-white'
                            : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'}`}
                      >
                        {clabel}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        {/* sticky bottom control */}
        <div className="sticky bottom-0 pt-3 pb-1 bg-gradient-to-t from-white via-white">
          <button
            onClick={(e) => go(e, 'project-overview')}
            className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-xs font-medium text-slate-700 hover:border-slate-300"
          >
            Back to top ↑
          </button>
        </div>
      </div>
    </nav>
  );
}
