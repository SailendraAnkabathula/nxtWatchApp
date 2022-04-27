import {Component} from 'react'
import Cookies from 'js-cookie'

import {HiFire} from 'react-icons/hi'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ContextObject from '../../ReactContext/ContextObject'
import VideoItemCard from '../VideoItemCard'

import {
  TrendingRoutePageContainer,
  SlideBarContainer,
  TrendingContainer,
  TrendingPage,
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

const trendingApiStatusConstraints = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Trending extends Component {
  state = {
    trendingApiStatus: trendingApiStatusConstraints.initial,
    result: [],
  }

  componentDidMount() {
    this.getDetails()
  }

  componentWillUnmount() {
    this.setState({
      trendingApiStatus: trendingApiStatusConstraints.initial,
      result: [],
    })
  }

  getDetails = async () => {
    this.setState({trendingApiStatus: trendingApiStatusConstraints.inProgress})
    const trendingVideosApiUrl = `https://apis.ccbp.in/videos/trending`
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(trendingVideosApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = data.videos.map(eachVideoItem => ({
        id: eachVideoItem.id,
        title: eachVideoItem.title,
        thumbnailUrl: eachVideoItem.thumbnail_url,
        channel: {
          name: eachVideoItem.channel.name,
          profileImageUrl: eachVideoItem.channel.profile_image_url,
        },
        viewCount: eachVideoItem.view_count,
        publishedAt: eachVideoItem.published_at,
      }))
      this.setState({
        result: updatedData,
        trendingApiStatus: trendingApiStatusConstraints.success,
      })
    } else {
      this.setState({trendingApiStatus: trendingApiStatusConstraints.failure})
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
            <VideoItemCard
              videoItemDetails={eachVideoItem}
              key={eachVideoItem.id}
            />
          ))}
        </VideosListContainer>
      </SuccessViewContainer>
    )
  }

  renderResults = () => {
    const {trendingApiStatus} = this.state
    switch (trendingApiStatus) {
      case trendingApiStatusConstraints.inProgress:
        return this.renderInProgressView()
      case trendingApiStatusConstraints.success:
        return this.renderSuccessView()
      case trendingApiStatusConstraints.failure:
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
              <HiFire fill="#ff0b37" size="28" />
            </LogoImageElementContainer>
            <BannerTitle isDarkTheme={isDarkTheme}>Trending</BannerTitle>
          </BannerSectionContainer>
        )
      }}
    </ContextObject.Consumer>
  )

  renderTrendingPageDetails = () => (
    <TrendingPage>
      {this.renderBannerSection()}
      {this.renderResults()}
    </TrendingPage>
  )

  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <TrendingRoutePageContainer
              isDarkTheme={isDarkTheme}
              data-testid="trending"
            >
              <Header />
              <TrendingContainer>
                <SlideBarContainer>
                  <Sidebar />
                </SlideBarContainer>
                {this.renderTrendingPageDetails()}
              </TrendingContainer>
            </TrendingRoutePageContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default Trending
