import React from 'react'

export default class ShowTime extends React.Component {
  constructor(props) {
    super(props)
    this.locale = typeof(props.locale) != 'undefined' ? 
      props.locale : 'es-CO'
    this.timeZone = typeof(props.timeZone) != 'undefined' ? 
      props.timeZone : 'America/Bogota'
    this.state={time: new Date().toLocaleTimeString(
      this.locale, {timeZone: this.timeZone}
    )}
  }

  componentDidMount() {
    this.timer = setInterval(() => this.anotherSecond(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  anotherSecond() {
    this.setState({
      time: new Date().toLocaleTimeString(
        this.locale, {timeZone: this.timeZone}
      )
    })
  }

  render() {
    return(
      <div>
      {this.state.time} ({this.timeZone})
      </div>
    )
  }

}
