import{
  Button, 
  FormLabel, 
  TextField,
} from "@mui/material";

import {Box} from "@mui/system";
import axios from "axios";
import React, {useState} from "react";
import {useNavigate} from "react-router-dom";

const AddPatient = ()=>{
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    phone_number: "",
    service_needed: "",
    insurance: "",
  });
  const handleChange = (e) =>{
    setInputs( (prevState) =>({
      ...prevState, 
      [e.target.name]: e.target.value, 
    }));
  };
  const sendRequest = async () =>{
    await axios
    .post("http://localhost:3005/health", {
      name: String(inputs.name), 
      email: String(inputs.email),
      phone_number: String(inputs.phone_number),
      service_needed: String(inputs.service_needed),
      insurance: String(inputs.insurance),
    })
    .then((res)=> res.data).then(alert("Information Has Been Successfully Submitted!"))
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    console.log(inputs)
    sendRequest().then(()=> history("/health"));
  }

  return(
    <div className="content">
      <form onSubmit={handleSubmit}>
        <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
        >
          <FormLabel>Name:</FormLabel>
          <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
          />
          <FormLabel>Email Address:</FormLabel>
          <TextField
          value={inputs.email}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="email"
          />
          <FormLabel>Phone Number:</FormLabel>
          <TextField
          value={inputs.phone_number}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="phone_number"
          />
          <FormLabel>Service Needed:</FormLabel>
          <TextField
          value={inputs.service_needed}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="service_needed"
          />
          <FormLabel>Insurance</FormLabel>
          <TextField
          value={inputs.insurance}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="insurance"
          />
          <Button variant="contained" type="submit">
            Add Patient
          </Button>
          </Box>
      </form>
    </div>
  )
};

export default AddPatient;