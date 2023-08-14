import React, { Component } from 'react'
import { getCourseList } from '../../models'
import CourseListItem from '../CourseListItem'

export default class CourseList extends Component {
  state = {
    courseData: [],
  }

  async loadData() {
    const courseData = await getCourseList()
    this.setState({ courseData })
  }

  componentDidMount() {
    this.loadData()
  }

  render() {
    const { courseData } = this.state
    return (
      <div>
        {courseData.map((item, i) => {
          return <CourseListItem key={i} item={item}></CourseListItem>
        })}
      </div>
    )
  }
}
