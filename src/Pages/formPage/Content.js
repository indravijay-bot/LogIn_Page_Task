import React from "react";
import { Paper, Stack, Typography } from "@mui/material";
import "./content.css";
const colorWhite = {
  color: "white",
};
const colorPrimary = {
  color: "#1976D2",
};
const Content = (props) => {
  const data = props.data;
  return (
    <>
      <Typography variant="h5" mt={2} mb={8}>
        Data
      </Typography>

      {data.length === 0 ? (
        <Typography variant="caption" style={colorWhite}>
          Please fill the form for display your login details
        </Typography>
      ) : (
        <>
          <Stack spacing={4}>
            {data.map((dataCard) => (
              <Paper
                elevation={6}
                style={{
                  backgroundColor: "#001E3C",
                  paddingTop: "2rem",
                  paddingBottom: "2rem",
                }}
              >
                <Stack spacing={1}>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Typography variant="overline" style={colorWhite}>
                      <span style={colorPrimary}>Name : </span> {dataCard.name}
                    </Typography>
                    <Typography variant="overline" style={colorWhite}>
                      <span style={colorPrimary}>Ph No : </span>{" "}
                      {dataCard.number}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Typography variant="overline" style={colorWhite}>
                      <span style={colorPrimary}>Email : </span>{" "}
                      {dataCard.email}
                    </Typography>
                  </Stack>
                  <Stack
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                    spacing={3}
                  >
                    <Typography variant="overline" style={colorWhite}>
                      <span style={colorPrimary}>Message </span> "{" "}
                      {dataCard.msg} "
                    </Typography>
                  </Stack>
                </Stack>
              </Paper>
            ))}
          </Stack>
        </>
      )}
    </>
  );
};

export default Content;
