import styled from 'styled-components/macro'

export const VideoItemCardContainer = styled.li`
  list-style-type: none;
`
export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    margin-right: 20px;
    display: flex;
    flex-direction: row;
    width: 90%;
    margin: auto;
    margin-bottom: 30px;
  }
`

export const VideoItemImageElement = styled.img`
  margin-bottom: 10px;
  width: 100%;
  @media screen and (min-width: 576px) {
    width: 48%;
    max-width: 250px;
  }
`

export const VideoItemCardDetails = styled.div`
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: auto;
`
export const ChannelLogoElement = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
  @media screen and (min-width: 576px) {
    display: none;
  }
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
  align-items: center;
  justify-content: space-around;
  @media screen and (min-width: 576px) {
    flex-direction: column;
    align-items: flex-start;
  }
`
export const ChannelName = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  font-weight: bold;
  margin-right: 10px;
`
export const ViewCountAndPublishedContainer = styled.ul`
  display: flex;
  justify-content: space-around;
  padding-left: 0;
`
export const Item = styled.li`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  font-weight: bold;
  margin-left: 10px;
`
export const ViewCount = styled.li`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  font-weight: bold;
  margin-right: 10px;
  text-decoration: none;
  @media screen and (min-width: 576px) {
    list-style-type: none;
  }
`
