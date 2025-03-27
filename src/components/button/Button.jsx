import React from "react";
// import PropTypes from "prop-types";
import "./button.scss";

const ReusableButton = ({
  children,
  href,
  onClick,
  className = "",
  target = "__blank",
  rel = "noopener noreferrer",
  type = "button",
  disabled = false,
  ariaLabel,
}) => {
  // If an href is provided, render as an anchor link
  if (href) {
    return (
      <a
        href={href}
        className={`btn ${className}`}
        target={target}
        rel={rel}
        aria-label={ariaLabel || children}
      >
        {children}
      </a>
    );
  }

  // Otherwise, render as a button element
  return (
    <button
      type={type}
      className={`btn ${className}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel || children}
    >
      {children}
    </button>
  );
};

// Prop type validation for better code safety
// ReusableButton.propTypes = {
//   children: PropTypes.node.isRequired,
//   href: PropTypes.string,
//   onClick: PropTypes.func,
//   className: PropTypes.string,
//   target: PropTypes.string,
//   rel: PropTypes.string,
//   type: PropTypes.oneOf(["button", "submit", "reset"]),
//   disabled: PropTypes.bool,
//   ariaLabel: PropTypes.string,
// };

// Default props
// ReusableButton.defaultProps = {
//   href: null,
//   onClick: null,
//   className: "",
//   target: "_self",
//   rel: "noopener noreferrer",
//   type: "button",
//   disabled: false,
//   ariaLabel: null,
// };

export default ReusableButton;
