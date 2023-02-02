
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label } from 'reactstrap';
import styles from "./UserNotification.module.scss";
function UserNotification({updatedRecord}) {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);
  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Update was Succesfull!</ModalHeader>
        <ModalBody>
        <Label><span className={styles['label']}>ID: </span>{updatedRecord.id}</Label><br/>
        <Label><span className={styles['label']}>Email: </span>{updatedRecord.email}</Label><br/>
        <Label><span className={styles['label']}>FirstName: </span>{updatedRecord.first_name}</Label><br/>
        <Label><span className={styles['label']}>Lastname: </span>{updatedRecord.last_name}</Label><br/>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>
            Close
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default UserNotification;