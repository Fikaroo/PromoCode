import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Admin/Dashboard";
import List from "./pages/Admin/List";
import Generate from "./pages/Admin/Generate";
import Merchants from "./pages/Admin/Merchants";
import Report from "./pages/Admin/Report";
import MerchantReport from "./pages/Merchant/MerchantReport";
import MerchantDashboard from "./pages/Merchant/MerchantDashboard";
import MerchantSearch from "./pages/Merchant/MerchantSearch";
import { useTranslation } from "react-i18next";
import Layout from "./components/Layout";
import Login from "./pages/Login";

const App = () => {
  // const { t, i18n } = useTranslation();

  // document.body.dir = i18n.dir();
  // i18n.changeLanguage("en");
  return (
    <div className="flex min-h-screen font-medium text-gray-900 font-inter bg-gray-50">
      <Routes>
        <Route
          path="/dashboard"
          element={
            <Layout variant={1} title="Dashboard">
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/dashboard/list"
          element={
            <Layout variant={1} title="List">
              <List />
            </Layout>
          }
        />
        <Route
          path="/dashboard/generate"
          element={
            <Layout variant={1} title="Generate">
              <Generate />
            </Layout>
          }
        />
        <Route
          path="/dashboard/merchants"
          element={
            <Layout variant={1} title="Merchants">
              <Merchants />
            </Layout>
          }
        />
        <Route
          path="/dashboard/report"
          element={
            <Layout variant={1} title="Report">
              <Report />
            </Layout>
          }
        />
        <Route
          path="/merchant/report"
          element={
            <Layout variant={2} title="Report">
              <MerchantReport />
            </Layout>
          }
        />
        <Route
          path="/merchant"
          element={
            <Layout variant={2} title="Dashboard">
              <MerchantDashboard />
            </Layout>
          }
        />
        <Route
          path="/merchant/search"
          element={
            <Layout variant={2} title="Search">
              <MerchantSearch />
            </Layout>
          }
        />
        <Route path="/" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
