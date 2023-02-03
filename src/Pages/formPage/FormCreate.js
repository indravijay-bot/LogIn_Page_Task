import React, { useState } from "react";
import { Avatar, Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import "./formCreate.css";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

const marginTopStyle = {
  marginTop: "2rem",
};
const colorWhite = {
  color: "white",
};

const FormCreate = (props) => {
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");

  const { register, reset, handleSubmit } = useForm();

  const submitCliked = (data) => {
    let formRejct = false;
    if (!data.name || !data.name.length) {
      setNameError("name is required");
      formRejct = true;
    } else {
      setNameError("");
    }
    if (!data.number || !data.number.length) {
      setNumberError("number is required");
      formRejct = true;
    } else if (data.number.length !== 10) {
      setNumberError("Invalid Number");
      formRejct = true;
    } else {
      setNumberError("");
    }
    if (!data.email || !data.email.length) {
      setEmailError("email is required");
      formRejct = true;
    } else if (
      !/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        data.email
      )
    ) {
      setEmailError("invalid Email");
      formRejct = true;
    } else {
      setEmailError("");
    }

    if (formRejct) {
      return false;
    }
    props.setNewData(data);
    reset();

    return true;
  };

  return (
    <div className="form_details">
      <Avatar style={{ backgroundColor: "#001e3c", border: "3px solid white" }}>
        <LoginRoundedIcon sx={{ fontSize: 30 }}></LoginRoundedIcon>
      </Avatar>
      <Typography variant="h5" mt={2}>
        LOG IN
      </Typography>
      <Typography variant="caption" style={colorWhite}>
        Please fill the form for display your login details
      </Typography>
      <form style={marginTopStyle} onSubmit={handleSubmit(submitCliked)}>
        <Stack spacing={4}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <TextField
              error={nameError && nameError.length ? true : false}
              helperText={nameError}
              size="small"
              label="Name *"
              sx={{ input: { color: "white" } }}
              id="secret-create-title"
              autoComplete="off"
              focused
              {...register("name")}
            ></TextField>
            <TextField
              error={numberError && numberError.length ? true : false}
              helperText={numberError}
              type="number"
              size="small"
              label="Phone Number *"
              sx={{ input: { color: "white" } }}
              className="numberfieldClass"
              autoComplete="off"
              focused
              {...register("number")}
            ></TextField>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <TextField
              style={{ width: 470 }}
              error={emailError && emailError.length ? true : false}
              helperText={emailError}
              size="small"
              label="Email *"
              sx={{ input: { color: "white" } }}
              {...register("email")}
              autoComplete="off"
              focused
            ></TextField>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <TextField
              style={{ width: 470 }}
              sx={{ input: { color: "white" } }}
              rows={4}
              label="Message"
              {...register("msg")}
              autoComplete="off"
              focused
            ></TextField>
          </Stack>
        </Stack>
        <Button type="submit" variant="outlined" style={marginTopStyle}>
          Submit
        </Button>
      </form>
    </div>
  );
};

export default FormCreate;
