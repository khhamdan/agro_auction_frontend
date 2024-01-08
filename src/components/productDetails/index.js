import { HomeOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Col, Modal, Row, Typography } from 'antd';
import styles from './product.module.css';

import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  addBidApi,
  getBidHistoryApi,
  getSingleProductApi,
  putOnAuction,
  sendMessageApi,
  settleAuctionApi,
} from '../../Http/api';
import Timer from '../Timer';
import { Tabs } from 'antd';
import ProductBidsTable from './ProductBidsTable';
import { baseURL } from '../../Http/config';
import Swal from 'sweetalert2';
import { CircularProgress } from '@material-ui/core';

const { Title } = Typography;

export default function ProductDetailsPage(productId) {
  const [product, setProduct] = useState({});
  const [bidPrice, setBidPrice] = useState(null);
  const [bids, setBids] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = user ? user.userId : null;
  const currentTime = new Date().getTime();
  const auctionEndTime = Date.parse(product.auctionEnd);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bidDone, setBidDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
    handlePlaceBid();
    setBidDone(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const navigate = useNavigate();

  const handleOpenChat = () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const userId = user.userId;
    const farmerId = product.userId;
    const payload = {
      sender_id: userId,
      reciever_id: farmerId,
      message: 'Hi, I am looking to buy your product ' + product.productTitle,
    };
    sendMessageApi(payload)
      .then((res) => {
        localStorage.setItem('chatOpen', true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handlePlaceBid = () => {
    console.log('handlePlaceBid called');
    const user = JSON.parse(localStorage.getItem('user'));
    if (bidPrice === null) {
      return;
    }
    const userId = user.userId;
    const payload = {
      userId: userId,
      auctionId: product.auctionId,
      price: bidPrice,
      productId: product.productId,
      // endTime: product.auctionEnd,
    };
    addBidApi(payload)
      .then((res) => {
        Swal.fire({
          title: 'Success',
          text: `Bid Successfully done`,
          icon: 'success',
          confirmButtonText: 'Ok',
        });
        fetchBidHistory(product.auctionId);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleSettleAuction = () => {
    setIsLoading(true);
    const payload = {
      productId: product.productId.toString(),
      auctionId: product.auctionId.toString(),
    };

    settleAuctionApi(payload)
      .then((res) => {
        setIsLoading(false);
        Swal.fire({
          title: 'Success',
          text: `Auction Successfully Settled`,
          icon: 'success',
          confirmButtonText: 'Ok',
        });
      })
      .then(() => {
        navigate('/consumer');
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    console.log('useEffect - Fetching initial product data');

    // const updateCurrentTime = () => {
    //   setProduct((prevProduct) => ({
    //     ...prevProduct,
    //     auctionEnd: prevProduct.auctionEnd,
    //   }));
    // };

    // Update current time every second
    // const intervalId = setInterval(updateCurrentTime, 5000);

    // Fetch initial product data
    getSingleProductApi(productId.productId)
      .then((res) => {
        console.log('Initial product data fetched:', res.data.productInfo);
        setProduct(res.data.productInfo);
        console.log('bidDone:', bidDone);
        if (!bidDone) {
          console.log('Fetching bid history...');
          fetchBidHistory(res.data.productInfo.auctionId);
        }
      })
      .catch((err) => {
        console.error(err);
      });

    // Clean up the interval on component unmount
    // return () => {
    //   console.log('Cleaning up interval');
    //   clearInterval(intervalId);
    // };
  }, [productId.productId, bidDone]);

  const fetchBidHistory = (auctionId) => {
    getBidHistoryApi(auctionId)
      .then((res) => {
        console.log('Bid history fetched:', res.data.Bids);
        setBids(res.data.Bids);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className={`${styles.productDetails} customContainer`}>
      <Breadcrumb className="customBreadcrumbs">
        <Breadcrumb.Item>
          <Link to="/">
            <HomeOutlined />
          </Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/consumer">Products</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>{product.productTitle}</Breadcrumb.Item>
      </Breadcrumb>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className={styles.productDetailsImage}>
            <img
              src={`${baseURL}assets/products/${product.image}`}
              alt="pic"
            ></img>
          </div>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div className={styles.productDetailsContent}>
            <Title level={4}>{product.productTitle}</Title>
            <Timer
              end={Date.parse(product.auctionEnd) / 1000}
              isAuctionEnded={false}
              setIsAuctionEnded={() => {}}
            />
            <Title level={5}>
              Starting from {product.rate} /- PKR per {product.weight}{' '}
              {product.weighttype}
            </Title>

            {userId ? (
              currentTime > auctionEndTime ? (
                <Button
                  type="primary"
                  size="large"
                  onClick={showModal}
                  disabled
                >
                  Auction Time Ended
                </Button>
              ) : (
                <Button
                  type="primary"
                  size="large"
                  onClick={showModal}
                  disabled={product.auctionId === null}
                >
                  {product.auctionId === null ? 'Not for Auction ' : 'Bid'}
                </Button>
              )
            ) : (
              <Button
                type="primary"
                size="large"
                onClick={() => {
                  navigate('/signin');
                }}
              >
                Log in to join the bid
              </Button>
            )}
          </div>
          {userId &&
          currentTime > auctionEndTime &&
          userId === product.highestBidderId ? (
            <>
              <div style={{ marginLeft: '20px' }}>
                <Title level={5}>You are the higgest bidder</Title>
                <Button
                  type="primary"
                  size="large"
                  onClick={handleSettleAuction}
                  disabled={product.status === 0}
                >
                  {isLoading ? (
                    <CircularProgress size={20} style={{ color: 'white' }} />
                  ) : (
                    'Settle Auction'
                  )}
                </Button>
              </div>
            </>
          ) : (
            <></>
          )}
        </Col>
      </Row>
      {userId && (
        <Row gutter={[16, 16]} className={styles.sellerDescriptionRow}>
          <Col
            xs={24}
            sm={24}
            md={12}
            lg={12}
            xl={12}
            className={styles.sellerDescription}
          >
            <div className={styles.sellerInfoContainer}>
              <div className={styles.sellerInfoContent}>
                <Button type="primary" size="large" onClick={handleOpenChat}>
                  Chat With Farmer
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      )}
      {/* <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100%',
          marginBottom: '105px !important',
          marginTop: '16px',
        }}
      >
        <Tabs defaultActiveKey="1" centered>
          <Tabs.TabPane tab="Bids" key="1">
            <ProductBidsTable key="bidsTable" data={bids} />
          </Tabs.TabPane>
        </Tabs>
      </div> */}
      {userId && (
        <Row gutter={[16, 16]} className={styles.bidsTableContainer}>
          <Col xs={24} sm={24} md={24} lg={24} xl={24}>
            {bids.length > 0 ? (
              <Tabs defaultActiveKey="1" centered>
                <Tabs.TabPane tab="Bids" key="1">
                  <ProductBidsTable key="bidsTable" data={bids} />
                </Tabs.TabPane>
              </Tabs>
            ) : (
              <div></div>
            )}
          </Col>
        </Row>
      )}
      <Modal
        title="Bidding Price"
        visible={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>Add your bid price for this product</p>
        <input
          type="number"
          placeholder="Enter your bid price"
          value={bidPrice}
          onChange={(e) => setBidPrice(e.target.value)}
          min={product.rate}
          required
          style={{
            width: '80%',
            padding: '1rem',
            border: '1px solid #ddd',
            borderRadius: '5px',
            outline: 'none',
          }}
        />
      </Modal>
    </div>
  );
}
