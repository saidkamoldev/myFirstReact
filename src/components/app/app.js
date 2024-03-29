import './app.css'

import AppInfo from '../app-info/app-info'
import SearchPanel from '../search-panel/search-panel'
import AppFilter from '../app-filter/app-filter'
import MovieList from '../movie-list/movie-list'
import MoviesAddForum from '../movies-add-form/movies-add-form'

const App = () => {
  return (
  <div className='app font-monospace'  >
    <div className='content' >
      <AppInfo />
      <div className='search-panel' >
      <SearchPanel />
      <AppFilter />
      </div>
     <MovieList />
     <MovieList />
     <MovieList />
     <MoviesAddForum />
    </div>
  </div>
   )
}

export default App