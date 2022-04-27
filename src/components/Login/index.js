import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import ContextObject from '../../ReactContext/ContextObject'
import {
  LoginRoutePageContainer,
  ResponsiveContainer,
  ImageElement,
  InputContainer,
  LabelElement,
  InputElement,
  MaskPasswordConditionContainer,
  CheckBoxElement,
  CheckBoxLabelElement,
  LoginButton,
  ErrorMsgElement,
} from './styledComponents'

class Login extends Component {
  state = {
    username: '',
    password: '',
    shouldShowPassword: false,
    shouldShowErrorMsg: false,
    errorMsg: '',
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  togglePasswordStatus = () => {
    this.setState(prevState => ({
      shouldShowPassword: !prevState.shouldShowPassword,
    }))
  }

  renderUsernameInputContainer = () => {
    const {username} = this.state
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <InputContainer>
              <LabelElement htmlFor="usernameInput">USERNAME</LabelElement>
              <InputElement
                id="usernameInput"
                type="text"
                value={username}
                onChange={this.onChangeUsername}
                placeholder="Username"
                isDarkTheme={isDarkTheme}
              />
            </InputContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }

  renderPasswordInputContainer = () => {
    const {password, shouldShowPassword} = this.state
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <InputContainer>
              <LabelElement htmlFor="passwordInput">PASSWORD</LabelElement>
              <InputElement
                id="passwordInput"
                type={shouldShowPassword ? 'text' : 'password'}
                value={password}
                onChange={this.onChangePassword}
                placeholder="Password"
                isDarkTheme={isDarkTheme}
              />
            </InputContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }

  renderMaskUserPasswordContainer = () => {
    const {shouldShowPassword} = this.state
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <MaskPasswordConditionContainer>
              <CheckBoxElement
                type="checkBox"
                onChange={this.togglePasswordStatus}
                checked={shouldShowPassword}
                id="checkBoxInput"
              />
              <CheckBoxLabelElement
                htmlFor="checkBoxInput"
                isDarkTheme={isDarkTheme}
              >
                Show Password
              </CheckBoxLabelElement>
            </MaskPasswordConditionContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }

  onLoginSuccess = token => {
    const {history} = this.props
    Cookies.set('jwt_token', token, {expires: 30})
    history.replace('/')
  }

  onLoginFailure = errorMsg => {
    this.setState({errorMsg, shouldShowErrorMsg: true})
  }

  onLoginBtnClicked = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const LoginApiUrl = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(LoginApiUrl, options)
    const data = await response.json()
    if (response.ok) {
      this.onLoginSuccess(data.jwt_token)
    } else {
      this.onLoginFailure(data.error_msg)
    }
  }

  render() {
    const {shouldShowErrorMsg, errorMsg} = this.state
    const token = Cookies.get('jwt_token')
    if (token !== undefined) {
      return <Redirect to="/" />
    }
    return (
      <ContextObject.Consumer>
        {value => {
          const {isDarkTheme} = value
          const logoSrc = isDarkTheme
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

          return (
            <LoginRoutePageContainer isDarkTheme={isDarkTheme}>
              <ResponsiveContainer
                isDarkTheme={isDarkTheme}
                onSubmit={this.onLoginBtnClicked}
              >
                <ImageElement alt="website logo" src={logoSrc} />
                {this.renderUsernameInputContainer()}
                {this.renderPasswordInputContainer()}
                {this.renderMaskUserPasswordContainer()}
                <LoginButton type="submit">Login</LoginButton>
                {shouldShowErrorMsg && (
                  <ErrorMsgElement>*{errorMsg}</ErrorMsgElement>
                )}
              </ResponsiveContainer>
            </LoginRoutePageContainer>
          )
        }}
      </ContextObject.Consumer>
    )
  }
}
export default Login
