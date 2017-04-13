import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.users.map(user => {

        return (
          <div key={user.id} className="data-list-item">
            <div className="details">
              <Link to={'/users/' + user.id}>{user.name}</Link>
            </div>
            <div className="controls">
              <button onClick={props.lockupUser.bind(null, user.id)} className="lockup">В карцер</button>
              <button onClick={props.deleteUser.bind(null, user.id)} className="delete">Выписать</button>
            </div>
          </div>
        );

      })}

    </div>
  );
}
