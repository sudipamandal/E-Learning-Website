import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UseUserauth } from "./context/UserAuthContext";
import "./navbar.css";

const Navbar = () => {
  const { logOut } = UseUserauth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div>
      <div className="nav">
        <div class="left">eShiksha</div>
        <div class="right">
          <ul>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#features">Features</a>
            </li>
            <li>
              <a href="#partners">Partners</a>
            </li>
            <li>
              <div className="d-grid gap-2">
                <Button variant="primary" onClick={handleLogOut}>
                  Log out
                </Button>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
