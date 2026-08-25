// A simple network-of-nodes sketch — stands in for "research" without
// being a literal photo. Colors are drawn from the site's own palette
// (lavender background, deep-purple link color, lilac accent) so it
// never clashes no matter how the rest of the page is restyled.
export default function HeroArt() {
  const nodes = [
    { x: 40, y: 40 }, { x: 130, y: 25 }, { x: 210, y: 55 },
    { x: 30, y: 120 }, { x: 120, y: 110 }, { x: 205, y: 130 },
    { x: 70, y: 190 }, { x: 165, y: 195 },
  ];
  const edges: [number, number][] = [
    [0, 1], [1, 2], [0, 3], [1, 4], [2, 5],
    [3, 4], [4, 5], [3, 6], [4, 6], [4, 7], [5, 7], [6, 7],
  ];
  return (
    <svg viewBox="0 0 240 220" width="100%" style={{ maxWidth: 260 }} aria-hidden>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x} y1={nodes[a].y} x2={nodes[b].x} y2={nodes[b].y}
          stroke="#5B3E8E" strokeOpacity="0.35" strokeWidth="1.2"
        />
      ))}
      {nodes.map((n, i) => (
        <circle
          key={i}
          cx={n.x} cy={n.y}
          r={i % 3 === 0 ? 7 : 5}
          fill={i % 3 === 0 ? "#5B3E8E" : "#C8A2C8"}
        />
      ))}
    </svg>
  );
}
