import Layout from "./Layout";
import DashboardPage from "./pages/DashboardPage ";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Users from "./pages/Users";
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingPage from "./pages/SettingPage";
import Logout from "./pages/Logout";
import Login from "./pages/Login";
import PageNotFound from "./pages/PageNotFound";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route index path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<Users />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="logout" element={<Logout />} />
        <Route path="login" element={<Login />} />
        <Route path="*" element={<PageNotFound />} />
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
