/* eslint-disable react/prop-types */
import React from 'react';
import { projects } from '../projects';

export const PhotoPortifoil = () => {
  return (
    <div>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <h2>{project.name}</h2>
            <img
              src={project.imagem}
              alt={project.name}
              className="imagem-projeto"
            />
          </div>
        ))}
      </div>
    </div>
  );
};
