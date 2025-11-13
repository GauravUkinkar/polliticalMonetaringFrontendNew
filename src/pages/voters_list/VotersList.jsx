import React, { useEffect, useState } from "react";
import "./VotersList.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Table } from "antd";
import { useSearchParams } from "react-router-dom";
import { getAllvillage } from "../../api/Api";

const VotersList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: "",
  });

  const [searchparams] = useSearchParams();

  const query = searchparams.get("query");

  const [data, setData] = useState();
  const [filter, setFilter] = useState();
  const [villageList, setVillageList] = useState();

  const columns = [
    {
      title: "Id",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
    },
    {
      title: "Age",
      dataIndex: "age",
      key: "age",
    },
  ];

  // useEffect(() => {
  //   getAlldata(pagination.current, pagination.pageSize, false);
  // }, [pagination.current, pagination.pageSize]);

  const handleChange = (paginationConfig) => {
    setPagination((prevConfig) => ({
      ...prevConfig,
      current: paginationConfig.current,
      pageSize: paginationConfig.pageSize,
    }));
  };

  // get all village
  useEffect(() => {
    if (query === "village") {
      getAllvillage()
        .then((res) => {
          if(res.length > 0){
            setFilter("gavnusar");
            setVillageList(res)
          }
        
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [searchparams]);

  return (
    <>
      <div class="voters_list parent">
        {filter === "gavnusar" && (
          <div class="filter_list">
            {villageList &&
              villageList?.map((item, index) => (
                <div key={index} class="filter_item">
                  {item}
                </div>
              ))}
          </div>
        )}
        <div class="voters_cont cont">
          <div class="top">
            <div class="search">
              <input type="text" placeholder="Search Voters" />
            </div>
            <div class="btn">Search</div>
            <div class="btn">Export</div>
          </div>
          <div class="table">
            <Table
              dataSource={data}
              pagination={pagination}
              onChange={handleChange}
              columns={columns}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VotersList;
