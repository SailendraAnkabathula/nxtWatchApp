import styled from 'styled-components/macro'

export const GamingRoutePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#f9f9f9')};
  min-height: 100vh;
  background-size: cover;
`
export const GamingContainer = styled.div`
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
export const GamingPage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media screen and(min-width:576px) {
    margin-left: 20px;
  }
`

export const BannerSectionContainer = styled.div`
  display: flex;
  background-size: cover;
  align-items: center;
  width: 100%;
  background-color: ${props => (props.isDarkTheme ? '#231f20' : '#e2e8f0')};
`
export const BannerTitle = styled.h5`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#1e293b')};
`

export const LogoImageElementContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  margin: 10px;
  border-radius: 28px;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#94a3b8')};
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
  min-height: 75vh;
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
  width: 100%;
  height: 100%;
`

export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  width: 100%;
`
