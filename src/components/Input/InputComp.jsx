import React from "react";
import PropTypes from "prop-types";
import "./InputCompStyle.css";

const InputComp = (props) => {
  const { inputType, disabled, checked, onChange, className } = props;
  return (
    <div className="form-group">
      <input
        className={className}
        type={inputType}
        readOnly={disabled}
        checked={checked}
        onChange={onChange}
        autoComplete="false"
      />
    </div>
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
