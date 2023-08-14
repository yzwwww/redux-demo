import React, { Component } from 'react'

export default class CourseList extends Component {
  render() {
    const { item } = this.props
    return <li className="list-item">{item.name}</li>
  }
}
