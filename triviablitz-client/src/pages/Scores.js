import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";

export function Scores() {

  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8800/api/getUsers")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []);

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
        {users.map(user => (
          <tr key={user._id}>
            <td>{user.name}</td>
            <td>{user.score}</td>
            <td>{user.timeLastPlayed}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default Scores;
