import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "../pages/Home";
import Users from "../pages/Users";
import Header from "../components/main/Header";
import NotFound from "../pages/NotFound";
// import AuthRoute from "./AuthRoute";

// const isAuthenticated = () => {
//   const user = localStorage.getItem("user");
//   return user !== null;
// };

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        {/* <AuthRoute path="/users" isAuthenticated={isAuthenticated()} element={<Users />} /> */}
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
