import React from "react";
import { Container, Table } from "reactstrap";
import { useState, useEffect } from "react";
import UserData from "../../Components/Pages/UserData";
import CreateUser from "../../Components/Pages/CreateUser";
import Pagination  from "../../Components/Pages/Pagination";
function Index() {
  const [data, setData] = useState([]);
  const [createdData, setCreatedData] = useState([]);
  const [page,setPage]=useState(1);
  //Run the function when page load
  useEffect(() => {
    loadDataHandler();
  }, [page]);
  //we will use async and await for fetching data
  const loadDataHandler = async () => {
    const response = await fetch(`https://reqres.in/api/users?page=${page}`);
    //store data into our setData variable
    const data = await response.json();
    setData(data.data);
  };
  // handler for creating new user
  const reciveDataHandler = function (data) {
    // limits the row per page up to 10
    if(createdData.length===5){
      return;
    }else{
      setCreatedData(createdData.concat(data));
    }
  };
  // Handler for setting pagees
  const togglePageHandler=function(page){
    setPage(page);
  };

  return (
    <Container>
      <div className="mt-3 text-right">
        <CreateUser reciveDataHandler={reciveDataHandler}></CreateUser>
      </div>
      <div>
      <Table className="mt-3 " hover  responsive>
        <thead>
          <tr>
            <th>ID</th>
            <th>Profile</th>
            <th>Email</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {/* maps on the data array to display to the user */}
          {data.map((data) => {
            return <UserData data={data} key={data.id}></UserData>;
          })}
          {/* maps on the array for new created user */}
          {createdData !== ""
            ? createdData.map((data) => {
                return <UserData data={data} key={data.id}createdData={createdData}></UserData>;
              })
            : ""}
        </tbody>
      </Table>
      </div>
       <Pagination togglePageHandler={togglePageHandler}></Pagination>
    </Container>
  );
}

export default Index;
