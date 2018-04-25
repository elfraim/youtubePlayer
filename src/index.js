import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyDOReG4eGGL2_DCFrbTqbwDfT8M-zLt3TU';



class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };
    this.videoSearch('Top fails');
  }

  videoSearch(term) {
    YTSearch({key: API_KEY, term: term}, data => {
      this.setState({ 
        videos: data,
        selectedVideo: data[0],
      });
    });
  }



  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={ term => this.videoSearch(term) }/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect={selectedVideo => this.setState({selectedVideo})}
        videos={this.state.videos} />
      </div>
    )
  }
}





ReactDOM.render(<App />, document.querySelector('.container'))