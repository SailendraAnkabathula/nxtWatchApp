import './App.css'
import {Component} from 'react'
import {Redirect, Route, BrowserRouter, Switch} from 'react-router-dom'
import Login from './components/Login'
import Trending from './components/Trending'
import Gaming from './components/Gaming'
import Home from './components/Home'
import SavedVideos from './components/SavedVideos'
import VideoItemDetails from './components/VideoItemDetails'
import ProtectedRoute from './components/ProtectedRoute'
import NotFound from './components/NotFound'
import ContextObject from './ReactContext/ContextObject'

class App extends Component {
  state = {isDarkTheme: false, activeRouteId: 'HOME', savedVideosList: []}

  onToggleDarkTheme = () => {
    this.setState(prevState => ({isDarkTheme: !prevState.isDarkTheme}))
  }

  onChangeActiveRouteId = activeRouteId => {
    this.setState({activeRouteId})
  }

  onChangeSavedVideosList = videoItem => {
    const {savedVideosList} = this.state
    const isVideoItemSaved = savedVideosList.find(
      eachSavedVideoItem => eachSavedVideoItem.id === videoItem.id,
    )
    if (isVideoItemSaved === undefined) {
      this.setState(prevState => ({
        savedVideosList: [...prevState.savedVideosList, videoItem],
      }))
    } else {
      const updatedList = savedVideosList.filter(
        eachSavedVideoItem => eachSavedVideoItem.id !== videoItem.id,
      )
      this.setState({savedVideosList: updatedList})
    }
  }

  render() {
    const {isDarkTheme, activeRouteId, savedVideosList} = this.state

    return (
      <BrowserRouter>
        <ContextObject.Provider
          value={{
            isDarkTheme,
            activeRouteId,
            savedVideosList,
            onToggleDarkTheme: this.onToggleDarkTheme,
            onChangeActiveRouteId: this.onChangeActiveRouteId,
            onChangeSavedVideosList: this.onChangeSavedVideosList,
          }}
        >
          <Switch>
            <Route exact path="/login" component={Login} />
            <ProtectedRoute exact path="/" component={Home} />
            <ProtectedRoute exact path="/gaming" component={Gaming} />
            <ProtectedRoute exact path="/trending" component={Trending} />
            <ProtectedRoute
              exact
              path="/saved-videos"
              component={SavedVideos}
            />
            <ProtectedRoute
              exact
              path="/videos/:id"
              component={VideoItemDetails}
            />
            <Route exact path="/not-found" component={NotFound} />
            <Redirect to="/not-found" />
          </Switch>
        </ContextObject.Provider>
      </BrowserRouter>
    )
  }
}

export default App
