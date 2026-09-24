"use client";
import { useState } from "react";
import { aiEvolutionNodes } from "@/lib/data";

const CX = 260, CY = 220;
const RX = 150, RY = 120;

function nodePos(angle: number) {
  const rad = (angle * Math.PI) / 180;
  return { x: CX + RX * Math.cos(rad), y: CY + RY * Math.sin(rad) };
}

export default function AIBrainMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <svg viewBox="0 0 520 440" width="100%" style={{ maxWidth: 560 }} className="mx-auto block">
      {/* simplified brain outline — a single soft, hand-drawn-feeling sketch shape */}
      <path
        d="M 260 90
           C 190 90, 130 130, 120 190
           C 112 230, 130 250, 115 280
           C 100 310, 130 340, 170 345
           C 190 370, 230 380, 265 365
           C 310 380, 355 360, 370 320
           C 400 315, 415 280, 400 250
           C 415 220, 405 180, 375 155
           C 365 115, 320 90, 260 90 Z"
        fill="none"
        stroke="#C8A2C8"
        strokeWidth="1.4"
        opacity="0.65"
      />
      <path
        d="M 260 90 C 260 160, 260 260, 260 370"
        fill="none"
        stroke="#C8A2C8"
        strokeWidth="1"
        opacity="0.4"
      />

      {aiEvolutionNodes.map((node, i) => {
        const { x, y } = nodePos(node.angle);
        const isActive = active === i;
        // leader line target: pushed outward from the node, toward the label
        const labelX = CX + (x - CX) * 1.75;
        const labelY = CY + (y - CY) * 1.75;
        return (
          <g key={node.label} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} className="cursor-pointer">
            <line
              x1={x} y1={y} x2={labelX} y2={labelY}
              stroke={isActive ? "#5B3E8E" : "#B592C4"}
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity={isActive ? 0.9 : 0.5}
            />
            <circle cx={x} cy={y} r={isActive ? 6.5 : 4.5} fill={isActive ? "#5B3E8E" : "#9B6BA8"} style={{ transition: "r 0.2s, fill 0.2s" }} />
            <text
              x={labelX}
              y={labelY}
              textAnchor={x < CX ? "end" : "start"}
              dx={x < CX ? -6 : 6}
              dy="4"
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
  );
}
