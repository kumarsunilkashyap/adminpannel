import React from "react";
import AdminSidebar from "./component/AdminSidebar";
import Footer from "./component/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <AdminSidebar />

      <Footer />
    </>
  );
};

export default Layout;
