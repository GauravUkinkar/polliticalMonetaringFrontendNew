import React, { useEffect, useState } from "react";
import "./Dashboard.scss";
import { getAllvillage } from "../../api/Api";
import { Link } from "react-router-dom";
const Dashboard = () => {
  const [lengthData, setLengthData] = useState({
    villageCount: 0,
  });

  useEffect(() => {
    getAllvillage()
      .then((res) => {
        setLengthData({
          ...lengthData,
          villageCount: res.length,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div class="dashboard_parent parent">
        <Link to={`/voterlist?query=village`} class="tab">
          गाव नुसार <span>{lengthData?.villageCount}</span>{" "}
        </Link>
        <div class="tab">गणा नुसार</div>
        <div class="tab">आडनाव नुसार</div>
        <div class="tab">प्रभाक नुसार</div>
      </div>
    </>
  );
};

export default Dashboard;
