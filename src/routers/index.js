import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Footer from '../components/footer';
import Header from '../components/header/Header';
import Farmer from '../pages/farmer';

import Consumer from '.././pages/consumer';
import Home from '../pages/home';
import Login from '../pages/login';
import Signup from '../pages/signup';
// import ProductDetails from "../components/productDetails";
import ProductDetail from '../pages/productDetails';
import UploadFile from '../pages/uploadProduct';
import { AdminRoute, FarmerRoute, UserRoute } from './protectedRoute';

import UniversalHooks from '../components/UniversalHooks';
import AdminDashboard from '../components/adminDashboard';
import AdminPanel from '../components/adminPanel/dashboard';
import EditProfile from '../components/editProfile';
import FarmerDashboard from '../components/farmer/dashboard';
import FarmerUploadProduct from '../components/farmer/uploadProduct';
import PageHeader from '../components/header/PageHeader';
import AboutUs from '../pages/aboutus';
import CheckoutPage from '../pages/checkout';
import PaymentForm from '../pages/checkout/checkout';
import Usersdashboard from '../pages/profilepage';
import Thanks from '../pages/thanks';
import FarmerCharts from '../components/farmer/charts';
import StripeCheckout from '../components/stripeCheckout/index';
import AddReview from '../components/Reviews/index';
import BuyerHeader from '../components/header/BuyerHeader';
import AdminUsers from '../components/adminPanel/adminUsers';
import AdminFarmer from '../components/adminPanel/adminFarmers';
import AddUsers from '../components/adminPanel/addUsers';

const Routers = () => {
  return (
    <UniversalHooks>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header />
                <Home />
                <Footer />
              </>
            }
          />
          <Route
            path="/farmer"
            element={
              <>
                {/* <PageHeader /> */}
                <div className="page-content">
                  <Farmer />
                </div>
                {/* <Footer /> */}
              </>
            }
          />
          <Route
            path="/consumer"
            element={
              <>
                <BuyerHeader />
                <div className="page-content">
                  <Consumer />
                </div>
                <Footer />
              </>
            }
          />
          <Route path="/farmer/reports" element={<FarmerCharts />} />
          <Route path="/farmer/dashboard" element={<FarmerDashboard />} />
          <Route path="/" element={<FarmerDashboard />} />
          <Route
            path="/farmer/product/upload"
            element={<FarmerUploadProduct />}
          />
          <Route
            path="/signin"
            element={
              <>
                <div className="page-content">
                  <Login />
                </div>
              </>
            }
          />
          <Route
            path="/signup"
            element={
              <>
                <div className="page-content">
                  <Signup />
                </div>
              </>
            }
          />
          <Route
            path="/product/:id"
            element={
              <>
                <BuyerHeader />
                <div
                  className="page-content"
                  style={{
                    paddingTop: '10vh',
                    paddingBottom: '10vh',
                  }}
                >
                  <ProductDetail />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/aboutus"
            element={
              <>
                <PageHeader />
                <div className="page-content">
                  <AboutUs />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/uploadproduct"
            element={
              <FarmerRoute>
                <PageHeader />

                <div
                  style={{
                    backgroundColor: '#f5f5f5',
                    height: '100vh',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column',
                  }}
                >
                  <UploadFile />
                </div>
              </FarmerRoute>
            }
          />
          <Route
            path="/myprofile/:id"
            element={
              <>
                <PageHeader />
                <div className="page-content">
                  <Usersdashboard />
                </div>
                <Footer />
              </>
            }
          />

          <Route path="/admindashboard" element={<AdminDashboard />} />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path="/adminpanel/farmer" element={<AdminFarmer />} />
          <Route path="/adminpanel/users" element={<AdminUsers />} />
          <Route path="/adminpanel/addusers" element={<AddUsers />} />

          <Route path="/editprofile" element={<EditProfile />} />
          <Route
            path="/stripeCheckout/:id"
            element={
              <>
                <BuyerHeader />
                <div className="page-content">
                  <StripeCheckout />
                </div>
                <Footer />
              </>
            }
          />
          <Route
            path="/addReview/:id"
            element={
              <>
                <BuyerHeader />
                <div className="page-content">
                  <AddReview />
                </div>
                <Footer />
              </>
            }
          />

          <Route path="/thanks" element={<Thanks />} />
          <Route
            path="/checkoutProduct/:id"
            element={
              <>
                <PageHeader />
                <div
                  className="page-content"
                  style={{
                    paddingTop: '10vh',
                    paddingBottom: '10vh',
                  }}
                >
                  <PaymentForm />
                </div>
                <Footer />
              </>
            }
          />
        </Routes>
      </Router>
    </UniversalHooks>
  );
};

export default Routers;
