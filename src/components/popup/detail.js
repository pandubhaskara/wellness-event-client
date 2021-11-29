import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import styles from "./detail.module.css"
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Container } from "@mui/material";

const Popup=()=>{
    const [listofHR, setListOfHR]= useState([]);

  useEffect(()=>{
    axios.get("https://wellness-event.herokuapp.com/api/v1/event").then((response)=>{
      setListOfHR(response.data.data)
    })
  }, [])
    return <div className={styles.PopupContainer}>
    <h1>Popup</h1>
     {listofHR.map((value, key)=>{
        return <div> {value.companyName}</div>
      })}
      </div>
}

export default Popup