import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import HomePage from "./page/home/HomePage";
import AboutPage from "./page/about/AboutPage";
import CustomerPage from "./page/customer/CustomerPage";
import CategoryPage from "./page/category/CategoryPage";
import ProducPage from "./page/product/ProducPage";
//import RouteNotFound from "./page/routeNotFound/RoueNotFound";
import Layout from "./component/layout/Layout";
import LayoutDashboard from "./component/layout/LayoutDashboard";

import CardPage1 from "./page-dashboard/card/CardPage";
import AboutPage1 from "./page-dashboard/about/AboutPage";
import UserPage1 from "./page-dashboard/user/UserPage";
import ReportPage1 from "./page-dashboard/report/ReportPage";
import OrderPage1 from "./page-dashboard/order/OrderPage";
import ProductPage1 from "./page-dashboard/product/ProducPage";
import CustomerPage1 from "./page-dashboard/customer/CustomerPage";
import HomePage1 from "./page-dashboard/home/HomePage";
import CategoryPage1 from "./page-dashboard/category/CategoryPage";
import LayoutDashboardLogin from "./component/layout/LayoutDashboardLogin";
import RegisterDashboard from "./page-dashboard/register/RegisterDashboard";
import LoginDashboard from "./page-dashboard/login/LoginDashboard";
function App() {
  // const isDashboard = window.location.pathname.includes("dashboard");

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="customers" element={<CustomerPage />} />
          <Route path="categories" element={<CategoryPage />} />
          <Route path="/products" element={<ProducPage />} />
        </Route>
        <Route path="/dashboard" element={<LayoutDashboard />}>
          <Route path="" element={<HomePage1 />} />
          <Route path="about" element={<AboutPage1 />} />
          <Route path="customer" element={<CustomerPage1 />} />
          <Route path="category" element={<CategoryPage1 />} />
          <Route path="product" element={<ProductPage1 />} />
          <Route path="user" element={<UserPage1 />} />
          <Route path="report" element={<ReportPage1 />} />
          <Route path="card" element={<CardPage1 />} />
          <Route path="order" element={<OrderPage1 />} />
        </Route>
        <Route path="/dashboard/login" element={<LayoutDashboardLogin />}>
          <Route path="" element={<LoginDashboard />} />
          <Route path="register" element={<RegisterDashboard />} />
        </Route>
      </Routes>
      {/* {!isDashboard && 
        <div>
          <Layout />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/customers" element={<CustomerPage />} />
            <Route path="/categories" element={<CategoryPage />} />
            <Route path="/products" element={<ProducPage />} />
            <Route path="*" element={<RouteNotFound />} />
          </Routes>
        </div>
      }

      {isDashboard && 
        <div>
          <LayoutDashboard/>
          <Routes>
            <Route path="/dashboard">
              <Route path="" element={<HomePage1/>} />
              <Route path="about" element={<AboutPage1/>} />
              <Route path="customer" element={<CustomerPage1/>} />
              <Route path="category" element={<CategoryPage1 />} />
              <Route path="product" element={<ProductPage1/>} />
              <Route path="user" element={<UserPage1 />} />
              <Route path="report" element={<ReportPage1/>} />
              <Route path="card" element={<CardPage1/>} />
              <Route path="order" element={<OrderPage1/>} />
            </Route>
          </Routes>
        </div>
      } */}
    </BrowserRouter>
  );
}

export default App;
