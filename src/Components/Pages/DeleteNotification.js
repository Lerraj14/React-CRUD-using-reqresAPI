
import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,Label } from 'reactstrap';
import styles from "./UserNotification.module.scss";
function DeleteNotification() {
  const [modal, setModal] = useState(true);
  const toggle = () => setModal(!modal);

  return (
    <div>
      <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Record Deleted</ModalHeader>
        <ModalBody>
        <Label><span className={styles['label']}>ID: </span></Label><br/>
        <Label><span className={styles['label']}>Email: </span></Label><br/>
        <Label><span className={styles['label']}>FirstName: </span></Label><br/>
        <Label><span className={styles['label']}>Lastname: </span></Label><br/>
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

export default DeleteNotification;