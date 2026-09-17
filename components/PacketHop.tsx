export default function PacketHop() {
  return (
    <div className="packet-track" aria-hidden>
      <svg className="packet-node" viewBox="0 0 40 40" width="26" height="26">
        <defs>
          <radialGradient id="packetGlow" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#E4D6ED" />
            <stop offset="45%" stopColor="#9B6BA8" />
            <stop offset="100%" stopColor="#5B3E8E" />
          </radialGradient>
        </defs>
        <polygon
          points="20,2 35,11 35,29 20,38 5,29 5,11"
          fill="url(#packetGlow)"
          stroke="#4A3566"
          strokeWidth="1"
        />
      </svg>
      <span className="packet-trail t1" />
      <span className="packet-trail t2" />
      <span className="packet-trail t3" />
    </div>
  );
}
