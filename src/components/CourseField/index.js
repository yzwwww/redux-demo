import React, { Component } from 'react'
import { getCourseFields } from '../../models'
import FieldItem from '../FieldItem'

import './index.css'

export default class CourseField extends Component {
  state = {
    fieldData: [],
  }

  async getData() {
    const fieldData = await getCourseFields()

    this.setState({
      fieldData,
    })
  }

  render() {
    const { fieldData } = this.state
    const { changeCourseField, curField } = this.props
    const changeTab = (fid) => {
      console.log('changeTab', fid)
      console.log(changeCourseField)
      changeCourseField(fid)
    }
    return (
      <div className="field-wrapper">
        {fieldData.map((item, index) => {
          return (
            <FieldItem
              key={index}
              item={item}
              curField={curField}
              onChangeCourse={(field) => changeTab(field)}></FieldItem>
          )
        })}
      </div>
    )
  }

  componentDidMount() {
    console.log('fcomponentDidMountirst')
    this.getData()
  }
}
