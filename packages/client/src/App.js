import React from "react";
import {CssBaseline} from "@material-ui/core";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import "animate.css";

import {AdminLogin, EnterPassword, LoginProcess, Menu, UserLogin,} from "./components";

import EnterPasswordUser from "./../src/components/LoginProcess/enterPassword/user/index";
import "simplebar/dist/simplebar.min.css";
import DashboardUser from "./components/DashboardAdmin/User/Menu";

const App = () => {
    return (
        <Router>
            <div style={{display: "flex"}}>
                <CssBaseline/>

                <Routes>
                    <Route exact path="/" element={<LoginProcess/>}/>
                    <Route exact path="/adminLogin" element={<AdminLogin/>}/>
                    <Route exact path="/userLogin" element={<UserLogin/>}/>
                    <Route
                        exact
                        path="/enterpassword"
                        element={<EnterPassword/>}
                    />
                    <Route
                        exact
                        path="/enterpasswordUser"
                        element={<EnterPasswordUser/>}
                    />
                    <Route exact path="/dashboardAdmin" element={<Menu/>}/>
                    <Route
                        exact
                        path="/dashboardUser"
                        element={<DashboardUser/>}
                    />
                </Routes>
            </div>
        </Router>
    );
};

export default App;
