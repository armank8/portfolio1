export default function Projects() {
    // let [data, setData] = useState([]);
    let [click, setClick] = useState('');

    function handleButton(arg) {
        setClick(arg);
    //    console.log(arg);
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
        <h2>Projects</h2>
        <div className="projects_container">
          <div className="project_categories">
            <button
              onClick={() => handleButton("all")}
              className="btn btn_dark"
            >
              All
            </button>

            <button
              onClick={() => handleButton("react")}
              className="btn btn_dark"
            >
              ReactJs
            </button>

            <button
              onClick={() => handleButton("next")}
              className="btn btn_dark"
            >
              NextJs
            </button>

            <button
              onClick={() => handleButton("node")}
              className="btn btn_dark"
            >
              Node
            </button>

            <button
              onClick={() => handleButton("landing")}
              className="btn btn_dark"
            >
              Landing Page
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
