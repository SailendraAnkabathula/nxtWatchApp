import styled from 'styled-components/macro'

export const MenuOptionItem = styled.li`
  list-style-type: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (min-width: 768px) {
    justify-content: flex-start;
    padding-left: 10px;
  }
  background-color: ${props =>
    props.active ? props.activeColor : props.nonActiveColor};
`
export const OptionButton = styled.button`
  height: 100%;
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
`
export const OptionContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 10px;
`
export const OptionText = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  margin-left: 20px;
  color: ${props => (props.isDarkTheme ? '#ffffff' : '#181818')};
`
