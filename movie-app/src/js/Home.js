import React, { Component } from 'react';
import Header from './Header';
import PostMovie from './PostMovie';

class Home extends Component {

  state = {
  }

  async componentDidMount(){
    await this._getMovies()
    console.log('movies',this.state.movies)
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies: movies
    })
  }

  _callApi = () => {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=download_count')
    .then(response => response.json())
    .then(json => json.data.movies)
    .catch(err => console.log(err))
  }

  _postMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return (
        <PostMovie 
          title={movie.title}
          genres={movie.genres}
          poster={movie.medium_cover_image}
          summary={movie.summary}
          key={movie.id}
        />
      )
    })
    return movies
  }


  render() {
    console.log(this.state.movies)
    return (
      <div>
        <div>
          <Header />  
        </div>
        <div className="movie_lists">
          {this.state.movies ? this._postMovies() : 'Loading...'}
        </div>
      </div>
    );
  }
}

export default Home;
