import styled from 'styled-components/macro'

export const HeaderSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
`
export const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  justify-content: space-between;
  width: 90%;
`
export const LogoImageElement = styled.img`
  height: 30px;
  width: 80px;
`
export const CustomButtonsList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  padding-left: 0;
  margin-right: 20px;
`
export const ListThemeItem = styled.li`
  list-style-type: none;
  margin-right: 8px;
`
export const ListMenuItem = styled(ListThemeItem)`
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const ListItem = styled(ListThemeItem)`
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const ProfileImageElement = styled.img`
  height: 30px;
  width: 30px;
`
export const ItemButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
`
export const SmallViewLogoutButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  background-color: transparent;
  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const MediumViewLogoutButton = styled.button`
  background-color: transparent;
  border: 2px solid #3b82f3;
  color: #3b82f3;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  @media screen and (max-width: 767px) {
    display: none;
  }
`
export const PopupContent = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#212121' : '#ffffff')};
  height: 40vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 8px;
  max-height: 250px;
  max-width: 350px;
  @media screen and (min-width: 768px) {
    width: 60vw;
    height: 40vh;
    max-height: 350px;
    max-width: 500px;
  }
`
export const PopupTitle = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#3b82f6')};
`
export const OptionsContainer = styled.div`
  display: flex;
  align-items: center;
  width: 80%;
  justify-content: space-between;
  border-radius: 8px;
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const CancelOptionButton = styled.button`
  border: 1px solid #7e858e;
  background-color: transparent;
  color: #7e858e;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  height: 36px;
  width: 120px;
`
export const ConformOptionButton = styled.button`
  border: none;
  background-color: #3b86f6;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  outline: none;
  border-radius: 8px;
  height: 36px;
  width: 120px;
`
export const MenuPopupContent = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: ${props => (props.isDarkTheme ? '#282828' : '#ffffff')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const CloseButton = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  align-self: flex-end;
  background-color: transparent;
`
export const MenuOptionsList = styled.ul`
  display: flex;
  flex-direction: column;
  padding-left: 0px;
  width: 100%;
  justify-content: center;
`
