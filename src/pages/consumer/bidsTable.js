import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'Id',
    dataIndex: 'productid',
    key: 'productid',
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
  },
  {
    title: 'Reserve Price',
    dataIndex: 'price',
    key: 'price',
  },

  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Rate',
    dataIndex: 'rate',
    key: 'rate',
  },
  {
    title: 'Count',
    dataIndex: 'count',
    key: 'count',
  },
  {
    title: 'Count Type',
    dataIndex: 'counttype',
    key: 'counttype',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'Weight Type',
    dataIndex: 'weighttype',
    key: 'weighttype',
  },
  {
    title: 'Volume',
    dataIndex: 'volume',
    key: 'volume',
  },
  {
    title: 'Volume Type',
    dataIndex: 'volumetype',
    key: 'volumetype',
  },
];

const BidsTable = ({ data }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default BidsTable;
