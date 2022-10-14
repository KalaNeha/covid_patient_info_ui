import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Nav() {
    const navigate = useNavigate();
    const { currentUser, logout } = useAuth();

    const logoutHandler = async () => {
        try {
            await logout();
            navigate("/login");
        } catch (_) {}
    };
    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg fixed-top bg-dark">
                    <div className="container-fluid">
                        <a className="navbar-brand text-light" href="/">
                            {" "}
                            CPIS{" "}
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                            }}
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active text-light"
                                        aria-current="page"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>
                            </ul>
                            {!currentUser && (
                                <div
                                    // style={{
                                    //     padding: "0.3rem",
                                    //     background: "white",
                                    //     color: "black",
                                    //     borderRadius: "8px",
                                    //     fontWeight: "bold",
                                    //     cursor: "pointer",
                                    // }}
                                    className="nav-item"
                                >
                                    <a
                                        className="nav-link active text-light"
                                        aria-current="page"
                                        href="/login"
                                    >
                                        Log In
                                    </a>                                </div>
                            )}
                            {currentUser && (
                                <div
                                    style={{
                                        padding: "0.3rem",
                                        background: "white",
                                        color: "black",
                                        borderRadius: "8px",
                                        fontWeight: "bold",
                                        cursor: "pointer",
                                    }}
                                    onClick={logoutHandler}
                                    className="nav-item"
                                >
                                    Log Out
                                </div>
                            )}
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}
export default Nav;
