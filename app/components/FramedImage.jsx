import Image from "next/image";

/**
 * A reusable “frame” for images.
 * - Keeps the background color independent of the image.
 * - You can change the frame bg later without re-exporting the image.
 *
 * Props:
 *  - src, alt: image src/alt
 *  - ratio: CSS aspect-ratio string, e.g. "16/9", "4/3", "3/2"
 *  - bg: any CSS color (e.g. "white", "#FFF8E7", "transparent")
 *  - className: extra classes for the outer container
 */
export default function FramedImage({
  src,
  alt,
  ratio = "16/9",
  bg = "white",
  className = "",
  imgClassName = "",
  priority = false,
}) {
  return (
    <div
      className={`rounded-2xl ring-1 ring-slate-200 overflow-hidden ${className}`}
      style={{ background: bg }}
    >
      {/* aspect ratio via CSS so it can be dynamic */}
      <div className="relative w-full" style={{ aspectRatio: ratio }}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 760px, 100vw"
          className={`object-contain ${imgClassName}`}
          priority={priority}
        />
      </div>
    </div>
  );
}
