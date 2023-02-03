import React, { useState } from "react";
import { Grid, Paper } from "@mui/material";
import FormCreate from "./FormCreate";
import "./main.css";
import Content from "./Content";

const Main = () => {
  const [newData, setNewData] = useState([]);
  const newDataAdd = (data) => {
    setNewData([
      ...newData,
      {
        name: data.name,
        email: data.email,
        number: data.number,
        msg: data.msg,
        key: Math.random,
      },
    ]);
  };
  return (
    <>
      <Grid container spacing={3}>
        <Grid item lg={7} md={8} xs={12} align="center" className="hello">
          <Paper
            elevation={6}
            style={{ backgroundColor: "#001E3C" }}
            className="grid1"
            position="sticky"
          >
            <FormCreate setNewData={newDataAdd}></FormCreate>
          </Paper>
        </Grid>
        <Grid item lg md xs={12}>
          <div className="form-details">
            <Content data={newData}></Content>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default Main;
