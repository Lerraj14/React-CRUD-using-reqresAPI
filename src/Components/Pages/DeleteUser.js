import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Table,
  ModalFooter,
} from "reactstrap";
import DeleteNotification from "./DeleteNotification";
const DeleteUser = ({data}) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const [notification, setNotification] = useState(false);

  const deleteData = async function (e) {
    e.preventDefault();
    toggle();
    const response = await fetch(`https://reqres.in/api/users/${data.id}`, {
      method: "DELETE",
      headers: {
        'Content-type': 'application/json'
         }
    });
        if(response.ok){
            setNotification(true);
        };
  };

  return (
    <div>
      {notification&&<DeleteNotification/>}
      <Button outline color="danger" className="me-2" onClick={toggle}>
        Delete
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="xl">
        <ModalHeader toggle={toggle}>Delete User</ModalHeader>
        <ModalBody>
          <Table borderless>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Profile</th>
                  <th>Email</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                </tr>
              </thead>
              <tbody>
                <tr key={data.id}>
                  <th scope="row">{data.id}</th>
                  <td>
                    <img src={data.avatar} alt="avatar"></img>
                  </td>
                  <td>{data.email}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td></td>
                </tr>
              </tbody>
          </Table>
          <ModalFooter>
            <h5>Are Your sure?</h5>
            <Button color="danger" type="submit" onClick={deleteData}>
              Delete
            </Button>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalBody>
      </Modal>
    </div>
  );
};

export default DeleteUser;
