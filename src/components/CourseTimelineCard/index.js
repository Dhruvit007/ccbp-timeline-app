import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {eachItem} = props
  const {courseTitle, description, tagsList, duration} = eachItem
  return (
    <div>
      <div className="title-heading-container">
        <h1 className="course-title">{courseTitle}</h1>
        <div className="clock-icon-container">
          <AiFillClockCircle />
          <p className="course-duration">{duration}</p>
        </div>
      </div>
      <p className="course-description">{description}</p>
      <ul className="tag-items-container">
        {tagsList.map(eachTag => (
          <p className="tag-item-style" key={eachTag.id}>
            {eachTag.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
