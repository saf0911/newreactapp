import React from 'react';
import './ListOfUsers.css';


const ListOfUsers = ({users}) => {
  return (
    <div>
      <ul className='UserList' >
        {
          users.map((user, i, t) =>
          <div>
            <li key={i} className="UserListName">
              Name:  &nbsp;
              {user.name}
            </li>

            <li key={t} className="UserListJob">
              Job: &nbsp;
              {user.job}
            </li>
        </div>)
        }
      </ul>
    </div>
  )
}

export default ListOfUsers
