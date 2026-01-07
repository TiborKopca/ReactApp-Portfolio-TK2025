import React from "react";

/**
 * TK Logo SVG Component
 * Reusable logo with optional animation
 */
function TKLogo({ animate = false }) {
  return (
    <svg
      className="tk-logo"
      width="500"
      height="500"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 500 500"
    >
      {/* T - Top Rectangle */}
      <rect
        className={`logo-T-RectangleTop ${animate ? 'animated' : ''}`}
        x="150"
        y="150"
        rx="5"
        ry="5"
        width="100"
        height="25"
        fill="white"
        stroke="black"
        strokeWidth="5"
      />

      {/* T - Bottom Rectangle */}
      <rect
        className={`logo-T-RectangleBottom ${animate ? 'animated' : ''}`}
        x="187"
        y="200"
        rx="5"
        ry="5"
        width="25"
        height="90"
        fill="white"
        stroke="black"
        strokeWidth="5"
      />

      {/* K - Arrow Path */}
      <path
        className={`logo-K-Path ${animate ? 'animated' : ''}`}
        d="M230 220 L300 150 L300 180 L260 220 L300 260 L300 290 Z"
        fill="white"
        stroke="black"
        strokeWidth="5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default TKLogo;