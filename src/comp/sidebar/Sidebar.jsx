import React from "react";
import "./Sidebar.scss";
import { Link, useLocation } from "react-router-dom";
const Sidebar = () => {
  const location = useLocation();
  const navList = [
    {
      name: "Dashboard",
      path: "/",
    },
    {
      name: "Lisiting",
      path: "/voterlist",
    },
    {
      name: "Add",
      children: [
        {
          name: "Add Voters",
          path: "/addvoter",
        },
      ],
    },
  ];

  return (
    <>
      <div class="sidebar_parent">
        <div class="list">
          {navList.map((item) => (
            <Link
              className={location.pathname === item?.path ? "active" : ""}
              to={item.path}
            >
              {" "}
              {item.name}{" "}
              {item.children && (
                <div class="children">
                  {item.children?.map((child) => (
                    <Link
                      className={
                        location.pathname === child?.path ? "active" : ""
                      }
                      to={child.path}
                    >
                      {" "}
                      {child.name}{" "}
                    </Link>
                  ))}
                </div>
              )}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
