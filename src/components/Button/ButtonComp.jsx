import React from "react";
import PropTypes from "prop-types";

const ButtonComp = (props) => {
  const { className, buttonType, buttonClick, buttonName } = props;
  return (
    <>
      <button className={className} type={buttonType} onClick={buttonClick}>
        {buttonName}
        {props.children}
      </button>
    </>
  );
};

ButtonComp.defaultProps = {
  className: "default-cls",
  buttonType: "button",
  buttonClick: () => {},
  buttonName: "Click Me!",
};

ButtonComp.propTypes = {
  buttonType: PropTypes.string.isRequired,
  buttonClick: PropTypes.func.isRequired,
  buttonName: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

export default ButtonComp;
