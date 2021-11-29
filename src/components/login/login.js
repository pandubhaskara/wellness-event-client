import React from "react";
import styles from "./login.module.css";
import { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Popup from "../popup/detail";

export default function Login(props) {
  const [values, setValues] = useState({
    username: "",
    password: "",
  });
  // const [token, setToken] = useState("")

  const handlechange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setValues({ ...values, [name]: value });
  };
  const role = 1;

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://wellness-event.herokuapp.com/api/v1/user/", {
        username: values.username,
        password: values.password,
      })
      .then((Response) => {
        const token = Response.data.token;
        console.log(Response, "nanananana");
        localStorage.setItem("token", token);
      })
      .catch((Error) => {
        console.log(Error);
      });
  };
  const directly = () => {
    if (role == 1) {
      window.location.href = "http://localhost:3000/hr";
    } else if (role == 2) {
      window.location.href = "http://localhost:3000/vendor";
    } else {
      window.location.href = "http://localhost:3000";
      ;
    }
  }

  const handleGetUser = () => {
    const token = localStorage.setItem();
  };
  const [isOpen, setIsOpen] = useState();

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className={styles.divContainer}>
      <div className={styles.boxLogo}>
      </div>

      <form className={styles.formRegister} onSubmit={handleSubmit}>
        <label>Username</label>
        <input
          type="username"
          onChange={handlechange}
          name="username"
          type="username"
          value={values.username}
        // required
        />
        <label>Password</label>
        <input
          type="password"
          onChange={handlechange}
          name="password"
          type="password"
          value={values.password}
        // required
        />

        <button className={styles.buttonLogin} type="Submit">
          Sign In
        </button>
      </form>
      <button onClick={openModal}>Popup</button>
      <button onClick={directly}>Router</button>
      <p>
        Don't have an account?
        <span
          onClick={props.openRegister}
          style={{ color: "#FE024E", cursor: "pointer" }}
        >
          {" "}
          Sign Up
        </span>
      </p>
      <Modal
        keepMounted
        open={isOpen}
        onClose={closeModal}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description">
        <div>
          <Box>
            <Popup />
          </Box>
        </div>
      </Modal>
    </div>

  );
}
