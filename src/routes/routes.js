import { BrowserRouter, BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/login"
import Dashboard from "../pages/dashboard"
function RoutesLink() {
    return (
        <Router>
            <Routes>
                {/* <Route index element={<UsersIndex />} />
             <Route path=":id" element={<UserProfile />} /> */}
                <Route exact path="" element={<Login />} />
                <Route exact path="dashboard" element={<Dashboard/>} />
            </Routes>
        </Router>
    );
}

export default RoutesLink;