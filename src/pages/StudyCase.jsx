import React from 'react';

const StudyCase = ({ client }) => {
  return (
    <div>
      <h1>Study Case</h1>
      <p>{client.name}</p>
      <p>{client.title}</p>
      <p>{client.content}</p>
    </div>
  );
};

export default StudyCase;