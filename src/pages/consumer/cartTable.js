import { CreditCardFilled } from '@ant-design/icons';
import { Table } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCartData } from '../../redux/product/product.slicer';
import { Typography } from '@material-ui/core';
const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'id',
  },
  {
    title: 'Product ID',
    dataIndex: 'productid',
    key: 'productid',
  },
  {
    title: 'Weight',
    dataIndex: 'weight',
    key: 'weight',
  },
  {
    title: 'Total Amount',
    dataIndex: 'totalamount',
    key: 'totalamount',
  },
  {
    title: 'Added On',
    dataIndex: 'createdat',
    key: 'createdat',
    render: (text) => {
      return <span>{new Date(text).toLocaleString()}</span>;
    },
  },
  {
    title: 'Pay',
    render: (text, record) => {
      return (
        <>
          {record.ispaid === 0 ? (
            <Link to={`/stripeCheckout/${record.productid}`}>
              <CreditCardFilled
                style={{ color: 'green', cursor: 'pointer', fontSize: '25px' }}
              />
            </Link>
          ) : (
            <Typography>Paid</Typography>
          )}
        </>
      );
    },
  },
];

const CartTable = ({ data }) => {
  return <Table columns={columns} dataSource={data} />;
};

export default CartTable;
