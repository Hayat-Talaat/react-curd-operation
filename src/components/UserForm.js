import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

const UserForm = ( props ) => {
//   const initialFieldValues = {
//     fullName: "",
//     mobile: "",
//     email: "",
//     adress: ""
//   };
    
//   let [values, setValues] = useState(initialFieldValues);
  
    // const handleFormSubmit = e => {
    //   e.preventDefault();
    //   alert(`Submitting Name ${e.target.value}`);
    //   console.log("data", values.fullName);
    // };


//   const handleInputChange = e => {
//     var [name, value] = e.target.value
//     setValues({
//       ...values,
//       [name]: value
//     })
//       console.log("name", e.target.value);
//       setValues(e.target.value);
//   };
    
    

    let [fName, setfName] = useState("");
    let [mobile, setMobile] = useState("");
    let [email, setEmail] = useState("");
    let [adress, setAdress] = useState("");

    const submitValue = (e) => {
        e.preventDefault();

        const initialFieldValues = {
          fullName: fName,
          mobile: mobile,
          email: email,
          adress: adress
        };
        
        console.log("result", initialFieldValues);
        props.addOrEdit(initialFieldValues);
    };

  return (
    <>
      <Form autoComplete="off" onSubmit={submitValue}>
        <Form.Group controlId="formBasicFullName">
          <Form.Control
            name="fullName"
            // value={values.fullName}
            type="text"
            placeholder="Enter Your Full Name"
            onChange={e => setfName(e.target.value)}
          />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control
            name="mobile"
            // value={values.mobile}
            type="number"
            placeholder="Enter Your Phone"
            onChange={e => setMobile(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control
            name="email"
            // value={values.email}
            type="email"
            placeholder="Enter Email"
            onChange={e => setEmail(e.target.value)}
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Control
            name="adress"
            // value={values.adress}
            placeholder="Enter Your Adress"
            as="textarea"
            rows="4"
            onChange={e => setAdress(e.target.value)}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
};

export default UserForm;
