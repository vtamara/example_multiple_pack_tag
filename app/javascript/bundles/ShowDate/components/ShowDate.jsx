import React from 'react'

export default class ShowDate extends React.Component {

  render = () => {
    return(
      <div>
      {new Date().toLocaleDateString()}
      </div>
    )
  }

}
