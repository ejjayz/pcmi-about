import React from 'react';
import { myProjects } from '../constants'; // Adjust the path as necessary

const Ministries = () => {
  return (
    <div className="ministry-section">
      <h2 className="grid-headtext">Our Ministries</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {myProjects.map((project) => (
          <div key={project.title} className="ministry-card">
            <img src={project.logo} alt={project.title} style={project.logoStyle} />
            <h3>{project.title}</h3>
            <p>{project.desc}</p>
            <a href={project.href} className="btn">Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ministries;