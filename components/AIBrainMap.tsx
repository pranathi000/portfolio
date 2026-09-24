"use client";
import { useState } from "react";
import { aiEvolutionNodes } from "@/lib/data";

// Fixed pixel positions for each node, placed by hand along the brain
// surface inside the head silhouette below — not on a circle.
const NODE_POS: Record<string, { x: number; y: number; side: "left" | "right" }> = {
  "Representation & Learning": { x: 300, y: 130, side: "right" },
  "Multimodal Models": { x: 340, y: 160, side: "right" },
  "Multilingual AI": { x: 355, y: 205, side: "right" },
  "Reasoning & Agents": { x: 335, y: 255, side: "right" },
  "World Models": { x: 285, y: 290, side: "right" },
  "Model Efficiency": { x: 235, y: 145, side: "left" },
  "AI Safety": { x: 210, y: 195, side: "left" },
  "Hardware & Systems": { x: 220, y: 250, side: "left" },
};

export default function AIBrainMap() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <svg viewBox="0 0 620 520" width="100%" style={{ maxWidth: 640 }} className="mx-auto block">
      {/* head + shoulders, side profile, facing left */}
      <path
        d="M 175 300
           C 165 260, 168 220, 190 185
           C 200 165, 195 150, 205 130
           C 212 112, 230 100, 250 100
           C 258 88, 272 82, 285 88
           C 295 80, 310 82, 315 92
           C 335 92, 350 108, 350 128
           C 365 138, 372 158, 366 176
           C 378 190, 380 212, 368 228
           C 378 245, 372 268, 355 278
           C 358 300, 345 320, 322 322
           L 322 400
           C 322 420, 300 430, 260 430
           L 130 430
           C 115 430, 105 420, 110 405
           C 120 380, 140 355, 155 330
           C 162 318, 168 308, 175 300 Z"
        fill="none"
        stroke="#C8A2C8"
        strokeWidth="1.5"
        opacity="0.55"
      />
      {/* jaw / face line detail */}
      <path
        d="M 175 300 C 168 320, 160 340, 150 360"
        fill="none"
        stroke="#C8A2C8"
        strokeWidth="1"
        opacity="0.4"
      />
      {/* brain, drawn inside the skull */}
      <path
        d="M 210 135
           C 225 118, 250 110, 270 115
           C 290 105, 315 110, 325 128
           C 345 130, 358 150, 352 170
           C 365 182, 366 205, 352 218
           C 360 235, 352 258, 332 265
           C 330 282, 312 295, 292 288
           C 278 300, 255 298, 245 283
           C 225 285, 208 270, 210 250
           C 195 240, 192 218, 205 202
           C 195 188, 198 165, 210 152
           C 205 145, 205 140, 210 135 Z"
        fill="none"
        stroke="#9B6BA8"
        strokeWidth="1.3"
        opacity="0.7"
      />
      {/* a few interior folds for texture, purely decorative */}
      <path d="M 225 150 C 240 160, 255 155, 265 145" fill="none" stroke="#B592C4" strokeWidth="0.8" opacity="0.45" />
      <path d="M 235 190 C 255 200, 275 195, 290 185" fill="none" stroke="#B592C4" strokeWidth="0.8" opacity="0.45" />
      <path d="M 240 230 C 260 240, 280 235, 300 225" fill="none" stroke="#B592C4" strokeWidth="0.8" opacity="0.45" />

      {aiEvolutionNodes.map((node, i) => {
        const pos = NODE_POS[node.label];
        if (!pos) return null;
        const isActive = active === i;
        const labelX = pos.side === "right" ? pos.x + 90 : pos.x - 90;
        const labelY = pos.y;
        return (
          <g key={node.label} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} className="cursor-pointer">
            <path
              d={`M ${pos.x} ${pos.y} Q ${pos.side === "right" ? pos.x + 45 : pos.x - 45} ${pos.y - 10}, ${labelX} ${labelY}`}
              fill="none"
              stroke={isActive ? "#5B3E8E" : "#B592C4"}
              strokeWidth="1"
              strokeDasharray="3 3"
              opacity={isActive ? 0.9 : 0.5}
            />
            <circle cx={pos.x} cy={pos.y} r={isActive ? 6.5 : 4.5} fill={isActive ? "#5B3E8E" : "#9B6BA8"} style={{ transition: "r 0.2s, fill 0.2s" }} />
            <text
              x={labelX}
              y={labelY}
              textAnchor={pos.side === "right" ? "start" : "end"}
              dx={pos.side === "right" ? 6 : -6}
              dy="4"
              fontSize="13"
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
