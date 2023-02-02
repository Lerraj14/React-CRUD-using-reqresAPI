import React from 'react'
import DeleteUser from './DeleteUser';
import UpdateUser from './UpdateUser';
import styles from "./UserData.module.scss";
const Userdata = (props) => {
 
  return (
    <tr key={props.data.id}>
    <th scope="row" >{props.data.id}</th>
    <td><img src={props.data.avatar} alt="avatar"></img></td>
    <td>{props.data.email}</td>
    <td>{props.data.first_name}</td>
    <td>{props.data.last_name}</td>
    <td>
    <div className={styles['group']}>
    <UpdateUser data={props.data}></UpdateUser>
    <DeleteUser data={props.data}></DeleteUser>
    </div>  
    </td>
    </tr>
  );
}

export default Userdata;