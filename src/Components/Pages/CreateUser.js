import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Input,
  Form,
  FormGroup,
  Label,
} from "reactstrap";

const CreateUser = ({reciveDataHandler}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');



  const postData= async function postData(e){
    e.preventDefault();
    // console.log(firstName);
    // console.log(lastName);
    // console.log(email);
    const response = await fetch("https://reqres.in/api/users", {
      method:"POST",
      body:JSON.stringify({
        id: Math.round(Math.random()),
        email: email,
        first_name: firstName,
        last_name: lastName,
        avatar:"placeholder"
      }), headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      response.json().then(data => {
        reciveDataHandler(data);
      });
  };


  return (
    <div>
      <Button color="primary" onClick={toggle}>
        + Add User
      </Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Create User</ModalHeader>
        <ModalBody>
          <Form onSubmit={postData}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
              <Input
                id="exampleEmail"
                name="email"
                placeholder="example@Email.com"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input
                id="firstname"
                name="firstname"
                placeholder="Firstname"
                type="firstname"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input
                id="lastname"
                name="lastname"
                placeholder="Lastname"
                type="lastname"
                onChange={(e) => setLastName(e.target.value)}
              />
            </FormGroup>

            <Button color="primary" className="me-2" type="submit" onClick={toggle}>
            Submit
          </Button>
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
          </Form>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default CreateUser;
