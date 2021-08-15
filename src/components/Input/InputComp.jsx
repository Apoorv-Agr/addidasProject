import React from "react";
import PropTypes from "prop-types";

const InputComp = (props) => {
  const { inputType, disabled, checked, onChange } = props;
  return (
    <>
      <input
        type={inputType}
        readOnly={disabled}
        checked={checked}
        onChange={onChange}
      />
    </>
  );
}
InputComp.defaultProps = {
  inputType: "text",
  disabled: false,
  checked: false,
};

InputComp.propTypes = {
  inputType: PropTypes.string.isRequired,
};

export default InputComp;
