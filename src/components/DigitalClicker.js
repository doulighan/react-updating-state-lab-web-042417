import React from 'react'
import ReactDOM from 'react-dom'

class DigitalClicker extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      timesClicked: 0
    }
  }

  click = () => {
    var oneMore = this.state.timesClicked + 1
    this.setState({
      timesClicked: oneMore
    })
  }

  render () {
    return (
      <div>
        <button onClick={this.click}>
          {this.state.timesClicked}
        </button>
      </div>
    )
  }
}

export default DigitalClicker