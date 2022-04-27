import styled from 'styled-components/macro'

export const VideoItemCardContainer = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    margin-right: 20px;
    max-width: 300px;
    margin-bottom: 30px;
  }
`
export const VideoItemImageElement = styled.img`
  width: 100%;
  height: 250px;
  margin-bottom: 10px;
`
export const VideoItemCardDescription = styled.div`
  display: flex;
  flex-direction: column;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: bold;
  margin: 0;
  text-decoration: none;
`
export const ChannelWithViewCountAndPublishedContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ViewCountAndPublishedContainer = styled.div`
  display: flex;
`
export const ViewCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  font-weight: bold;
  margin-right: 10px;
  text-decoration: none;
`
