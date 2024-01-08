import React, { useEffect, useState } from 'react';
import { baseURL } from '../../Http/config';
import styles from './farmer.module.css';
import { Link } from 'react-router-dom';
import { Empty, Table, Typography } from 'antd';
import { getFarmerReportApi } from '../../Http/api';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;

const ReportTable = () => {
  const [soldProducts, setSoldProducts] = useState([]);
  const [t, i18n] = useTranslation('global');
  const columns = [
    {
      title: 'ID',
      dataIndex: 'productId',
      key: 'productId',
      render: (text, record, index) => index + 1,
    },
    {
      title: t('global.FarmerDashboard.reportPage.productTitle'),
      dataIndex: 'productTitle',
      key: 'productTitle',
    },
    {
      title: t('global.FarmerDashboard.reportPage.soldAmount'),
      dataIndex: 'soldAmount',
      key: 'soldAmount',
    },
    {
      title: t('global.FarmerDashboard.reportPage.image'),
      dataIndex: 'image',
      key: 'image',
      render: (image, record) => {
        return (
          <img
            src={`${baseURL}assets/products/${image}`}
            alt="reportImage"
            width={80}
            height={80}
          />
        );
      },
    },
  ];

  useEffect(() => {
    const userId = JSON.parse(localStorage.getItem('user'));
    getFarmerReportApi(userId.userId)
      .then((res) => {
        setSoldProducts(res.data.soldProducts);
      })
      .catch((err) => {
        Swal.fire({
          title: 'No data found',
          text: '',
          icon: 'info',
          confirmButtonText: 'Ok',
        });
      });
  }, []);

  return (
    <div className={styles.tableContainer}>
      {soldProducts.length > 0 ? (
        <Table
          columns={columns}
          dataSource={soldProducts}
          pagination={{
            itemRender: (current, type, originalElement) => {
              if (type === 'page') {
                return <span>{current}</span>;
              }
              return originalElement;
            },
          }}
        />
      ) : (
        <Empty
          description={t('global.FarmerDashboard.reportPage.productNotSoldYet')}
        />
      )}
    </div>
  );
};

export default ReportTable;
