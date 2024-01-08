import { DeleteOutlined, EditOutlined, EyeOutlined } from '@ant-design/icons';
import {
  Form,
  Input,
  InputNumber,
  Modal,
  Space,
  Table,
  Typography,
  Select,
  Button,
} from 'antd';
import React, { useEffect, useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import {
  cancelAuctionApi,
  deleteProductById,
  getAllProductsApi,
  putOnAuction,
  updateProductInfo,
} from '../../Http/api';
import styles from './farmer.module.css';
import { baseURL } from '../../Http/config';
import { useTranslation } from 'react-i18next';
import { current } from '@reduxjs/toolkit';

const { Text } = Typography;
const { confirm } = Modal;
const { Option } = Select;
const ProductsTable = () => {
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedProduct, setEditedProduct] = useState(null);
  const [products, setProducts] = useState([]);
  const [form] = Form.useForm();
  const [t, i18n] = useTranslation('global');

  const navigate = useNavigate();

  const columns = [
    {
      title: t('global.FarmerDashboard.products.id'),
      dataIndex: 'productId',
      key: 'productId',
    },
    {
      title: t('global.FarmerDashboard.products.productTitle'),
      dataIndex: 'productTitle',
      key: 'productTitle',
    },
    {
      title: t('global.FarmerDashboard.products.description'),
      dataIndex: 'productDescription',
      key: 'productDescription',
    },
    {
      title: t('global.FarmerDashboard.products.rate'),
      dataIndex: 'rate',
      key: 'rate',
    },
    {
      title: t('global.FarmerDashboard.products.location'),
      dataIndex: 'location',
      key: 'location',
    },
    {
      title: t('global.FarmerDashboard.products.weight'),
      dataIndex: 'weight',
      key: 'weight',
    },
    {
      title: t('global.FarmerDashboard.products.weightType'),
      dataIndex: 'weighttype',
      key: 'weighttype',
    },
    {
      title: t('global.FarmerDashboard.products.count'),
      dataIndex: 'count',
      key: 'count',
    },
    {
      title: t('global.FarmerDashboard.products.countType'),
      dataIndex: 'counttype',
      key: 'counttype',
    },
    {
      title: t('global.FarmerDashboard.products.volume'),
      dataIndex: 'volume',
      key: 'volume',
    },
    {
      title: t('global.FarmerDashboard.products.volumeType'),
      dataIndex: 'volumetype',
      key: 'volumetype',
    },
    {
      title: t('global.FarmerDashboard.products.image'),
      dataIndex: 'image',
      key: 'image',
      render: (image, record) => {
        return (
          <img
            src={`${baseURL}assets/products/${image}`}
            alt="product"
            width={80}
            height={80}
          />
        );
      },
    },
    {
      title: t('global.FarmerDashboard.products.status'),
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: t('global.FarmerDashboard.products.listonAuction'),
      key: 'auction',
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => handleAuction(record)}
            disabled={record.auctionId !== null}
          >
            {record.auctionId === null
              ? t('global.FarmerDashboard.products.listonAuction')
              : t('global.FarmerDashboard.products.auctioned')}
          </Button>
        </Space>
      ),
    },
    {
      title: 'Cancel Auction',
      key: 'canceluction',
      render: (text, record) => (
        <Space size="middle">
          <Button
            onClick={() => cancelAuction(record)}
            disabled={record.highestBid !== null || record.auctionId === null}
          >
            Cancel Auction
          </Button>
        </Space>
      ),
    },
    {
      title: t('global.FarmerDashboard.products.actions'),
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Link
            className={styles.link}
            onClick={() => handleViewProduct(record)}
          >
            <EyeOutlined />
          </Link>
          <Link
            className={styles.link}
            onClick={() => handleEditProduct(record)}
          >
            <EditOutlined />
          </Link>

          <Link
            className={styles.link}
            onClick={() => handleDeleteProduct(record)}
          >
            <DeleteOutlined />
          </Link>
        </Space>
      ),
    },
  ];
  const handleButton = () => {
    navigate('/farmer/product/upload');
  };

  const showDeleteConfirm = (product) => {
    confirm({
      title: `Are you sure you want to delete ${product.productTitle}?`,
      icon: <DeleteOutlined />,
      cancelButtonProps: { style: { background: 'lightgray' } },
      onOk() {
        handleDelete(product);
      },
    });
  };

  const handleViewProduct = (product) => {
    setSelectedProduct(product);
    setViewModalVisible(true);
  };

  const handleEditProduct = (product) => {
    setEditedProduct({ ...product });
    setEditModalVisible(true);
    // form.setFieldsValue(editedProduct); // Set form values
  };

  const handleDeleteProduct = (product) => {
    showDeleteConfirm(product);
  };

  const handleDelete = async (product) => {
    await deleteProductById(product.productId)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => {
        console.error(err);
        Swal.fire({
          title: 'Error',
          text: 'Error',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      });
  };

  const handleAuction = async (product) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user && user.userId) {
      const userId = user.userId;

      const payload = {
        userId: userId,
        productId: product.productId,
        weight: product.weight,
        reservePrice: product.rate,
        endTime: product.auctionEnd,
      };

      try {
        await putOnAuction(payload);
        Swal.fire({
          title: 'Success',
          text: 'Product listed on auction successfully',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        const userInfo = JSON.parse(localStorage.getItem('user'));
        const productsResponse = await getAllProductsApi({
          userId: userInfo.userId,
        });

        setProducts(productsResponse.data.productInfo);
      } catch (error) {
        Swal.fire({
          title: 'Error',
          text: error,
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    }
  };

  const cancelAuction = async (product) => {
    const payload = {
      productId: product.productId,
      auctionId: product.auctionId,
    };

    try {
      await cancelAuctionApi(payload);
      Swal.fire({
        title: 'Success',
        text: 'Product listing successfully cancalled',
        icon: 'success',
        confirmButtonText: 'Ok',
      });
      const userInfo = JSON.parse(localStorage.getItem('user'));
      const productsResponse = await getAllProductsApi({
        userId: userInfo.userId,
      });

      setProducts(productsResponse.data.productInfo);
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error,
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };

  const handleEdit = async () => {
    console.log('Edited Product called:');

    const { userId } = JSON.parse(localStorage.getItem('user'));
    if (userId) {
      try {
        const values = await form.validateFields();

        // Include userId and productId in the updatedProduct
        const updatedProduct = {
          ...editedProduct,
          ...values,
          userId: userId,
          productid: editedProduct.productId, // Assuming productId is present in editedProduct
        };

        console.log('Edited Product:', updatedProduct);
        // Make API call to update product
        await updateProductInfo(updatedProduct);
        setEditModalVisible(false);

        Swal.fire({
          title: 'Success',
          text: 'Successfully Updated',
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        // Fetch all products after successful edit
        const userInfo = JSON.parse(localStorage.getItem('user'));
        const productsResponse = await getAllProductsApi({
          userId: userInfo.userId,
        });

        setProducts(productsResponse.data.productInfo);
      } catch (error) {
        console.error('Validation failed', error);
        Swal.fire({
          title: 'Error',
          text: 'Failed to update product. Please try again.',
          icon: 'error',
          confirmButtonText: 'Ok',
        });
      }
    }
  };

  // const handleImageChange = (e) => {
  //   const file = e.target.files[0];
  //   const reader = new FileReader();
  //   reader.onloadend = () => {
  //     setEditedProduct({ ...editedProduct, image: reader.result });
  //   };
  //   if (file) {
  //     reader.readAsDataURL(file);
  //   }
  // };
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem('user'));
    if (userInfo && userInfo.userId) {
      getAllProductsApi({
        userId: userInfo.userId,
      })
        .then((res) => {
          console.log('Product', res.data.productInfo);
          setProducts(res.data.productInfo);
        })
        .catch((err) => {
          console.error(err);
          Swal.fire({
            title: 'No data found',
            text: '',
            icon: 'info',
            confirmButtonText: 'Ok',
          });
        });
    } else {
      navigate('/signin');
    }
  }, []);

  return (
    <div className={styles.tableContainer}>
      <Text className={styles.componentHeading}>
        {t('global.FarmerDashboard.products.title')}
      </Text>
      <div style={{ float: 'right', paddingBottom: '5px' }}>
        <Button onClick={handleButton}>
          {t('global.FarmerDashboard.upload')}
        </Button>
      </div>
      <Table
        columns={columns}
        dataSource={products}
        pagination={{
          itemRender: (current, type, originalElement) => {
            if (type === 'page') {
              return <span>{current}</span>;
            }
            return originalElement;
          },
        }}
      />

      <Modal
        title="View Product Details"
        visible={viewModalVisible}
        onOk={() => setViewModalVisible(false)}
        onCancel={() => setViewModalVisible(false)}
        cancelButtonProps={{ style: { background: 'lightgray' } }}
      >
        {selectedProduct && (
          <div>
            <p>
              <span style={{ fontWeight: 'bold' }}>Product title:</span>{' '}
              {selectedProduct.productTitle}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Product Description:</span>{' '}
              {selectedProduct.productDescription}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Rate:</span>{' '}
              {selectedProduct.rate}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Location:</span>{' '}
              {selectedProduct.location}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Weight:</span>{' '}
              {selectedProduct.weight}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Weight Type:</span>{' '}
              {selectedProduct.weighttype}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Count:</span>{' '}
              {selectedProduct.count}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Count Type:</span>{' '}
              {selectedProduct.counttype}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Volume:</span>{' '}
              {selectedProduct.volume}
            </p>
            <p>
              <span style={{ fontWeight: 'bold' }}>Volume Type:</span>{' '}
              {selectedProduct.volumetype}
            </p>
            <p>
              <span
                style={{
                  fontWeight: 'bold',
                }}
              >
                Image:
              </span>
            </p>
            <div>
              <img
                src={`${baseURL}assets/products/${selectedProduct.image}`}
                alt="image"
                width={80}
                height={80}
              />
            </div>
          </div>
        )}
      </Modal>

      {/* Edit Product Modal */}
      <Modal
        title="Edit Product"
        visible={editModalVisible}
        onOk={handleEdit}
        okText={'Update'}
        cancelButtonProps={{ style: { background: 'lightgray' } }}
        onCancel={() => setEditModalVisible(false)}
      >
        <Form
          form={form}
          initialValues={editedProduct}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item label="Product Title" name="productTitle">
            <Input />
          </Form.Item>
          <Form.Item label="Description" name="productDescription">
            <Input />
          </Form.Item>
          <Form.Item label="Rate" name="rate">
            <InputNumber />
          </Form.Item>
          <Form.Item label="Location" name="location">
            <Select>
              <Option value="Lahore">Lahore</Option>
              <Option value="Islamabad">Islamabad</Option>
              <Option value="Peshawar">Peshawar</Option>
              <Option value="Quetta">Quetta</Option>
              <Option value="Karachi">Karachi</Option>
              <Option value="Peshawar">Peshawar</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Weight" name="weight">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Weight Type" name="weighttype">
            <Select>
              <Option value="grams">grams</Option>
              <Option value="kilograms">kilogram</Option>
              <Option value="milligrams">milligrams</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Count" name="count">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Count Type" name="counttype">
            <Select>
              <Option value="pieces">pieces</Option>
            </Select>
          </Form.Item>
          <Form.Item label="Volume" name="volume">
            <InputNumber />
          </Form.Item>

          <Form.Item label="Volume Type" name="volumetype">
            <Select>
              <Option value="bushels">bushels</Option>
            </Select>
          </Form.Item>
          {/* <Form.Item label="Product Image" name="image">
            <Input type="file" accept="image/*" onChange={handleImageChange} />{' '}
          </Form.Item> */}
        </Form>
      </Modal>
    </div>
  );
};

export default ProductsTable;
