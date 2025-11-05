import React, { useEffect, useState } from "react";
import "./VotersList.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Table } from "antd";
import axios from "axios";
const VotersList = () => {
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    total: "",
  });
  const [data, setData] = useState();

  // getAll
  const getAlldata = async (page, size, exportData) => {
    try {
      const response = await axios.get(
        `${
          import.meta.env.VITE_APP_BACKEND_URL
        }/voters/voters/all?page=${page}&size=${size}&export=${exportData}`
      );

      const responseData = response?.data?.data;

      setPagination((prev) => ({
        ...prev,
        total: responseData.totalElements,
      }));

      const filtertaeData = responseData?.content?.map((item, index) => {
        return {
          key: index + 1,
          name: item?.voterEnglishName,
          gender: item?.gender,
          age: item?.age,
        };
      });


      setData(filtertaeData);


    } catch (error) {
      console.log(error);
    }
  };

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

  useEffect(() => {
    getAlldata(pagination.current, pagination.pageSize, false);
  }, [pagination.current, pagination.pageSize]);

const handleChange = (paginationConfig) => {
  setPagination((prevConfig) => ({
    ...prevConfig,
    current: paginationConfig.current,
    pageSize: paginationConfig.pageSize,
  }));
};
  return (
    <>
      <div class="voters_list parent">
        <div class="tabs">
          <div class="tab">गाव नुसार</div>
          <div class="tab">गणा नुसार</div>
          <div class="tab">आडनाव नुसार</div>
          <div class="tab">प्रभाक नुसार</div>
        </div>
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
