import React from 'react'
import ReactDOM from 'react-dom'

class YoutubeDebugger extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }

  changeBitrate  = () => {
    this.setState ({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }

  changeResolution = () => {
    this.setState ({
      settings: {
        ...this.state.settings,
        video: {
          resolution: '720p'
        }
      }
    })
  }

  render () {
    return (
      <div>
        <button className="bitrate" onClick={this.changeBitrate}>bitrate </button>
        <button className="resolution" onClick={this.changeResolution}>reso </button>
      </div>
    )
  }
}

export default YoutubeDebugger