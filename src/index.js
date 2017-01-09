import React, { Component } from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'

const API_KEY = 'AIzaSyDGTkc_FEKFlVP_yhGrziKSJesXUAtlI7k'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      selectedVideo: null,
      videos: []
    }

    YTSearch({key: API_KEY, term: 'Overwatch tips'}, videos => {
      this.setState({
        selectedVideo: videos[0],
        videos
      })
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

ReactDom.render(<App />, document.querySelector('.container'))

