import styled from 'styled-components/macro'

export const LoginRoutePageContainer = styled.div`
  background-color: ${props => (props.isDarkTheme ? '#0f0f0f' : '#ffffff')};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-size: cover;
`
export const ResponsiveContainer = styled.form`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 16px #181818;
  background-color: ${props => (props.isDarkTheme ? '#7e858e' : '#f9f9f9')};
  width: 90%;
  max-width: 350px;
  padding: 30px;
  border-radius: 8px;
`
export const ImageElement = styled.img`
  height: 50px;
  width: 152px;
  margin-top: 20px;
  align-self: center;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const InputElement = styled.input`
  border: 1px solid #606060;
  background-color: transparent;
  border-radius: 8px;
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#0f0f0f')};
  font-weight: bold;
  outline: none;
  cursor: pointer;
`
export const LabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 14px;
  color: #606060;
  font-weight: bold;
  line-height: 1.5;
`
export const MaskPasswordConditionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
`

export const CheckBoxElement = styled.input`
  margin-right: 10px;
`

export const CheckBoxLabelElement = styled.label`
  font-family: 'Roboto';
  font-size: 16px;
  color: ${props => (props.isDarkTheme ? '#f9f9f9' : '#383838')};
  font-weight: bold;
`
export const LoginButton = styled.button`
  font-family: 'Roboto';
  font-size: 14px;
  color: #ffffff;
  font-weight: bold;
  background-color: #3b82f6;
  border-radius: 8px;
  padding: 8px;
  border: none;
  outline: none;
  cursor: pointer;
  margin-top: 20px;
`
export const ErrorMsgElement = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  color: #ff0b37;
  font-weight: normal;
  margin-top: 0;
`
