function Projects() {
  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div className="card">

      <div id="project-card">
      <p> Portfolio Website</p>
       <img src="/portfolio.png" alt="Portfolio" style={{ width: "100px", marginTop: "10px" }} />
       </div>

      <div id= "project-card">
        <p> E-commerce Store (in progress)</p>
      <img src="/ecommerce.png" alt="ecommerce" style={{ width: "100px", marginTop: "10px" }} />
      </div>

      <div id= "project-card">
      <p> Learning Management System</p>
      <img src="/LMS.png" alt="LMS" style={{ width: "100px", marginTop: "10px" }} />
      </div>

      </div>
    </section>
  );
}

export default Projects;
