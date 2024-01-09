import React from 'react';
import { Table } from 'antd';

const columns = [
  {
    title: 'ID',
    dataIndex: 'productId',
    key: 'productId',
    render: (text, record, index) => index + 1,
  },
  {
    title: 'Bid By',
    dataIndex: 'bidBy',
    key: 'bidBy',
  },
  {
    title: 'Product Name',
    dataIndex: 'productTitle',
    key: 'productTitle',
  },
  {
    title: 'Bid Price',
    dataIndex: 'bidPrice',
    key: 'bidPrice',
  },
];

const ProductBidsTable = ({ data }) => {
  return (
    <Table columns={columns} dataSource={data} pagination={{ pageSize: 3 }} />
  );
};

export default ProductBidsTable;
