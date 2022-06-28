import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import "./Scores.css";

function getUsers() {
  return fetch("/api/getUsers")
    .then(response => response.json())
    .then(users => users);
}
function printUsers(users) {
  
  
  return users.map(user => (
    <tr key={user._id}>
      <td>{user.name}</td>
      <td>{user.score}</td>
    </tr>
  ));
}

export function Scores() {


  const [users, setUsers] = useState([]);

  // useEffect(() => {
  //   fetch('api/getUsers')
  //     .then(res => res.json())
  //     .then(data => setUsers(data)).catch(error => console.log('error', error));
  // }, []);

  useEffect(()=>{
    var raw = "";

    var requestOptions = {
      method: 'GET',
      body: raw,
      redirect: 'follow'
    };

    fetch("api/getUsers", requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }, []);


  // console.log(users);
  let d = new Date();
  return (
    <Table striped bordered hover variant="dark" class="styled-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Time Last Played</th>
        </tr>
      </thead>
      <tbody>

        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.score}</td>
            {/* <td>{user.timeLastPlayed.$timestamp}</td> */}
            <td>{new Date(user.timeLastPlayed).toString()}</td>
          </tr>
        ))}

      </tbody>
    </Table>
  );  
}

export default Scores;
