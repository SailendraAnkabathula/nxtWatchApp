import {Component} from 'react'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ContextObject from '../../ReactContext/ContextObject'
import GamingVideoCard from '../GamingVideoCard'

import {
  GamingRoutePageContainer,
  SlideBarContainer,
  GamingContainer,
  GamingPage,
  InProgressViewContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImageElement,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
  SuccessViewContainer,
  VideosListContainer,
  BannerSectionContainer,
  LogoImageElementContainer,
  BannerTitle,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'

const gamingApiStatusConstraints = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Gaming extends Component {
  state = {
    gamingApiStatus: gamingApiStatusConstraints.initial,
    result: [],
  }

  componentDidMount() {
    this.getDetails()
  }

  componentWillUnmount() {
    this.setState({
      gamingApiStatus: gamingApiStatusConstraints.initial,
      result: [],
    })
  }

  getDetails = async () => {
    this.setState({gamingApiStatus: gamingApiStatusConstraints.inProgress})
    const gamingVideosApiUrl = `https://apis.ccbp.in/videos/gaming`
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(gamingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachVideoItem => ({
        id: eachVideoItem.id,
        title: eachVideoItem.title,
        thumbnailUrl: eachVideoItem.thumbnail_url,
        viewCount: eachVideoItem.view_count,
      }))
      this.setState({
        result: updatedData,
        gamingApiStatus: gamingApiStatusConstraints.success,
      })
    } else {
      this.setState({gamingApiStatus: gamingApiStatusConstraints.failure})
    }
  }

  renderInProgressView = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <InProgressViewContainer>
            <LoaderContainer data-testid="loader">
              <Loader
                type="ThreeDots"
                color={isDarkTheme ? '#ffffff' : '#00306e'}
                height="50"
                width="50"
              />
            </LoaderContainer>
          </InProgressViewContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  onRetryButtonClicked = () => {
    this.getDetails()
  }

  renderFailureView = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        const imageSrc = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
        return (
          <FailureViewContainer>
            <FailureViewImageElement src={imageSrc} alt="failure view" />
            <FailureViewHeading isDarkTheme={isDarkTheme}>
              Oops! Something Went Wrong
            </FailureViewHeading>
            <FailureViewDescription isDarkTheme={isDarkTheme}>
              We are having some trouble to complete your request. Please try
              again.
            </FailureViewDescription>
            <RetryButton onClick={this.onRetryButtonClicked} type="button">
              Retry
            </RetryButton>
          </FailureViewContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  renderSuccessView = () => {
    const {result} = this.state
    return (
      <SuccessViewContainer>
        <VideosListContainer>
          {result.map(eachVideoItem => (
            <GamingVideoCard
              videoItemDetails={eachVideoItem}
              key={eachVideoItem.id}
            />
          ))}
        </VideosListContainer>
      </SuccessViewContainer>
    )
  }

  renderResults = () => {
    const {gamingApiStatus} = this.state
    switch (gamingApiStatus) {
      case gamingApiStatusConstraints.inProgress:
        return this.renderInProgressView()
      case gamingApiStatusConstraints.success:
        return this.renderSuccessView()
      case gamingApiStatusConstraints.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  renderBannerSection = () => (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <BannerSectionContainer
            data-testid="banner"
            isDarkTheme={isDarkTheme}
          >
            <LogoImageElementContainer isDarkTheme={isDarkTheme}>
              <SiYoutubegaming fill="#ff0b37" size="28" />
            </LogoImageElementContainer>
            <BannerTitle isDarkTheme={isDarkTheme}>Gaming</BannerTitle>
          </BannerSectionContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  renderGamingPageDetails = () => (
    <GamingPage>
      {this.renderBannerSection()}
      {this.renderResults()}
    </GamingPage>
  )

  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <GamingRoutePageContainer
              isDarkTheme={isDarkTheme}
              data-testid="gaming"
            >
              <Header />
              <GamingContainer>
                <SlideBarContainer>
                  <Sidebar />
                </SlideBarContainer>
                {this.renderGamingPageDetails()}
              </GamingContainer>
            </GamingRoutePageContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default Gaming
