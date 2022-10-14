import React from "react";
import Nav from "./component/Nav";
import Login from "./admin/Login";
import Home from "./user/Home";
import PatientInformation from "./admin/PatientInformation";
import StateInfo from "./user/State_list";
import DistrictList from "./user/District_list";
import DistrictInformation from "./admin/DistrictInformation";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Footer from "./component/Footer";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./component/PrivateRoute";

function App() {
    return (
        <>
            <AuthProvider>
                <Router>
                    <Nav />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />

                        <Route path="/:country" element={<StateInfo />} />
                        <Route
                            path="/:country/:state"
                            element={<DistrictList />}
                        />
                        {/* <ProtectedRoutes /> */}
                        <Route
                            path="/:country/:state/:district"
                            element={<PrivateRoute />}
                        >
                            <Route index element={<DistrictInformation />} />
                        </Route>
                        <Route
                            path="/:country/:state/:district/:patient"
                            element={<PrivateRoute />}
                        >
                            <Route index element={<PatientInformation />} />
                        </Route>
                    </Routes>
                </Router>
                <Footer />
            </AuthProvider>
        </>
    );
}

export default App;