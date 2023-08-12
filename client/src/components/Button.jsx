import React from "react";

const Button = ({
  title,
  leftIcon,
  rightIcon,
  handleClick,
  isSubmitting,
  type,
  className = "",
}) => (
  <button
    type={type || "button"}
    disabled={isSubmitting || false}
    className={`primary-button gap-3 ${className}`}
    onClick={handleClick}
  >
    {isSubmitting ? (
      <div className="h-6 flex items-center justify-center">
        <span className="loader bottom-3 mx-4"></span>
      </div>
    ) : (
      <>
        {leftIcon && (
          <img src={leftIcon} width={14} height={14} alt="left icon" />
        )}
        {title}
        {rightIcon && (
          <img src={rightIcon} width={14} height={14} alt="right icon" />
        )}
      </>
    )}
  </button>
);

export default Button;
