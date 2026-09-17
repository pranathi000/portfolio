export default function SectionDivider() {
  return (
    <div className="robo-track">
      <svg className="robo-walker" viewBox="0 0 60 60" width="34" height="34">
        <defs>
          <radialGradient id="roboBody" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#E4D6ED" />
            <stop offset="45%" stopColor="#8B6BA8" />
            <stop offset="100%" stopColor="#4A3566" />
          </radialGradient>
        </defs>

        {/* antenna */}
        <line x1="30" y1="6" x2="30" y2="0" stroke="#5B3E8E" strokeWidth="2" />
        <circle cx="30" cy="0" r="2.5" fill="#B592C4" />

        {/* head */}
        <rect x="18" y="6" width="24" height="16" rx="5" fill="url(#roboBody)" />
        <circle cx="24" cy="14" r="2" fill="#2E1F4D" />
        <circle cx="36" cy="14" r="2" fill="#2E1F4D" />

        {/* body */}
        <rect x="14" y="22" width="32" height="22" rx="6" fill="url(#roboBody)" />
        <circle cx="30" cy="33" r="4" fill="#E4D6ED" opacity="0.9" />

        {/* legs — animated via CSS below */}
        <rect className="robo-leg-l" x="19" y="44" width="8" height="14" rx="3" fill="#5B3E8E" />
        <rect className="robo-leg-r" x="33" y="44" width="8" height="14" rx="3" fill="#5B3E8E" />

        {/* arms */}
        <rect className="robo-arm-l" x="6" y="24" width="7" height="16" rx="3" fill="#6B4E8E" />
        <rect className="robo-arm-r" x="47" y="24" width="7" height="16" rx="3" fill="#6B4E8E" />
      </svg>
    </div>
  );
}
