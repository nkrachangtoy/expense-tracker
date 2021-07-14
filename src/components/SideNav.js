import React from "react";
import CloudLogo from "../assets/image/cloud_logo.png";
import ChartIcon from "../assets/svg/overview_icon.svg";

const SideNav = () => {
  return (
    <div className="side-nav">
      <div className="side-nav__header-container">
        <img src={CloudLogo} alt="Logo" className="side-nav__logo" />
        <h3 className="side-nav__header-text">Expense Tracker</h3>
      </div>
      <ul className="side-nav__items">
        <li className="side-nav__item">
          <img src={ChartIcon} alt="overview-icon" />
          <p className="side-nav__item-text">Overview</p>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
