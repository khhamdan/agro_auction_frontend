import {
  CodeSandboxCircleFilled,
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
} from '@ant-design/icons';
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
  deleteuserApi,
  editProfileApi,
  editUserFromAdminApi,
  getAllProductsApi,
  getAllUsersApi,
  putOnAuction,
  updateProductInfo,
} from '../../Http/api';
import styles from '../farmer/farmer.module.css';
import { baseURL } from '../../Http/config';
import { useTranslation } from 'react-i18next';

const { Text } = Typography;
const { confirm } = Modal;
const { Option } = Select;

const AdminTable = ({ userInTable }) => {
  console.log('User in Table', userInTable);
  const [viewModalVisible, setViewModalVisible] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [editedUsers, setEditedUsers] = useState(null);
  const [users, setUsers] = useState([]);
  const [form] = Form.useForm();
  const [t, i18n] = useTranslation('global');

  const navigate = useNavigate();

  const columns = [
    {
      title: 'User Id',
      dataIndex: 'userid',
      key: 'userid',
    },
    {
      title: 'User Name',
      dataIndex: 'username',
      key: 'username',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },

    {
      title: 'Role',
      dataIndex: 'role',
      key: 'role',
    },
    {
      title: 'Created At',
      dataIndex: 'createdat',
      key: 'createdat',
    },

    {
      title: t('global.FarmerDashboard.products.actions'),
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <Link className={styles.link} onClick={() => handleEditUsers(record)}>
            <EditOutlined />
          </Link>

          <Link
            className={styles.link}
            onClick={() => handleDeleteUsers(record)}
          >
            <DeleteOutlined />
          </Link>
        </Space>
      ),
    },
  ];

  const showDeleteConfirm = (user) => {
    confirm({
      title: `Are you sure you want to delete ${user.username}?`,
      icon: <DeleteOutlined />,
      cancelButtonProps: { style: { background: 'lightgray' } },
      onOk() {
        handleDelete(user);
      },
    });
  };

  const handleEditUsers = (user) => {
    setEditedUsers({ ...user });
    // Set form values here
    form.setFieldsValue({
      username: user.username,
      email: user.email,
      role: user.role,
      // Add other fields as needed
    });
    setEditModalVisible(true);
  };

  const handleDeleteUsers = (user) => {
    showDeleteConfirm(user);
  };

  const handleDelete = async (user) => {
    await deleteuserApi(user.userid)
      .then((res) => {
        getAllUsersApi().then((res) => {
          const filteredUsers = res.data.users.filter(
            (user) => user.role == userInTable
          );
          setUsers(filteredUsers);
        });
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

  const handleEdit = async () => {
    try {
      const values = await form.validateFields();

      // Include userId and productId in the updatedProduct
      const updatedUser = {
        ...values,
        userId: editedUsers.userid,
      };

      // Make API call to update product
      await editUserFromAdminApi(updatedUser);
      setEditModalVisible(false);

      Swal.fire({
        title: 'Success',
        text: 'Successfully Updated',
        icon: 'success',
        confirmButtonText: 'Ok',
      });

      // Update the state directly without a page reload
      getAllUsersApi().then((res) => {
        const filteredUsers = res.data.users.filter(
          (user) => user.role == userInTable
        );
        setUsers(filteredUsers);
      });
    } catch (error) {
      console.error('Validation failed', error);
      Swal.fire({
        title: 'Error',
        text: 'Failed to update user. Please try again.',
        icon: 'error',
        confirmButtonText: 'Ok',
      });
    }
  };
  useEffect(() => {
    getAllUsersApi()
      .then((res) => {
        const filteredUsers = res.data.users.filter(
          (user) => user.role == userInTable
        );
        setUsers(filteredUsers);
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
  }, []);

  return (
    <div className={styles.tableContainer}>
      <Text className={styles.componentHeading}>
        {userInTable.charAt(0).toUpperCase() + userInTable.slice(1)}
      </Text>

      <Table
        columns={columns}
        dataSource={users}
        pagination={{
          itemRender: (current, type, originalElement) => {
            if (type === 'page') {
              return <span>{current}</span>;
            }
            return originalElement;
          },
        }}
      />

      {/* Edit Product Modal */}
      <Modal
        title="Edit Users"
        visible={editModalVisible}
        onOk={handleEdit}
        okText={'Update'}
        cancelButtonProps={{ style: { background: 'lightgray' } }}
        onCancel={() => setEditModalVisible(false)}
      >
        <Form
          form={form}
          // initialValues={editedUsers}
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 18 }}
        >
          <Form.Item label="User name" name="username">
            <Input />
          </Form.Item>
          <Form.Item label="Email" name="email">
            <Input />
          </Form.Item>

          <Form.Item label="Role" name="role">
            <Select>
              <Option value="user">user</Option>
              <Option value="farmer">farmer</Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default AdminTable;
