import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Users from "../pages/Users";
import Header from "../components/main/Header";
import NotFound from "../pages/NotFound";

const AppRouter = () =>{
    return (
        <Router>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/users" element={<Users />} />
                <Route path="/*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}

export default AppRouter;