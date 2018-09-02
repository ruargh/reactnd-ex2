import React, { Component } from 'react'
import Movie from './Movie.js'

class PopularMovies extends Component {
  render() {
    return (
      <ul>
      {this.props.movies.map(movie => {
        const movieName = this.props.movie.name
        const likedBy = this.props.profile.filter(profile => profile.favoriteMovieID = this.props.movie.id)
        return(
          <li><Movie movieName={movieName}/></li>
        )
      })}
      </ul>
    )
  }
}

export default PopularMovies