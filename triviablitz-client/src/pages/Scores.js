import React from "react";
import Table from "react-bootstrap/Table";
import "./Scores.css";

export function Scores() {
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
        <tr>
          <td>Mark</td>
          <td>15</td>
          <td>2022-06-22 14:55:55 NST</td>
        </tr>
        <tr>
          <td>Jacob</td>
          <td>23</td>
          <td>2022-06-21 08:23:44 NST</td>
        </tr>
        <tr>
          <td>Larry</td>
          <td>16</td>
          <td>2022-05-24 21:22:33 NST</td>
        </tr>
      </tbody>
    </Table>
  );  
}

export default Scores;
