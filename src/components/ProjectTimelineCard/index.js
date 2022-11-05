import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {eachItem} = props
  const {projectTitle, description, imageUrl, duration, projectUrl} = eachItem

  return (
    <div>
      <img src={imageUrl} alt="project" className="project-image" />
      <div className="project-heading-container">
        <h1 className="project-title">{projectTitle}</h1>
        <div className="calender-icon-container">
          <AiFillCalendar />
          <p className="project-duration">{duration}</p>
        </div>
      </div>
      <p className="project-description">{description}</p>
      <a className="visit-link" href={projectUrl}>
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
