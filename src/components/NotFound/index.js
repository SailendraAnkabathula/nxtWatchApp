import ContextObject from '../../ReactContext/ContextObject'

import {
  NotFoundRoutePageContainer,
  SlideBarContainer,
  NotFoundContainer,
  NotFoundPage,
  ViewContainer,
  ViewDescription,
  ViewHeading,
  ViewImageElement,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'

const NotFound = () => {
  const renderResults = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        const notFoundImageSrc = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        return (
          <ViewContainer isDarkTheme={isDarkTheme}>
            <ViewImageElement src={notFoundImageSrc} alt="not found" />
            <ViewHeading isDarkTheme={isDarkTheme}>Page Not Found</ViewHeading>
            <ViewDescription isDarkTheme={isDarkTheme}>
              We are sorry, the page you requested could not be found.
            </ViewDescription>
          </ViewContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  const renderNotFoundPageDetails = () => (
    <NotFoundPage>{renderResults()}</NotFoundPage>
  )

  return (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <NotFoundRoutePageContainer
            isDarkTheme={isDarkTheme}
            data-testid="not found"
          >
            <Header />
            <NotFoundContainer>
              <SlideBarContainer>
                <Sidebar />
              </SlideBarContainer>
              {renderNotFoundPageDetails()}
            </NotFoundContainer>
          </NotFoundRoutePageContainer>
        )
      }}
    </ContextObject.Consumer>
  )
}

export default NotFound
