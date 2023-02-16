import React, { useEffect, useState } from "react";
import {
  Avatar,
  Button,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useForm } from "react-hook-form";
import "./formCreate.css";
import { useHistory, useNavigate } from "react-router-dom";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import VpnKeyOutlinedIcon from "@mui/icons-material/VpnKeyOutlined";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/actions";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { Navigate } from "react-router-dom";
import { loadImages } from "../../redux/actions";
const marginTopStyle = {
  marginTop: "3rem",
};
const colorWhite = {
  color: "white",
};

const FormCreate = () => {
  const disptach = useDispatch();
  let navigate = useNavigate();
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [numberError, setNumberError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const { register, reset, handleSubmit } = useForm();
  const [countryError, setCountryError] = useState("");
  const [dropdownValue, setDropdownValue] = useState("hi");
  const reduxData = useSelector((state) => state);
  const [apiError, setApiError] = useState("");
  useEffect(() => {
    if (reduxData.images.length > 0) {
      navigate("/apiCall");
    } else if (reduxData.error != null) {
      setApiError(reduxData.error);
    }
  }, [reduxData.images, reduxData.error]);

  const submitCliked = (data) => {
    let formRejct = false;

    if (!data.firstName || !data.firstName.length) {
      setNameError("name is required");
      console.log("enters in null");
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

    if (!data.country || !data.country.length || data.country === "hi") {
      setCountryError("Please Select a option");
      formRejct = true;
    } else {
      setCountryError("");
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
    if (!data.password || !data.password.length) {
      setPasswordError("Password is required");
      formRejct = true;
    } else if (data.password.length < 8) {
      setPasswordError("Enter password with minimum 8 characters");
      formRejct = true;
    } else {
      setPasswordError("");
    }

    if (formRejct) {
      return false;
    }
    setDropdownValue("hi");
    console.log(dropdownValue);
    disptach(login(data));

    reset();

    return true;
  };

  return (
    <div className="form_details">
      <VpnKeyOutlinedIcon sx={{ fontSize: 60 }}></VpnKeyOutlinedIcon>

      <Typography variant="h5" mt={2}>
        SIGN UP
      </Typography>
      <Typography variant="caption">
        Please fill the form and submit to see Images with API CALL
      </Typography>
      <form style={marginTopStyle} onSubmit={handleSubmit(submitCliked)}>
        <Stack spacing={4}>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            defaultValue="choose"
          >
            <TextField
              error={nameError && nameError.length ? true : false}
              helperText={nameError}
              size="small"
              label="First Name *"
              // onKeyUp={(event) => {
              //   if (!/[a-z]/i.test(event.key)) {
              //     event.target.value = event.target.value.slice(0, -1);
              //   }
              // }}
              // id="secret-create-title"
              autoComplete="off"
              {...register("firstName")}
              onChange={(event) => {
                setNameError(false);

                if (!/[a-z]/i.test(event.nativeEvent.data)) {
                  event.target.value = event.target.value.slice(0, -1);
                }
              }}
            ></TextField>
            <TextField
              size="small"
              label="Last Name"
              // id="secret-create-title"
              autoComplete="off"
              {...register("lastName")}
              onChange={(event) => {
                setNameError(false);

                if (!/[a-z]/i.test(event.nativeEvent.data)) {
                  event.target.value = event.target.value.slice(0, -1);
                }
              }}
            ></TextField>
          </Stack>
          <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={3}
          >
            <FormControl sx={{ width: 222 }} size="small">
              <InputLabel id="demo-select-small">Country *</InputLabel>
              <Select
                labelId="demo-select-small"
                id="demo-select-small"
                {...register("country")}
                defaultValue={dropdownValue}
                label="Country *"
                error={countryError && countryError.length ? true : false}
                onChange={() => setCountryError(false)}
              >
                <MenuItem value="hi">Please Select a Country</MenuItem>
                <MenuItem value="India">India</MenuItem>
                <MenuItem value="pakistan">Pakistan</MenuItem>
                <MenuItem value="australia">Austrlia</MenuItem>
                <MenuItem value="new zealand">New Zealand</MenuItem>
                <MenuItem value="usa">USA</MenuItem>
              </Select>
              {countryError && countryError.length ? (
                <FormHelperText style={{ color: "red" }}>
                  {countryError}
                </FormHelperText>
              ) : (
                <></>
              )}
            </FormControl>
            <TextField
              error={numberError && numberError.length ? true : false}
              helperText={numberError}
              type="number"
              size="small"
              label="Phone Number *"
              className="numberfieldClass"
              {...register("number")}
              onChange={() => setNumberError(false)}
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
              {...register("email")}
              autoComplete="off"
              onChange={() => setEmailError(false)}
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
              error={passwordError && passwordError.length ? true : false}
              helperText={passwordError}
              size="small"
              label="Password *"
              {...register("password")}
              autoComplete="off"
              onChange={() => setPasswordError(false)}
            ></TextField>
          </Stack>
        </Stack>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          style={marginTopStyle}
        >
          Submit
        </Button>
      </form>
      {apiError ? (
        <Typography variant="caption">
          API Error Please try again Later
        </Typography>
      ) : (
        <></>
      )}
    </div>
  );
};

export default FormCreate;
