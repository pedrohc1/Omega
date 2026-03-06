const OmegaLogo = ({ className = "w-7 h-7" }: { className?: string }) => (
  <svg
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    {/*
      Omega arch: single path drawing left foot → arc over top → right foot
      Arc center ≈ (18, 19), r=13, from (7,26) to (29,26) via top (18,6)
      large-arc-flag=1, sweep=1 (clockwise in SVG screen space)
    */}
    <path
      d="M 3 26 L 7 26 A 13 13 0 1 1 29 26 L 33 26"
      stroke="currentColor"
      strokeWidth="3.5"
      strokeLinecap="round"
      strokeLinejoin="miter"
    />
  </svg>
);

export default OmegaLogo;
