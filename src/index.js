import React from 'react'
import ReactDom from 'react-dom'
import YTSearch from 'youtube-api-search'

import SearchBar from './components/search_bar'

const API_KEY = 'AIzaSyDGTkc_FEKFlVP_yhGrziKSJesXUAtlI7k'

YTSearch({key: API_KEY, term: 'Overwatch tips'}, data => console.log(data));

const App = () =>
  <div>
    <SearchBar />
  </div>

ReactDom.render(<App />, document.querySelector('.container'))

