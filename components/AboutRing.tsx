"use client";
import { useState } from "react";
import { aboutNodes } from "@/lib/data";

const RADIUS = 170;
const CENTER = 200;

function toXY(angle: number) {
  const rad = ((angle - 90) * Math.PI) / 180;
  return { x: CENTER + RADIUS * Math.cos(rad), y: CENTER + RADIUS * Math.sin(rad) };
}

export default function AboutRing() {
  const [active, setActive] = useState<number | null>(null);
  const activeNode = active !== null ? aboutNodes[active] : null;

  return (
    <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-10">
      <svg viewBox="0 0 400 400" width="400" height="400" className="shrink-0">
        <circle cx={CENTER} cy={CENTER} r="70" fill="#EAE2F2" opacity="0.6" />
        <text x={CENTER} y={CENTER - 6} textAnchor="middle" className="font-hand" fontSize="34" fill="#2E1F4D">
          Me
        </text>
        <text x={CENTER} y={CENTER + 18} textAnchor="middle" fontSize="12" fill="#6B4E8E">
          revolving my head around
        </text>

        {aboutNodes.map((node, i) => {
          if (active === null || !aboutNodes[active].connections.includes(i)) return null;
          const a = toXY(aboutNodes[active].angle);
          const b = toXY(node.angle);
          const midX = (a.x + b.x) / 2 + (b.y - a.y) * 0.15;
          const midY = (a.y + b.y) / 2 - (b.x - a.x) * 0.15;
          return (
            <path
              key={`arc-${i}`}
              d={`M ${a.x} ${a.y} Q ${midX} ${midY} ${b.x} ${b.y}`}
              stroke="#9B6BA8"
              strokeWidth="1.4"
              fill="none"
              opacity="0.7"
            />
          );
        })}

        {aboutNodes.map((node, i) => {
          const { x, y } = toXY(node.angle);
          const isActive = active === i;
          return (
            <g key={node.label} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} className="cursor-pointer">
              <circle cx={x} cy={y} r={isActive ? 8 : 5.5} fill={isActive ? "#5B3E8E" : "#B592C4"} style={{ transition: "r 0.2s, fill 0.2s" }} />
              <text
                x={x}
                y={y + (y > CENTER ? 22 : -14)}
                textAnchor="middle"
                fontSize="12.5"
                fontWeight={isActive ? 600 : 400}
                fill={isActive ? "#2E1F4D" : "#4a4453"}
                style={{ transition: "font-weight 0.2s" }}
              >
                {node.label}
              </text>
            </g>
          );
        })}
      </svg>

      {activeNode ? (
        <div className="w-full max-w-xs bg-white/50 rounded-2xl p-6 text-left">
          <div className="text-lg font-semibold mb-3">{activeNode.label}</div>
          <p className="text-[0.92rem] leading-relaxed mb-4">{activeNode.note}</p>
          <div className="border-t border-rule pt-3">
            <div className="font-mono text-[0.7rem] uppercase tracking-[0.1em] text-faint mb-2">Connected</div>
            {activeNode.connections.map((ci) => (
              <div key={ci} className="text-[0.85rem]">{aboutNodes[ci].label}</div>
            ))}
          </div>
        </div>
      ) : (
        <div className="hidden lg:flex w-full max-w-xs items-center justify-center">
          <p className="text-faint text-[0.85rem] italic">hover a point</p>
        </div>
      )}
    </div>
  );
}
