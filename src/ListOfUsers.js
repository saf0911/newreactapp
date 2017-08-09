import React from 'react';
import './ListOfUsers.css';


const ListOfUsers = ({users}) => {
  return (
    <ul >
      {
        users.map((user, i) =>
        <li key={i} className="UserList">
          Name:
          {user.name}
          Job:
          {user.job}
        </li>)
      }
    </ul>
  )
}

export default ListOfUsers
