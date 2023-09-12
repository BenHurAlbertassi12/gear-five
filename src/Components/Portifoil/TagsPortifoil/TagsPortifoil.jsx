/* eslint-disable react/prop-types */
import React from 'react';
import './TagsPortifoil.css';

export const TagsPortifoil = ({ project }) => {
  return (
    <div className="card-label-container">
      <div className="card-label-context">
        <p>{project.name}</p>
      </div>
    </div>
  );
};
