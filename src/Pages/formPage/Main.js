import React, { useEffect, useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import FormCreate from "./FormCreate";
import "./main.css";
import Content from "./Content";
import { fetchApi } from "../../redux";
import { connect, Connect, useSelector } from "react-redux";

const Main = ({ apiData, fetchApi }) => {
  const data = useSelector((state) => state.api);
  console.log(data);
  useEffect(() => {
    fetchApi();
  }, []);
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
            {data.loading ? (
              <Typography variant="h5"> Loading </Typography>
            ) : data.error ? (
              <Typography variant="h5">
                {" "}
                {data.error}
              </Typography>
            ) : (
              <Typography variant="h5">
                Today's Temprature In {data.data.location.name} is{" "}
                {data.data.current.feelslike_c} °C
              </Typography>
            )}
            <FormCreate></FormCreate>
          </Paper>
        </Grid>
        <Grid item lg md xs={12}>
          <div className="form-details">
            <Content></Content>
          </div>
        </Grid>
      </Grid>
    </>
  );
};
const mapStateToProps = (state) => {
  return {
    apiData: state.data,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchApi: () => dispatch(fetchApi()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Main);
