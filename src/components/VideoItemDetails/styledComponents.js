import styled from 'styled-components/macro'

export const VideoItemDetailsRoutePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  background-size: cover;
`
export const VideoItemDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const SlideBarContainer = styled.div`
  display: flex;
  width: 30%;
  max-width: 250px;
  flex-shrink: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`
export const VideoItemDetailsPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media screen and(min-width:576px) {
    margin-left: 20px;
  }
`

export const InProgressViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 85vh;
`
export const LoaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const FailureViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  height: 75vh;
  width: 100%;
  margin-top: 20px;
`
export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  margin-top: 30px;
  margin-bottom: 30px;
  min-height: 75vh;
`
export const FailureViewImageElement = styled.img`
  width: 80%;
  max-width: 350px;
`
export const FailureViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 24px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
  font-weight: bold;
`

export const FailureViewDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#475569' : '#7e858e')};
  font-weight: bold;
`
export const RetryButton = styled.button`
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  background-color: #4f46e5;
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  padding: 8px;
`
export const SuccessViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`

export const VideoItemCardDetails = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: auto;
  margin-top: 20px;
`
export const ChannelLogoElement = styled.img`
  height: 50px;
  width: 50px;
  margin-right: 10px;
`
export const VideoItemCardDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#616e7c')};
  font-weight: bold;
  margin: 0;
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
  list-style-type: none;
`

export const LikeOptionsWithSaveItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
`

export const LikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  color: ${props => (props.isLiked ? '#2563eb' : '#64748b')};
`
export const SaveButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  color: ${props => (props.isSaved ? '#2563eb' : '#64748b')};
`
export const DislikeButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 15px;
  color: ${props => (props.isDisliked ? '#3b82f6' : '#64748b')};
`
export const ButtonText = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  margin-left: 10px;
  border: none;
  background-color: transparent;
  outline: none;
  cursor: pointer;
`
export const ChannelDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const SubscribersCount = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  margin-top: 0;
`
export const ChannelNameWithSubscriberContContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const Description = styled.p`
  font-family: 'Roboto';
  font-size: 14px;
  color: #616e7c;
  font-weight: bold;
  margin-right: 10px;
`
