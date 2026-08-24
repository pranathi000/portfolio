export default function HeroArt() {
  const size = 340, pad = 26, cols = 9, rows = 9;
  const cell = (size - pad * 2) / cols;
  const cells: { x: number; y: number; s: number; fill: boolean; a: number }[] = [];
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      const dx = c - r;
      const band = Math.exp(-(dx * dx) / 6);
      const jitter = (Math.sin(r * 12.9 + c * 4.7) * 0.5 + 0.5) * 0.35;
      const a = Math.min(1, band * 0.9 + jitter * 0.25);
      const s = cell * 0.66, off = (cell - s) / 2;
      cells.push({ x: pad + c * cell + off, y: pad + r * cell + off, s, fill: a > 0.32, a });
    }
  }
  return (
    <svg viewBox={`0 0 ${size} ${size}`} width="100%" style={{ overflow: "visible" }} aria-hidden>
      <defs>
        <filter id="pencil">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves={1} seed={7} result="n" />
          <feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" />
        </filter>
      </defs>
      <rect x="1" y="1" width={size - 2} height={size - 2} rx="20" fill="#ffffff" fillOpacity="0.35" stroke="#DDE1E8" />
      <g>
        {cells.map((c, i) =>
          c.fill ? (
            <rect key={i} x={c.x.toFixed(1)} y={c.y.toFixed(1)} width={c.s.toFixed(1)} height={c.s.toFixed(1)} rx="2.5" fill="#2C3FE0" fillOpacity={(0.18 + c.a * 0.8).toFixed(2)} />
          ) : (
            <rect key={i} x={c.x.toFixed(1)} y={c.y.toFixed(1)} width={c.s.toFixed(1)} height={c.s.toFixed(1)} rx="2.5" fill="none" stroke="#C4C9D4" strokeWidth="1" />
          )
        )}
      </g>
      <path d={`M ${pad - 4} ${size - pad} C ${size * 0.35} ${size * 0.62}, ${size * 0.5} ${size * 0.5}, ${size - pad + 4} ${pad - 4}`} fill="none" stroke="#2C3FE0" strokeWidth="2.2" strokeLinecap="round" filter="url(#pencil)" opacity="0.9" />
      <path d={`M ${pad - 2} ${size * 0.34} C ${size * 0.4} ${size * 0.42}, ${size * 0.62} ${size * 0.7}, ${size - pad + 2} ${size * 0.82}`} fill="none" stroke="#111520" strokeWidth="1.4" strokeLinecap="round" filter="url(#pencil)" opacity="0.5" />
      <circle cx={size * 0.5} cy={size * 0.5} r="6" fill="#2C3FE0" />
      <circle cx={size * 0.5} cy={size * 0.5} r="13" fill="none" stroke="#2C3FE0" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}
