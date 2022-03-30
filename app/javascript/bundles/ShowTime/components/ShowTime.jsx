import React from 'react'

export default class ShowTime extends React.Component {

  render() {
    return(
      <div>
      {new Date().toLocaleTimeString()}
      </div>
    )
  }

}
