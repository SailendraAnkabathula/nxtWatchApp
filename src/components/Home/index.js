import {Component} from 'react'
import Cookies from 'js-cookie'
import {MdSearch} from 'react-icons/md'
import Loader from 'react-loader-spinner'
import {RiCloseFill} from 'react-icons/ri'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import ContextObject from '../../ReactContext/ContextObject'
import HomeVideoCard from '../HomeVideoCard'

import {
  HomeRoutePageContainer,
  SlideBarContainer,
  HomeContainer,
  HomePage,
  SearchInputElementContainer,
  SearchInputElement,
  SearchButton,
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
  CloseButton,
  LogoImageElement,
  BannerDescription,
  BannerDetailsContainer,
  GetItNowButton,
  ViewContainer,
} from './styledComponents'
import Header from '../Header'
import Sidebar from '../Sidebar'

const homeApiStatusConstraints = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class Home extends Component {
  state = {
    homeApiStatus: homeApiStatusConstraints.initial,
    searchInput: '',
    result: [],
    shouldShowBannerSection: true,
  }

  componentDidMount() {
    this.getDetails()
  }

  componentWillUnmount() {
    this.setState({
      homeApiStatus: homeApiStatusConstraints.initial,
      searchInput: '',
      result: [],
      shouldShowBannerSection: true,
    })
  }

  getDetails = async () => {
    this.setState({homeApiStatus: homeApiStatusConstraints.inProgress})
    const {searchInput} = this.state
    const homeApiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`
    const token = Cookies.get('jwt_token')
    const options = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      method: 'GET',
    }
    const response = await fetch(homeApiUrl, options)
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
        homeApiStatus: homeApiStatusConstraints.success,
      })
    } else {
      this.setState({homeApiStatus: homeApiStatusConstraints.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  updateResults = () => {
    this.getDetails()
  }

  renderSearchInputContainer = () => {
    const {searchInput} = this.state
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <SearchInputElementContainer>
              <SearchInputElement
                type="search"
                placeholder="Search"
                onChange={this.onChangeSearchInput}
                value={searchInput}
              />
              <SearchButton
                data-testid="searchButton"
                type="button"
                isDarkTheme={isDarkTheme}
                onClick={this.updateResults}
              >
                <MdSearch fill="#212121" size="21" />
              </SearchButton>
            </SearchInputElementContainer>
          )
        }}
      </ContextObject.Consumer>
    )
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
    const lengthOfResults = result.length
    if (lengthOfResults > 0) {
      return (
        <SuccessViewContainer>
          <VideosListContainer>
            {result.map(eachVideoItem => (
              <HomeVideoCard
                videoItemDetails={eachVideoItem}
                key={eachVideoItem.id}
              />
            ))}
          </VideosListContainer>
        </SuccessViewContainer>
      )
    }
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <ViewContainer isDarkTheme={isDarkTheme}>
              <FailureViewImageElement
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos"
              />
              <FailureViewHeading isDarkTheme={isDarkTheme}>
                No Search results found
              </FailureViewHeading>
              <FailureViewDescription isDarkTheme={isDarkTheme}>
                Try different key words or remove search filter
              </FailureViewDescription>
              <RetryButton onClick={this.onRetryButtonClicked}>
                Retry
              </RetryButton>
            </ViewContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }

  renderResults = () => {
    const {homeApiStatus} = this.state
    switch (homeApiStatus) {
      case homeApiStatusConstraints.inProgress:
        return this.renderInProgressView()
      case homeApiStatusConstraints.success:
        return this.renderSuccessView()
      case homeApiStatusConstraints.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  onClickCloseBannerButton = () => {
    this.setState({shouldShowBannerSection: false})
  }

  renderBannerSection = () => (
    <BannerSectionContainer data-testid="banner">
      <CloseButton
        onClick={this.onClickCloseBannerButton}
        data-testid="close"
        type="button"
      >
        <RiCloseFill fill="#282828" size="24" />
      </CloseButton>
      <BannerDetailsContainer>
        <LogoImageElement
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
          alt="nxt watch logo"
        />
        <BannerDescription>
          Buy Nxt Watch Premium prepaid plans with UPI
        </BannerDescription>
        <GetItNowButton type="button">GET IT NOW</GetItNowButton>
      </BannerDetailsContainer>
    </BannerSectionContainer>
  )

  renderHomePageDetails = () => {
    const {shouldShowBannerSection} = this.state
    return (
      <HomePage>
        {shouldShowBannerSection && this.renderBannerSection()}
        {this.renderSearchInputContainer()}
        {this.renderResults()}
      </HomePage>
    )
  }

  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <HomeRoutePageContainer
              isDarkTheme={isDarkTheme}
              data-testid="home"
            >
              <Header />
              <HomeContainer>
                <SlideBarContainer>
                  <Sidebar />
                </SlideBarContainer>
                {this.renderHomePageDetails()}
              </HomeContainer>
            </HomeRoutePageContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}

export default Home
