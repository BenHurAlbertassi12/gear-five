/* eslint-disable react/prop-types */
import React from 'react';
import { projects } from '../projects';

import './PhotoPortifoil.css';
import { TagsPortifoil } from '../TagsPortifoil/TagsPortifoil';

export const PhotoPortifoil = () => {
  return (
    <div className="div-total">
      {projects.map((project) => (
        <div key={project.id}>
          <a href={project.deploy} className="a-container" target="blak">
            <img
              src={project.imagem}
              alt={project.name}
              className="card-imagem"
            />
            <TagsPortifoil project={project} />
          </a>
        </div>
      ))}
    </div>
  );
};
