import {Link} from 'react-router-dom'
import {
  VideoItemCardContainer,
  VideoItemImageElement,
  VideoItemCardDescription,
  Title,
  ChannelWithViewCountAndPublishedContainer,
  ViewCountAndPublishedContainer,
  ViewCount,
} from './styledComponents'
import ContextObject from '../../ReactContext/ContextObject'

const GamingVideoCard = props => {
  const {videoItemDetails} = props
  const {id, title, thumbnailUrl, viewCount} = videoItemDetails
  return (
    <ContextObject.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <VideoItemCardContainer>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <VideoItemImageElement src={thumbnailUrl} alt="video thumbnail" />
              <VideoItemCardDescription>
                <Title isDarkTheme={isDarkTheme}>{title}</Title>
                <ChannelWithViewCountAndPublishedContainer>
                  <ViewCountAndPublishedContainer>
                    <ViewCount>{viewCount} Watching Worldwide</ViewCount>
                  </ViewCountAndPublishedContainer>
                </ChannelWithViewCountAndPublishedContainer>
              </VideoItemCardDescription>
            </Link>
          </VideoItemCardContainer>
        )
      }}
    </ContextObject.Consumer>
  )
}
export default GamingVideoCard
