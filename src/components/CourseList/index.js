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
    const { curField } = this.props
    const curCourseList = courseData.filter((item) => {
      if (curField === -1) return true
      return item.fieldId === curField
    })

    return (
      <div>
        {curCourseList.map((item, i) => {
          return <CourseListItem key={i} item={item}></CourseListItem>
        })}
      </div>
    )
  }
}
