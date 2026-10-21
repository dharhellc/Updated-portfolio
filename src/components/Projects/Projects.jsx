
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: 'Portfolio Website',
      description:
        'A personal portfolio built with React to showcase my skills, experience, and projects.',
      technologies: 'React.js, CSS',
    },
    {
      title: 'Insurance Application',
      description:
        'Worked on application testing, SQL data validation, and full-stack development.',
      technologies: 'C#, Blazor, SQL Server',
    },
    {
      title: 'CRUD Web API',
      description:
        'A web application demonstrating create, read, update, and delete operations.',
      technologies: '.NET, C#, SQL Server',
    },
  ];

  return (
    <section className="projects" id="projects">
      <div className="projects-container">
        <p className="projects-eyebrow">MY WORK</p>
        <h2>Featured Projects</h2>
        <p className="projects-intro">
          Here are some projects that showcase my skills and experience.
        </p>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <span>{project.technologies}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
