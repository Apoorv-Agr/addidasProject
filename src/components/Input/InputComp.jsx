import React from "react";
import PropTypes from "prop-types";
import "./InputCompStyle.css";

const InputComp = (props) => {
  const { inputType, disabled, checked, onChange, className } = props;
  return (
    <>
      <input
        className={className}
        type={inputType}
        readOnly={disabled}
        checked={checked}
        onChange={onChange}
        autoComplete="false"
      />
    </>
  );
};
InputComp.defaultProps = {
  inputType: "text",
  disabled: false,
  checked: false,
  className: "",
};

InputComp.propTypes = {
  inputType: PropTypes.oneOf(["text", "password", "checkbox"]).isRequired,
};

export default InputComp;
