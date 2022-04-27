import {formatDistanceToNow} from 'date-fns'
import {Link} from 'react-router-dom'
import {
  VideoItemCardContainer,
  VideoItemImageElement,
  VideoItemCardDetails,
  ChannelLogoElement,
  VideoItemCardDescription,
  Title,
  ChannelWithViewCountAndPublishedContainer,
  ChannelName,
  ViewCountAndPublishedContainer,
  Item,
  ViewCount,
  Description,
} from './styledComponents'
import ContextObject from '../../ReactContext/ContextObject'

const HomeVideoCard = props => {
  const {videoItemDetails} = props
  const {
    id,
    title,
    thumbnailUrl,
    channel,
    viewCount,
    publishedAt,
  } = videoItemDetails
  const publishedTimeToNow = formatDistanceToNow(new Date(publishedAt))
  const {name, profileImageUrl} = channel
  return (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemCardContainer>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoItemImageElement src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemCardDetails>
                <ChannelLogoElement src={profileImageUrl} alt="channel logo" />
                <VideoItemCardDescription>
                  <Title isDarkTheme={isDarkTheme}>{title}</Title>
                  <ChannelWithViewCountAndPublishedContainer>
                    <ChannelName>{name}</ChannelName>
                    <ViewCountAndPublishedContainer>
                      <ViewCount>
                        <Description>{`${viewCount} views`}</Description>
                      </ViewCount>
                      <Item>
                        <Description>{publishedTimeToNow}</Description>
                      </Item>
                    </ViewCountAndPublishedContainer>
                  </ChannelWithViewCountAndPublishedContainer>
                </VideoItemCardDescription>
              </VideoItemCardDetails>
            </Link>
          </VideoItemCardContainer>
        )
      }}
    </ContextObject.Consumer>
  )
}
export default HomeVideoCard
