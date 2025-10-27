import React from "react";

const ProjectProgress = () => {
  const projects = [
    { name: "Website Redesign", progress: 75, color: "primary" },
    { name: "Mobile App Development", progress: 50, color: "success" },
    { name: "Marketing Campaign", progress: 30, color: "warning" },
    { name: "Product Launch", progress: 90, color: "info" },
  ];

  return (
    <div className="card">
      <div className="card-header bg-white">
        <h5 className="card-title mb-0">Project Progress</h5>
      </div>
      <div className="card-body">
        {projects.map((project, index) => (
          <div key={index} className="mb-4">
            <div className="d-flex justify-content-between mb-1">
              <span>{project.name}</span>
              <span>{project.progress}%</span>
            </div>
            <div className="progress">
              <div
                className={`progress-bar bg-${project.color}`}
                role="progressbar"
                style={{ width: `${project.progress}%` }}
                aria-valuenow={project.progress}
                aria-valuemin="0"
                aria-valuemax="100"
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectProgress;
