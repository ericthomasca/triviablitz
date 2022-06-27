import React from "react";
import Table from "react-bootstrap/Table";

function getUsers() {
  return fetch("/api/getUsers")
    .then(response => response.json())
    .then(users => users);
}
function printUsers(users) {
  return users.map(user => (
    <tr key={user.id}>
      <td>{user.name}</td>
      <td>{user.score}</td>
    </tr>
  ));
}

export function Scores() {

  const [users, setUsers] = React.useState([]);
  setUsers(getUsers());
  console.log(users);

  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>Score</th>
          <th>Time Last Played</th>
        </tr>
      </thead>
      <tbody>
        {printUsers(users)}
      </tbody>
    </Table>
  );
}

export default Scores;
