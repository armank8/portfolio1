import { useEffect, useState } from "react";
import { projects } from "../data/projects";
import SingleProject from "./SingleProject";

export default function Projects() {
  // let [data, setData] = useState([]);
  let [click, setClick] = useState("");

  function handleButton(arg) {
    setClick(arg);
    console.log(arg);
  }

  // useEffect(() => {
  //     const fetchData = async () => {
  //         try {
  //             const response = await fetch('data.json');
  //             const jsonData = await response.json();
  //             setData(jsonData);
  //             // setFilteredData(jsonData);

  //         } catch (error) {
  //             console.log(error);
  //         }
  //     }

  //     fetchData();
  // }, [])

  return (
    <section className="projects" id="projects">
      <div className="section_container">
        <h2 className="section_header">Projects</h2>

        {/* Project categories */}
        <div className="project_categories">
          <button onClick={() => handleButton("all")} className="btn btn_dark">
            All
          </button>

          <button
            onClick={() => handleButton("react")}
            className="btn btn_dark"
          >
            ReactJs
          </button>

          <button onClick={() => handleButton("next")} className="btn btn_dark">
            NextJs
          </button>

          <button onClick={() => handleButton("node")} className="btn btn_dark">
            Node
          </button>

          <button
            onClick={() => handleButton("landing")}
            className="btn btn_dark"
          >
            Landing Page
          </button>
        </div>
        {/* categories end */}

        {/* Projects container starts */}
        <div className="projects_container">
          {projects
            .filter((item) => {
              return click === ("" || "all") ? item : item.tags.includes(click);
            })
            .map((project) => (
              <SingleProject key={project.id} project={project}></SingleProject>
            ))}
        </div>
      </div>
    </section>
  );
}
