import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return(
      <div>
        <h2>{this.props.movieName}</h2>
        <p>Liked By:</p>
        <ul>
          <li>Nicholas Lain</li>
        </ul>
      </div>
    )
  }
}

export default Movie