import React, { Component } from 'react'
import { connect } from 'react-redux'

import CourseField from '../components/CourseField'
import CourseList from '../components/CourseList'

import { changeCourseField } from '../store/actions/courseTabList'

import './index.css'

class IndexPage extends Component {
  componentDidMount() {}
  render() {
    const { curField, changeCourseField } = this.props
    return (
      <div className="page-wrapper">
        <CourseField
          curField={curField}
          changeCourseField={(id) => changeCourseField(id)}
        />
        <CourseList curField={curField} />
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    curField: state.courseTablist.curField,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    changeCourseField: (field) => dispatch(changeCourseField(field)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexPage)
