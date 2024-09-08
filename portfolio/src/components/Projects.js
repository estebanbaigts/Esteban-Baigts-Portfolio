import React from 'react';

const projects = [
  { title: 'Projet 1', description: 'Description du projet 1.' },
  { title: 'Projet 2', description: 'Description du projet 2.' },
];

const Projects = () => {
  return (
    <section id="projects" className="p-10 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">Mes Projets</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div key={index} className="bg-white p-6 rounded shadow">
            <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
