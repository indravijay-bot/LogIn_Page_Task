import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FormCreate from "./FormCreate";
import "./main.css";

import { connect, Connect, useSelector } from "react-redux";

const Main = () => {
  // const data = useSelector((state) => state.user.users);
  // console.log(data);

  return (
    <>
      <Grid container spacing={3}>
      <Grid item lg={3} md={2}>

      </Grid>
        <Grid item lg={6} md={8} xs={12} align="center" className="hello">
          <Paper
            elevation={6}
            style={{ backgroundColor: "#FFF" }}
            className="grid1"
            position="sticky"
          >
           
            <FormCreate></FormCreate>
          </Paper>
        </Grid>
        <Grid item lg={3} md={2} >
        
      </Grid>
        
      </Grid>
    </>
  );
};


export default Main;
