import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="data-list">

      {props.special.map(special => {

        return (
          <div key={special.id} className="data-list-item">
            <div className="details">{special.name}
              <p>Группа препарата: {special.group}</p>
              <p>Описание препарата: {special.description}</p>
            </div>
          </div>

        );

      })}

    </div>
  );
}
