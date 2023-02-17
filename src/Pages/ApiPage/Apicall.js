import React, { useEffect } from "react";
import { Button, Paper, Stack, Typography } from "@mui/material";
import "./apiCall.css";
import { connect, useDispatch, useSelector } from "react-redux";
import { loadImages } from "../../redux/actions";

const colorWhite = {
  color: "white",
};
const colorPrimary = {
  color: "#1976D2",
};
const Apicall = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);

  return (
    <>
      <div className="Content">
        <Typography variant="h5" mt={2} mb={8}>
          Welcome {data.user.users.firstName + " " + data.user.users.lastName}
        </Typography>
        <div className="content">
          <section className="grid">
            {data.images.map((image) => (
              <img src={image.urls.thumb} alt={image.user.username} />
            ))}
          </section>
          {data.error && (
            <div className="error">{JSON.stringify(data.error)}</div>
          )}
          <Button
            className="mb-5"
            variant="contained"
            disabled={data.isLoading}
            onClick={() => dispatch(loadImages())}
          >
            Load More
          </Button>
        </div>
      </div>
    </>
  );
};

export default Apicall;
