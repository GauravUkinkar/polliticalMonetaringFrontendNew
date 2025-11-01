import React, { useState } from "react";
import "./VotersList.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Table } from "antd";
const VotersList = () => {
  const [dropDown, setDropDown] = useState(false);

  const dataSource = [
  {
    key: '1',
    name: 'Mike',
    age: 32,
    gender:"Male"
  },
  {
    key: '2',
    name: 'John',
    age: 42,
    gender:"Male"
  },
];

const columns = [
  {
    title: 'Id',
    dataIndex: 'key',
    key: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Gender',
    dataIndex: 'gender',
    key: 'gender',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
];
  return (
    <>
      <div class="voters_list parent">
        <div class="voters_cont cont">
          <div class="top">
            <div
              class="prabhak_dropdown"
              onMouseLeave={() => setDropDown(false)}
              onClick={() => setDropDown(true)}
            >
              <div class="label">
                Select Prabhak No.
                <span>
                  <IoIosArrowDown />
                </span>
              </div>

              {dropDown && (
                <div class="drop_list">
                  <p>प्रभाग क्र. 3</p>
                </div>
              )}
            </div>
            <div class="search">
              <input type="text" placeholder="Search Voters" />
            </div>
            <div class="btn">Search</div>
          </div>
          <div class="table">
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VotersList;
