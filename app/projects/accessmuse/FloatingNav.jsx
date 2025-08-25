'use client';

import { useEffect, useMemo, useRef, useState } from 'react';

// ------- Edit labels/IDs here if needed -------
const SECTIONS = [
  { id: 'project-overview', label: 'Project Overview' },
  { id: 'final-prototype', label: 'Final Prototype' },

  {
    id: 'user-research',
    label: 'User Research',
    children: [{ id: 'personas', label: 'Personas' }],
  },

  { id: 'paper-prototypes', label: 'Paper Prototypes' },
  { id: 'mid-fidelity', label: 'Mid‑Fidelity' },

  {
    id: 'hi-fi',
    label: 'Hi‑Fidelity',
    children: [
      { id: 'hi-ios',  label: 'iOS Mobile Screens' },
      { id: 'hi-web',  label: 'Web Screen' },
      { id: 'hi-ipad', label: 'iPad Screen' },
    ],
  },

  {
    id: 'testing',
    label: 'Testing',
    children: [
      { id: 'user-tasks',  label: 'User Tasks' },
      { id: 'quantitative', label: 'Quantitative Analysis' },
      { id: 'qualitative',  label: 'Qualitative Analysis' },
    ],
  },

  { id: 'post-test-updates', label: 'Design Iterations & Feedback' },
  { id: 'reflections', label: 'Reflections' },
];

// ------- helpers -------
const flattenIds = (tree) => {
  const out = [];
  for (const n of tree) {
    out.push(n.id);
    if (n.children) for (const c of n.children) out.push(c.id);
  }
  return out;
};

export default function FloatingNav() {
  const [active, setActive] = useState('');
  const allIds = useMemo(() => flattenIds(SECTIONS), []);
  const scrollLockRef = useRef(false);
  const lockTimer = useRef(null);

  // child -> parent lookup (for “prefer parent” logic only)
  const parentById = useMemo(() => {
    const map = {};
    SECTIONS.forEach((p) => p.children?.forEach((c) => (map[c.id] = p.id)));
    return map;
  }, []);

  const lockFor = (ms = 800) => {
    scrollLockRef.current = true;
    clearTimeout(lockTimer.current);
    lockTimer.current = setTimeout(() => {
      scrollLockRef.current = false;
    }, ms);
  };

  // Scrollspy (prefer parent if both are near top, but highlight ONLY the final chosen id)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollLockRef.current) return;

        const visible = entries.filter((e) => e.isIntersecting);
        if (!visible.length) return;

        visible.sort((a, b) => {
          const da = Math.abs(a.boundingClientRect.top);
          const db = Math.abs(b.boundingClientRect.top);
          if (da !== db) return da - db;
          // tie-breaker: prefer parents
          const aIsChild = !!parentById[a.target.id];
          const bIsChild = !!parentById[b.target.id];
          if (aIsChild && !bIsChild) return 1;
          if (!aIsChild && bIsChild) return -1;
          return 0;
        });

        let id = visible[0].target.id;

        // If closest is a child and its parent is also near the top, prefer the parent
        const parent = parentById[id];
        if (parent) {
          const parentEl = document.getElementById(parent);
          if (parentEl) {
            const top = parentEl.getBoundingClientRect().top;
            if (top > -1 && top < window.innerHeight * 0.5) id = parent;
          }
        }

        setActive(id);
      },
      {
        rootMargin: '-35% 0px -60% 0px',
        threshold: 0,
      }
    );

    allIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [allIds, parentById]);

  // programmatic scroll (lock to avoid flicker)
  const go = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    history.pushState(null, '', `#${id}`);
    setActive(id);   // immediate visual feedback
    lockFor(800);
    el.scrollIntoView({ behavior: 'auto', block: 'start' });
  };

  return (
    <nav className="hidden lg:block fixed left-6 top-28 z-30 w-[220px]">
      <ul className="space-y-2">
        {SECTIONS.map(({ id, label, children }) => (
          <li key={id}>
            {/* Parent: only highlight if the parent itself is the active id */}
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
    </nav>
  );
}
