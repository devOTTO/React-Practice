import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Movie from './movie'



class App extends Component {
  state={}

  componentDidMount(){
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      return <Movie 
      key={movie.id} 
      title={movie.title_english} 
      poster={movie.medium_cover_image} 
      genres={movie.genre}
      synopsis={movie.synopsis}
      />
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies
    })
  }
  _callApi = () => {
    return fetch("https://yts.lt/api/v2/list_movies.json?sort_by=download_count")
    .then(result => result.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>  
    );
  }
}

export default App;
