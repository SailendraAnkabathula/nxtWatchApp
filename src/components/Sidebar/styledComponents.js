import styled from 'styled-components/macro'

export const SidebarContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  justify-content: space-between;
  width: 100%;
  height: 85vh;
`

export const SidebarOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  align-items:flex-start
  width: 100%;
`
export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`
export const ContactTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#282828')};
  font-weight: 800;
`
export const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  padding-left: 10px;
  padding-right: 10px;
`
export const SocialMediaIcon = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 10px;
`
export const ContactDescription = styled.p`
  font-family: 'Roboto';
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#282828')};
  font-size: 16px;
  font-weight: 500;
`
