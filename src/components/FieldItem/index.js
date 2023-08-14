import React, { Component } from 'react'
import './index.css'

export default class FieldItem extends Component {
  render() {
    const { curField, item, onChangeCourse } = this.props
    const isActive = curField === item.field
    const className = `my-component ${isActive ? 'active' : ''}`
    const handleFieldChange = (field) => {
      onChangeCourse(field)
    }

    return (
      <div onClick={() => handleFieldChange(item.field)} className={className}>
        {item.fieldName}
      </div>
    )
  }
}
