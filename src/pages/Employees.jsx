import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
// import Controls from "../../components/controls/Controls";
import "../components/Navbar.css";
import { Modal, ModalBody } from "reactstrap";
import {
  TextField,
  Box,
  Button,
  Select,
  InputLabel,
  MenuItem,
  FormControl,
} from "@mui/material";
function Employees() {
  const initialValues = {
    username: "",
    address: "",
    city: "",
    email: "",
    aso: "",
    state: "",
    location: "",
    userlevel: "",
    role: "",
  };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors, formValues, isSubmit]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.address) {
      errors.address = "Address is required!";
    }
    if (!values.city) {
      errors.city = "City is required!";
    }
    if (!values.aso) {
      errors.aso = "ASO is required!";
    }
    if (!values.email) {
      errors.email = "Email is required!";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email format!";
    }
    return errors;
  };

  const [userlevel, setUserLevel] = React.useState("");
  const handleChange4 = (event) => {
    setUserLevel(event.target.value);
  };
  const [Role, setRole] = React.useState("");
  const handleChange2 = (event) => {
    setRole(event.target.value);
  };
  // const [city, setCity] = React.useState("");
  // const handleChange1 = (event) => {
  //   setCity(event.target.value);
  // };
  const [state, setState] = React.useState("");
  const handleChange3 = (event) => {
    setState(event.target.value);
  };
  // const [text, setText] = useState();
  const [modal, setmodal] = useState();

  return (
    <div className="buttondiv position-static">
      <Modal size="lg" isOpen={modal} toggle={() => setmodal(!modal)}>
        {/* <ModalHeader toggle={() => setmodal(!modal)}>Employee Admission Form</ModalHeader> */}
        <ModalBody>
          {/* <Form onSubmit={handleSubmit}> */}
          <form onSubmit={handleSubmit}>
            <Grid container>
              <Grid item xs={6}>
                <Box
                  component="form"
                  sx={{
                    "& > :not(style)": { m: 1, width: "25ch" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div className="field">
                    <label>Full</label>
                    <TextField
                      type="text"
                      name="username"
                      placeholder="Username"
                      value={formValues.username}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <p>{formErrors.username}</p>
                  <div className="field">
                    <label>Address</label>
                    <TextField
                      type="text"
                      name="address"
                      placeholder="Address"
                      value={formValues.address}
                      onChange={handleChange}
                      fullWidth
                      multiline
                      rows={3}
                      required
                    />
                  </div>
                  <p>{formErrors.address}</p>
                  <div className="field">
                    <label>City</label>
                    <TextField
                      type="text"
                      name="city"
                      placeholder="City"
                      value={formValues.city}
                      onChange={handleChange}
                      fullWidth
                      required
                    />
                  </div>
                  <p>{formErrors.city}</p>

                  <FormControl fullWidth>
                    <InputLabel id="Role">Role</InputLabel>
                    <Select
                      labelId="Role"
                      id="role"
                      value={Role}
                      label="Role"
                      onChange={handleChange2}
                      fullWidth
                    >
                      <MenuItem value={4}>FrontEnd Developer</MenuItem>
                      <MenuItem value={5}>Backend Developer</MenuItem>
                      <MenuItem value={6}>Full Stack Developer</MenuItem>
                    </Select>
                  </FormControl>
                  <div className="field">
                    <label>ASO</label>
                    <TextField
                      type="text"
                      name="aso"
                      placeholder="ASO"
                      value={formValues.aso}
                      onChange={handleChange}
                      fullWidth
                    />
                  </div>
                  <p>{formErrors.aso}</p>
                </Box>
              </Grid>
              <Grid item xs={6} fullWidth>
                <div className="field">
                  <label>Email</label> <br />
                  <TextField
                    type="text"
                    name="email"
                    placeholder="Email"
                    value={formValues.email}
                    onChange={handleChange}
                    fullWidth
                  />
                </div>
                <p>{formErrors.email}</p>
                <div className="field">
                  <label>Location</label>
                  <TextField
                    type="text"
                    name="location"
                    placeholder="Location"
                    value={formValues.location}
                    onChange={handleChange}
                    fullWidth
                    required
                    multiline
                    rows={3}
                  />
                </div>
                <p>{formErrors.location}</p>
                <FormControl fullWidth>
                  <InputLabel id="User-Level">State Name</InputLabel>
                  <Select
                    labelId="State Name"
                    id="user-level"
                    value={state}
                    label="State Name"
                    onChange={handleChange3}
                  >
                    <MenuItem value={1}>Maharashtra</MenuItem>
                    <MenuItem value={2}>Delhi</MenuItem>
                    <MenuItem value={3}>Gujarat</MenuItem>
                  </Select>
                </FormControl>
                <br />
                <br />
                <FormControl fullWidth>
                  <InputLabel id="User-Level">User Level</InputLabel>
                  <Select
                    labelId="User-Level"
                    id="user-level"
                    value={userlevel}
                    label="User Level"
                    onChange={handleChange4}
                    inputProps={{}}
                  >
                    <MenuItem value={11}>L1</MenuItem>
                    <MenuItem value={12}>L2</MenuItem>
                    <MenuItem value={13}>L3</MenuItem>
                  </Select>
                </FormControl>

                <Button variant="contained" type="submit" className="btns">
                  Submit
                </Button>
                <Button
                  variant="contained"
                  className="btns "
                  onClick={() => setmodal(false)}
                >
                  Cancel
                </Button>
              </Grid>
            </Grid>

            {/* <button className="fluid ui button blue"></button> */}
          </form>
        </ModalBody>
      </Modal>
      <div className="Addempbtn">
        <Button
          variant="contained"
          className="btn "
          onClick={() => setmodal(true)}
        >
          {" "}
          Add Employee
        </Button>
      </div>
      <br />
      <h1 className="employeecss">
        {" "}
        This is Employee Page made by Saad Shaikh
      </h1>
    </div>
  );
}

export default Employees;
