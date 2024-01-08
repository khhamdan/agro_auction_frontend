import { DollarCircleOutlined, InboxOutlined } from '@ant-design/icons';
import { Card, Typography, Row } from 'antd';
import React from 'react';
import { useNavigate } from 'react-router-dom';
const { Title, Text } = Typography;

const CardProduct = ({
  image,
  productTitle,
  rate,
  weight,
  weighttype,
  count,
  counttype,
  userId,
  productId,
  auctionEnd,
  isListed,
  auctionId,
  highestBidderId,
  status,
}) => {
  const navigate = useNavigate();

  const navigateToProduct = () => {
    const productData = {
      productId,
      userId,
      image,
      productTitle,
      rate,
      weight,
      weighttype,
      count,
      counttype,
      auctionEnd,
      isListed,
      auctionId,
      highestBidderId,
      status,
    };
    localStorage.setItem('productData', JSON.stringify(productData));
    navigate(`/product/${productId}`);
  };
  return (
    <Card
      hoverable
      style={{
        width: 300,
        margin: '20px',
        borderRadius: '8px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      }}
    >
      <div style={{ position: 'relative' }}>
        <img
          alt="Product"
          src={`http://localhost:8000/assets/products/${image}`}
          style={{
            borderRadius: '8px 8px 0 0',
            width: '100%',
            height: '200px',
            objectFit: 'contain',
          }}
          preview={false}
        />
      </div>
      <div style={{ padding: '16px' }}>
        <Title level={4}>{productTitle}</Title>
        <Row
          style={{
            marginBottom: '10px',
          }}
        >
          <DollarCircleOutlined
            style={{
              marginRight: 10,
            }}
          />
          <Text>{rate} /-</Text>
        </Row>
        <Row
          style={{
            marginBottom: '10px',
          }}
        >
          <InboxOutlined
            style={{
              marginRight: 10,
            }}
          />
          <Text>
            {weight} {weighttype}
          </Text>
        </Row>

        <button
          className="landing-box-button"
          type="primary"
          onClick={navigateToProduct}
        >
          Preview
        </button>
      </div>
    </Card>
  );
};

export default CardProduct;
