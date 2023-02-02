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
import UserNotification from"./UserNotification";

const UpdateUser = ({data}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [firstName, setFirstName] = useState(data.first_name);
  const [lastName, setLastName] = useState(data.last_name);
  const [email, setEmail] = useState(data.email);
  const [notification,setNotification]=useState(false);
  const [updatedRecord,setUpdatedRecord]=useState("");
  const postData= async function(e){
    e.preventDefault();
    const response = await fetch(`https://reqres.in/api/users/${data.id}`, {
      method:"PUT",
      body:JSON.stringify({
        id: data.id,
        email: email,
        first_name: firstName,
        last_name: lastName,
        avatar:"placeholder"
      }), headers: {
        "Content-type": "application/json; charset=UTF-8"
      }
    })
      response.json().then(data => {
        console.log(data);
        setNotification(true);
        setUpdatedRecord(data);
      });
  };
  return (
    <div>
    {notification&&<UserNotification updatedRecord={updatedRecord}></UserNotification>}
     <Button outline color="warning" className='me-2' onClick={toggle}>Edit</Button>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Edit User</ModalHeader>
        <ModalBody>
          <Form onSubmit={postData}>
            <FormGroup>
              <Label for="exampleEmail">Email</Label>
               <Input
                id="exampleEmail"
                name="email"
                defaultValue={data.email}
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="firstname">First Name</Label>
              <Input
                id="firstname"
                name="firstname"
                defaultValue={data.first_name}
                type="firstname"
                onChange={(e) => setFirstName(e.target.value)}
              />
            </FormGroup>
            <FormGroup>
              <Label for="lastname">Last Name</Label>
              <Input
                id="lastname"
                name="lastname"
                defaultValue={data.last_name}
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

export default UpdateUser;
