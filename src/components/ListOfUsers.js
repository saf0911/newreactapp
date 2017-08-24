import React from 'react';
import '../css/ListOfUsers.css';


const ListOfUsers = ({users}) => {
  return (
    <div>
      <ul className='UserList' >
        {
          users.map((user, index) =>
          <div>
            <li key={index} className="UserListName">
              Name:  &nbsp;
              {user.name}
              <br />
              Job: &nbsp;
              {user.job}
            </li>
          </div>
      )
        }
      </ul>
    </div>
  )
}

export default ListOfUsers
