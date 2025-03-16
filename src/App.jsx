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
import Logout from "./pages/Logout"
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="" element={<Layout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="users" element={<Users />} />
        <Route path="analytics" element={<AnalyticsPage />} />
        <Route path="settings" element={<SettingPage />} />
        <Route path="logout" element={<Logout />} />
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
