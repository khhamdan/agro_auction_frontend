import React from 'react';
import Topsellers from '../../components/famers/farmer';

import MapCardFarmer from '../../components/farmerSection';
import FarmerSideBarMenu from '../../components/farmer/menu';
import { Button, Layout } from 'antd';
import { Content, Footer, Header } from 'antd/es/layout/layout';
import PageHeader from '../../components/header/PageHeader';
import Sider from 'antd/es/layout/Sider';
import AppFooter from '../../components/footer/';
import FarmerMenu from '../../components/farmer/menuLinks';

export default function Farmer() {
  const headerStyle = {
    color: '#fff',
    height: 64,
    backgroundColor: '#5b8c5116',
    marginLeft: '-50px',
  };
  const contentStyle = {
    textAlign: 'center',
    minHeight: 120,
    lineHeight: '10px',
    color: '#fff',
    // backgroundColor: '#0958d9',
  };
  return (
    <>
      <Layout>
        <Header style={headerStyle}>
          <PageHeader />
        </Header>
        <Layout>
          <Sider width="10%">
            <FarmerMenu />
          </Sider>
          <Content style={contentStyle}>
            <div style={{ paddingTop: '10vh', paddingBottom: '10vh' }}>
              {/* <Topsellers /> */}
              <MapCardFarmer />
            </div>
          </Content>
        </Layout>
        <Footer style={{ padding: 0 }}>
          <AppFooter />
        </Footer>
      </Layout>
    </>
  );
}
