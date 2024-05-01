
export default function SingleProject({project}) {
  return (
    <div className='single_project'>
        <p>Name:{project.name}</p>
        <p>description:{project.description}</p>
        <p>tech:{project.tech}</p>
    </div>
  )
}
