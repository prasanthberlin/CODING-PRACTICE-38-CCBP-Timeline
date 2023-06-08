// Write your code here
import {Chrono} from 'react-chrono'

const CourseTimelineCard = props => {
  const {eachTimelineItem} = props

  return (
    <div className="chrono-container">
      <Chrono item={eachTimelineItem} mode="VERTICAL" />
    </div>
  )
}

export default CourseTimelineCard
