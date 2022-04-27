import styled from 'styled-components/macro'

export const HomeRoutePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#181818' : '#f9f9f9')};
  min-height: 100vh;
  background-size: cover;
`
export const HomeContainer = styled.div`
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
export const HomePage = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  @media screen and(min-width:576px) {
    margin-left: 20px;
  }
`

export const BannerSectionContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 250px;
  display: flex;
  flex-direction: column;
  background-size: cover;
  padding: 15px;
  width: 100%;
`
export const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
`
export const BannerDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`
export const GetItNowButton = styled.button`
  background-color: transparent;
  border: 2px solid #313131;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 400;
  height: 30px;
  width: 130px;
`

export const LogoImageElement = styled.img`
  height: 50px;
  width: 150px;
`
export const BannerDescription = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #1e293b;
`

export const SearchInputElementContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 2px solid #64748b;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  align-self: center;
  @media screen and (min-width: 576px) {
    align-self: auto;
  }
`
export const SearchInputElement = styled.input`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  padding: 8px;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 800;
`
export const SearchButton = styled.button`
  border-left-width: 2px solid #64748b;
  border-right: none;
  border-top: none;
  border-bottom: none;
  background-color: ${props => (props.isDarkTheme ? '#909090' : '#f1f5f9')};
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
`

export const VideosListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0;
  width: 100%;
`
