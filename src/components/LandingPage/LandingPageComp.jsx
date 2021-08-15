import React from "react";
import jwt_decode from "jwt-decode";
import { useHistory } from "react-router-dom";

import "./LandingPageStyle.css";
import ButtonComp from "../Button/ButtonComp";

const LandingPageComp = (props) => {
  const history = useHistory();
  const { authed } = props;
  const tokenVal = jwt_decode(authed, { header: true });
  const logOut = () => {
    sessionStorage.clear("DSTLoggedInTokenId");
    history.push("/login");
  };
  return (
    <div>
      <div className="nav-bar-parent">
        <div className="nav-bar" style={{ float: "right" }}>
            <ButtonComp className="logout-btn" buttonType="button" buttonName="LogOut" buttonClick={logOut}/>
          {/* <button
            className="logout-btn"
            onClick={logOut}
          >
            LogOut
          </button> */}
        </div>
      </div>
      <div className="page-wrapper">
        <div className="text-background">
          Welcome to Adidas {tokenVal.preferredUsername} !!
        </div>
      </div>
    </div>
  );
};

export default LandingPageComp;
