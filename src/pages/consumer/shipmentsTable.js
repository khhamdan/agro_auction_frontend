import React from "react";
import { Table } from "antd";

const columns = [
  {
    title: "ID",
    dataIndex: "shipid",
    key: "shipid",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
  {
    title: "Postal Code",
    dataIndex: "postalcode",
    key: "postalcode",
  },
  {
    title: "City",
    dataIndex: "city",
    key: "city",
  },
  {
    title: "Country",
    dataIndex: "country",
    key: "country",
  },
  {
    title: "Paid On",
    dataIndex: "createdat",
    key: "createdat",
    render: (text) => {
      return <span>{new Date(text).toLocaleString()}</span>;
    },
  },
];

const ShipmentsTable = ({ data }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default ShipmentsTable;
