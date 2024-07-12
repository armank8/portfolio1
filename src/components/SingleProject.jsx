import { Link } from "react-router-dom";

export default function SingleProject({ project }) {
  console.log(project);
  return (
    <div className="single_project">
      <div className="project_image">
        <img src={project.image} className="screenshot" alt="" />
      </div>
      {/* project desc */}
      <div className="project_desc">
        <p className="font-bold text-center text-2xl pb-5">
          Name:{project.name}
        </p>
        <p>{project.description}</p>

        <p>
          <span className="font-bold">technology used: </span>

          <span className="text-red-300">{project.tech.join(", ")}</span>
        </p>
        <p>
          <span className="font-bold">Live link: </span>
          <Link to={project.live} target="_blank">
            <span className="text-blue-600 underline">{project.live}</span>
          </Link>
        </p>

        <p>
          <span className="font-bold">Github Frontend-code: </span>
          <Link to={project.frontendCode} target="_blank">
            <span className="text-blue-600 underline">
              {project.frontendCode}
            </span>
          </Link>
        </p>
        <p>
          <span className="font-bold">Github Backend-code: </span>
          <Link to={project.frontendcode} target="_blank">
            <span className="text-blue-600 underline">
              {project.backendCode}
            </span>
          </Link>
        </p>
        {/* {project.backendCode && (
          <div>
            <p>Backend Code:</p>
          </div>
        )} */}
      </div>
    </div>
  );
}
