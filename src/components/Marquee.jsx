export default function Marquee({ items, reverse = false, className = '' }) {
  const loop = [...items, ...items];

  return (
    <div className={`marquee-track w-full py-4 ${className}`}>
      <div className={`marquee ${reverse ? 'marquee-reverse' : ''}`}>
        {loop.map((item, i) => (
          <span
            key={i}
            className="mx-4 flex shrink-0 items-center gap-4 text-sm font-semibold uppercase tracking-widest text-gray-500"
          >
            {item}
            <span className="text-accent">&#9670;</span>
          </span>
        ))}
      </div>
    </div>
  );
}
