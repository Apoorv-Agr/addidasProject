import React from "react";
import PropTypes from "prop-types";
import "./ButtonCompStyle.css";
const ButtonComp = (props) => {
  const {
    className,
    buttonType,
    buttonClick,
    buttonName,
    backgroundColor,
  } = props;
  return (
    <>
      <button
        className={className}
        type={buttonType}
        onClick={buttonClick}
        style={backgroundColor && { backgroundColor }}
      >
        {buttonName}
        {props.children && props.children}
      </button>
    </>
  );
};

ButtonComp.defaultProps = {
  className: "default-cls",
  buttonType: "submit",
  buttonClick: () => {},
  buttonName: "Click Me!",
};

ButtonComp.propTypes = {
  backgroundColor: PropTypes.string,
  buttonType: PropTypes.string,
  buttonClick: PropTypes.func,
  buttonName: PropTypes.string.isRequired,
  className: PropTypes.oneOf(["sign-in", "logout-btn"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

export default ButtonComp;
