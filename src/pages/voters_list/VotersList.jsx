import React from "react";
import "./VotersList.scss";
import { IoIosArrowDown } from "react-icons/io";
import { Table } from "antd";
const VotersList = () => {


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

        <div class="tabs">
             <div class="tab">
              गाव नुसार 
             </div>
             <div class="tab">
              गणा नुसार 
             </div>
             <div class="tab">
              आडनाव नुसार 
             </div>
             <div class="tab">
              प्रभाक नुसार 
             </div>
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
            <Table dataSource={dataSource} columns={columns} />
          </div>
        </div>
      </div>
    </>
  );
};

export default VotersList;
