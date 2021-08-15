import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import eyeIcon from "../../assets/images/eyeIcon.png";

import strikeEyeIcon from "../../assets/images/strike-eye.png";

import "./LoginForm.css";
import { CONSTANTS_OBJ } from "../../constants/index";
import InputComp from "../Input/InputComp";
import PropTypes from "prop-types";
import { loginUser } from "../../services/loginService";

const LoginComp = ({ setToken }) => {
  const history = useHistory();
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const onEmailChange = (e) => {
    setUserName(e.target.value);
  };
  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token) {
      setToken(token);
      history.push("/landingPage");
    }
  };
  return (
    <div className="login-cls">
      <div className="login-form-main">
        <form onSubmit={handleSubmit}>
          <div>
            <div className="border">{CONSTANTS_OBJ.loginFormHeadingOne}</div>
            <div className="border">{CONSTANTS_OBJ.loginFormHeadingTwo}</div>
          </div>
          <div>
            <InputComp
              inputType={`text`}
              value={username}
              onChange={onEmailChange}
            />
            <span>
              <InputComp
                inputType={!showPassword ? `password` : `text`}
                value={password}
                onChange={onPasswordChange}
              />
              <img
                src={!showPassword ? strikeEyeIcon : eyeIcon}
                alt=""
                className="eye-icon-cls"
                onClick={toggleShowPassword}
              />
            </span>
          </div>
          <div className="form-group">
            {/* <label> */}
            <InputComp
              id="html"
              inputType={`checkbox`}
              className="checkbox"
              checked={true}
              disabled={true}
            />
            {/* <input id="html" className="checkbox" type="checkbox" checked /> */}
            <label htmlFor="html">{CONSTANTS_OBJ.loginRemember}</label>
            {/* </label> */}
          </div>
          <div style={{ textAlign: "right" }}>
            <button type="submit" className="sign-in">
              {CONSTANTS_OBJ.loginBtnText}
              <span className="login-btn-arrow">&#8594;</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
LoginComp.propTypes = {
  setToken: PropTypes.func.isRequired,
};

export default LoginComp;
