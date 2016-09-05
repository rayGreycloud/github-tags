import React from 'react'
import styles from './styles/main.css'
const Hello = React.createClass({
  render () {
    return <div>Hello, {this.props.name}</div>
  }
})

React.render(<Hello name="ray"/>, document.body)
