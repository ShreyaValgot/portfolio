/**
 * Compact “Spoiler:” callout line.
 * Default items match your map critique. Pass your own via `items`.
 */
export default function SpoilerCallout({
  items = ["Visually overwhelming", "Hard to read", "Poor navigation help"],
  className = "",
}) {
  return (
    <div
      className={`rounded-xl bg-slate-50/80 ring-1 ring-slate-200 px-4 py-3 ${className}`}
    >
      <p className="text-[15px] md:text-[16px] leading-7 text-slate-900">
        <span className="font-semibold mr-1">Spoiler:</span>
        {/* compact single line: separate with middots */}
        {items.join(" · ")}.
      </p>
    </div>
  );
}
