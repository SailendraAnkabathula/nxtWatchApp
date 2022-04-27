import {Component} from 'react'
import Cookies from 'js-cookie'
import {formatDistanceToNow} from 'date-fns'
import ReactPlayer from 'react-player'
import {MdPlaylistAdd} from 'react-icons/md'
import {AiOutlineDislike, AiOutlineLike} from 'react-icons/ai'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import Sidebar from '../Sidebar'

import ContextObject from '../../ReactContext/ContextObject'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {
  VideoItemDetailsRoutePageContainer,
  VideoItemDetailsContainer,
  SlideBarContainer,
  VideoItemDetailsPage,
  InProgressViewContainer,
  LoaderContainer,
  FailureViewContainer,
  FailureViewImageElement,
  FailureViewHeading,
  FailureViewDescription,
  RetryButton,
  Description,
  SuccessViewContainer,
  VideoItemCardDetails,
  VideoItemCardDescription,
  Title,
  ViewCountAndPublishedContainer,
  Item,
  ViewCount,
  LikeOptionsWithSaveItemsContainer,
  ButtonContainer,
  LikeButtonContainer,
  SaveButtonContainer,
  DislikeButtonContainer,
  ButtonText,
  ChannelLogoElement,
  ChannelName,
  ChannelDetailsContainer,
  SubscribersCount,
  ChannelNameWithSubscriberContContainer,
} from './styledComponents'

const videoApiStatusConstraints = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  success: 'SUCCESS',
  failure: 'FAILURE',
}

class VideoItemDetails extends Component {
  state = {
    itemDetails: [],
    videoApiStatus: videoApiStatusConstraints.initial,
    isLiked: false,
    isDisliked: false,
  }

  componentDidMount() {
    this.getVideoItemDetails()
  }

  componentWillUnmount() {
    this.setState({
      itemDetails: [],
      videoApiStatus: videoApiStatusConstraints.initial,
      isLiked: false,
      isDisliked: false,
    })
  }

  getVideoItemDetails = async () => {
    this.setState({videoApiStatus: videoApiStatusConstraints.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const videoItemDetailsApiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(videoItemDetailsApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        thumbnailUrl: data.video_details.thumbnail_url,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
      }
      this.setState({
        itemDetails: updatedData,
        videoApiStatus: videoApiStatusConstraints.success,
      })
    } else {
      this.setState({videoApiStatus: videoApiStatusConstraints.failure})
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
    this.getVideoItemDetails()
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

  onClickLikeButton = () => {
    this.setState(prevState => ({
      isLiked: !prevState.isLiked,
      isDisliked: false,
    }))
  }

  onClickDislikeButton = () => {
    this.setState(prevState => ({
      isDisliked: !prevState.isDisliked,
      isLiked: false,
    }))
  }

  renderSuccessView = () => {
    const {itemDetails, isLiked, isDisliked} = this.state
    let isSaved = false
    const publishedTime = formatDistanceToNow(new Date(itemDetails.publishedAt))
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme, onChangeSavedVideosList, savedVideosList} = value
          const toggleSaveItem = () => {
            onChangeSavedVideosList(itemDetails)
          }

          const isFound = savedVideosList.find(
            eachSavedVideoItem => eachSavedVideoItem.id === itemDetails.id,
          )

          if (isFound !== undefined) {
            isSaved = true
          }

          return (
            <SuccessViewContainer>
              <ReactPlayer url={itemDetails.videoUrl} controls width="100%" />
              <VideoItemCardDetails>
                <Title isDarkTheme={isDarkTheme}>{itemDetails.title}</Title>
                <ViewCountAndPublishedContainer>
                  <ViewCount>
                    <Description>{`${itemDetails.viewCount} views`}</Description>
                  </ViewCount>
                  <Item>
                    <Description>{publishedTime}</Description>
                  </Item>
                </ViewCountAndPublishedContainer>
                <LikeOptionsWithSaveItemsContainer>
                  <ButtonContainer
                    onClick={this.onClickLikeButton}
                    type="button"
                  >
                    <LikeButtonContainer isLiked={isLiked}>
                      <AiOutlineLike size="22" />
                      <ButtonText>Like</ButtonText>
                    </LikeButtonContainer>
                  </ButtonContainer>
                  <ButtonContainer
                    onClick={this.onClickDislikeButton}
                    type="button"
                  >
                    <DislikeButtonContainer isDisliked={isDisliked}>
                      <AiOutlineDislike size="22" />
                      <ButtonText>Dislike</ButtonText>
                    </DislikeButtonContainer>
                  </ButtonContainer>
                  <ButtonContainer onClick={toggleSaveItem} type="button">
                    <SaveButtonContainer isSaved={isSaved}>
                      <MdPlaylistAdd size="22" />
                      <ButtonText>{isSaved ? 'Saved' : 'Save'}</ButtonText>
                    </SaveButtonContainer>
                  </ButtonContainer>
                </LikeOptionsWithSaveItemsContainer>
                <hr bgcolor="#1e293b" border="3px solid #1e293b" width="100%" />
                <ChannelDetailsContainer>
                  <ChannelLogoElement
                    src={itemDetails.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <ChannelNameWithSubscriberContContainer>
                    <ChannelName>{itemDetails.channel.name}</ChannelName>
                    <SubscribersCount>
                      {itemDetails.channel.subscriberCount} subscribers
                    </SubscribersCount>
                  </ChannelNameWithSubscriberContContainer>
                </ChannelDetailsContainer>
                <VideoItemCardDescription isDarkTheme={isDarkTheme}>
                  {itemDetails.description}
                </VideoItemCardDescription>
              </VideoItemCardDetails>
            </SuccessViewContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }

  renderResults = () => {
    const {videoApiStatus} = this.state
    switch (videoApiStatus) {
      case videoApiStatusConstraints.inProgress:
        return this.renderInProgressView()
      case videoApiStatusConstraints.success:
        return this.renderSuccessView()
      case videoApiStatusConstraints.failure:
        return this.renderFailureView()
      default:
        return null
    }
  }

  renderVideoItemDetailsPageDetails = () => (
    <VideoItemDetailsPage>{this.renderResults()}</VideoItemDetailsPage>
  )

  render() {
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <VideoItemDetailsRoutePageContainer
              isDarkTheme={isDarkTheme}
              data-testid="videoItemDetails"
            >
              <Header />
              <VideoItemDetailsContainer>
                <SlideBarContainer>
                  <Sidebar />
                </SlideBarContainer>
                {this.renderVideoItemDetailsPageDetails()}
              </VideoItemDetailsContainer>
            </VideoItemDetailsRoutePageContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}
export default VideoItemDetails
