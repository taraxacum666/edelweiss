import React from 'react';

// Using "Stateless Functional Components"
export default function(props) {
  return (
    <div className="user-profile">
      <img src={props.imageUrl} />
      <div className="details">
        <h1>{props.name}</h1>
        <p>ГалаФон: {props.email}</p>
        <p>Раса: {props.race}</p>
        <p>Диагноз пациента: <strong>{props.diagnoz}</strong></p>
      </div>
    </div>
  );
}
