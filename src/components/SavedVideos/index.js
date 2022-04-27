import {MdPlaylistAdd} from 'react-icons/md'
import ContextObject from '../../ReactContext/ContextObject'
import VideoItemCard from '../VideoItemCard'

import {
  SavedVideosRoutePageContainer,
  SlideBarContainer,
  SavedVideosContainer,
  SavedVideosPage,
  SuccessViewContainer,
  SavedVideosListContainer,
  BannerSectionContainer,
  LogoImageElementContainer,
  BannerTitle,
  ViewContainer,
  ViewDescription,
  ViewHeading,
  ViewImageElement,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'

const SavedVideos = () => {
  const renderResults = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme, savedVideosList} = value
        const lengthOfResults = savedVideosList.length
        if (lengthOfResults > 0) {
          return (
            <SuccessViewContainer>
              <SavedVideosListContainer>
                {savedVideosList.map(eachVideoItem => (
                  <VideoItemCard
                    videoItemDetails={eachVideoItem}
                    key={eachVideoItem.id}
                  />
                ))}
              </SavedVideosListContainer>
            </SuccessViewContainer>
          )
        }

        return (
          <ViewContainer isDarkTheme={isDarkTheme}>
            <ViewImageElement
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <ViewHeading isDarkTheme={isDarkTheme}>
              No saved videos found
            </ViewHeading>
            <ViewDescription isDarkTheme={isDarkTheme}>
              You can save your videos while watching them
            </ViewDescription>
          </ViewContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  const renderBannerSection = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <BannerSectionContainer
            data-testid="banner"
            isDarkTheme={isDarkTheme}
          >
            <LogoImageElementContainer isDarkTheme={isDarkTheme}>
              <MdPlaylistAdd fill="#ff0b37" size="28" />
            </LogoImageElementContainer>
            <BannerTitle isDarkTheme={isDarkTheme}>Saved Videos</BannerTitle>
          </BannerSectionContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  const renderSavedVideosPageDetails = () => (
    <SavedVideosPage>
      {renderBannerSection()}
      {renderResults()}
    </SavedVideosPage>
  )

  return (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <SavedVideosRoutePageContainer
            isDarkTheme={isDarkTheme}
            data-testid="savedVideos"
          >
            <Header />
            <SavedVideosContainer>
              <SlideBarContainer>
                <Sidebar />
              </SlideBarContainer>
              {renderSavedVideosPageDetails()}
            </SavedVideosContainer>
          </SavedVideosRoutePageContainer>
        )
      }}
    </ContextObject.Consumer>
  )
}

export default SavedVideos
