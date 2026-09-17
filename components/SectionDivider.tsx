export default function SectionDivider() {
  return (
    <div className="octo-track">
      <svg className="octo-walker" viewBox="0 0 70 60" width="46" height="40">
        <defs>
          <radialGradient id="octoBody" cx="35%" cy="28%" r="75%">
            <stop offset="0%" stopColor="#E4D6ED" />
            <stop offset="45%" stopColor="#8B6BA8" />
            <stop offset="100%" stopColor="#4A3566" />
          </radialGradient>
        </defs>

        {/* head/mantle */}
        <ellipse cx="35" cy="24" rx="20" ry="17" fill="url(#octoBody)" />

        {/* eyes */}
        <circle cx="28" cy="20" r="3" fill="#2E1F4D" />
        <circle cx="42" cy="20" r="3" fill="#2E1F4D" />
        <circle cx="29" cy="19" r="1" fill="#fff" opacity="0.8" />
        <circle cx="43" cy="19" r="1" fill="#fff" opacity="0.8" />

        {/* tentacles — each animated independently below */}
        <path className="tentacle t1" d="M18 36 Q10 44 14 54" stroke="#5B3E8E" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path className="tentacle t2" d="M26 40 Q22 50 26 58" stroke="#5B3E8E" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path className="tentacle t3" d="M35 41 Q35 50 35 58" stroke="#5B3E8E" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path className="tentacle t4" d="M44 40 Q48 50 44 58" stroke="#5B3E8E" strokeWidth="5" strokeLinecap="round" fill="none" />
        <path className="tentacle t5" d="M52 36 Q60 44 56 54" stroke="#5B3E8E" strokeWidth="5" strokeLinecap="round" fill="none" />
      </svg>
    </div>
  );
}
