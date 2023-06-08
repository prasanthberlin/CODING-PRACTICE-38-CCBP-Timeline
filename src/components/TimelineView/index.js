// Write your code here

import {Component} from 'react'

import {Chrono} from 'react-chrono'

import ProjectTimelineCard from '../ProjectTimelineCard/index'

import CourseTimelineCard from '../CourseTimelineCard/index'

import './index.css'

class TimelineView extends Component {
  getProjectTimelineCard = timelineItemsList => {
    const projectTimelineList = timelineItemsList.filter(
      eachTimelineItem => eachTimelineItem.categoryId === 'PROJECT',
    )

    return projectTimelineList
  }

  getCourseTimelineCard = timelineItemsList => {
    const courseTimelineList = timelineItemsList.filter(
      eachTimelineItem => eachTimelineItem.categoryId === 'COURSE',
    )

    return courseTimelineList
  }

  render() {
    const {timelineItemsList} = this.props

    const projectTimelineCardList = this.getProjectTimelineCard(
      timelineItemsList,
    )

    const courseTimelineCardList = this.getCourseTimelineCard(timelineItemsList)

    console.log(projectTimelineCardList)

    console.log(courseTimelineCardList)

    return (
      <div>
        <div>
          <div>
            <h1>MY JOURNEY OF CCBP 4.0</h1>
          </div>
          <div className="chrono-container">
            <Chrono item={timelineItemsList} />
          </div>
        </div>
      </div>
    )
  }
}

export default TimelineView
