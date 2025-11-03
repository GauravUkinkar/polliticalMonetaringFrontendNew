import React from "react";
import "./Sidebar.scss";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div class="sidebar_parent">
        <div class="list">
          <Link to="/" >Dashboard</Link>
          <Link to="/voterlist">Lisiting</Link>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
