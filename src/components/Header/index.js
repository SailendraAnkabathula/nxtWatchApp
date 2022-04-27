import {withRouter, Link} from 'react-router-dom'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {BsBrightnessHigh} from 'react-icons/bs'
import {IoMdMoon} from 'react-icons/io'
import {FiLogOut} from 'react-icons/fi'
import {GiHamburgerMenu} from 'react-icons/gi'
import {RiCloseFill} from 'react-icons/ri'
import ContextContent from '../../ReactContext/ContextObject'

import {
  HeaderSectionContainer,
  HeaderContent,
  LogoImageElement,
  CustomButtonsList,
  ListThemeItem,
  ListMenuItem,
  ListItem,
  ItemButton,
  SmallViewLogoutButton,
  MediumViewLogoutButton,
  ProfileImageElement,
  PopupContent,
  PopupTitle,
  OptionsContainer,
  CancelOptionButton,
  ConformOptionButton,
  MenuPopupContent,
  CloseButton,
  MenuOptionsList,
} from './styledComponents'

import MenuItem from '../MenuItem'

const menuOptionConstraints = [
  {id: 'HOME', displayText: 'Home', link: '/'},
  {id: 'TRENDING', displayText: 'Trending', link: '/trending'},
  {id: 'GAMING', displayText: 'Gaming', link: '/gaming'},
  {id: 'SAVEDVIDEOS', displayText: 'Saved videos', link: '/saved-videos'},
]

const Header = props => {
  const OnLogoutConformButtonClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <ContextContent.Consumer>
      {value => {
        const {isDarkTheme, onToggleDarkTheme} = value
        const logoSrc = isDarkTheme
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
        const onChangeThemeMode = () => {
          onToggleDarkTheme()
        }

        return (
          <HeaderSectionContainer isDarkTheme={isDarkTheme}>
            <HeaderContent>
              <Link to="/">
                <LogoImageElement src={logoSrc} alt="website logo" />
              </Link>
              <CustomButtonsList>
                <ListThemeItem>
                  <ItemButton
                    onClick={onChangeThemeMode}
                    data-testid="theme"
                    type="button"
                  >
                    {isDarkTheme ? (
                      <BsBrightnessHigh
                        fill={isDarkTheme ? '#f9f9f9' : '#181818'}
                        size="28"
                      />
                    ) : (
                      <IoMdMoon fill="#181818" size="28" />
                    )}
                  </ItemButton>
                </ListThemeItem>

                <ListMenuItem>
                  <Popup
                    modal
                    trigger={
                      <ItemButton type="button">
                        <GiHamburgerMenu
                          fill={isDarkTheme ? '#f9f9f9' : '#181818'}
                          size="28"
                        />
                      </ItemButton>
                    }
                  >
                    {close => (
                      <>
                        <MenuPopupContent isDarkTheme={isDarkTheme}>
                          <CloseButton
                            onClick={() => close()}
                            data-testid="close"
                            type="button"
                          >
                            <RiCloseFill
                              fill={isDarkTheme ? '#ffffff' : '#181818'}
                              size="24"
                            />
                          </CloseButton>
                          <MenuOptionsList>
                            {menuOptionConstraints.map(eachConstraint => (
                              <MenuItem
                                menuItem={eachConstraint}
                                key={eachConstraint.id}
                              />
                            ))}
                          </MenuOptionsList>
                        </MenuPopupContent>
                      </>
                    )}
                  </Popup>
                </ListMenuItem>
                <ListItem>
                  <ProfileImageElement
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                    alt="profile"
                  />
                </ListItem>
              </CustomButtonsList>
              <Popup
                modal
                trigger={
                  <SmallViewLogoutButton type="button">
                    <FiLogOut
                      color={isDarkTheme ? '#f9f9f9' : '#181818'}
                      size="24"
                    />
                  </SmallViewLogoutButton>
                }
              >
                {close => (
                  <>
                    <PopupContent isDarkTheme={isDarkTheme}>
                      <PopupTitle isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout
                      </PopupTitle>
                      <OptionsContainer>
                        <CancelOptionButton
                          onClick={() => close()}
                          type="button"
                        >
                          Cancel
                        </CancelOptionButton>
                        <ConformOptionButton
                          onClick={OnLogoutConformButtonClicked}
                          type="button"
                        >
                          Confirm
                        </ConformOptionButton>
                      </OptionsContainer>
                    </PopupContent>
                  </>
                )}
              </Popup>

              <Popup
                modal
                trigger={
                  <MediumViewLogoutButton type="button">
                    Logout
                  </MediumViewLogoutButton>
                }
              >
                {close => (
                  <>
                    <PopupContent isDarkTheme={isDarkTheme}>
                      <PopupTitle isDarkTheme={isDarkTheme}>
                        Are you sure, you want to logout
                      </PopupTitle>
                      <OptionsContainer>
                        <CancelOptionButton
                          onClick={() => close()}
                          type="button"
                        >
                          Cancel
                        </CancelOptionButton>
                        <ConformOptionButton
                          onClick={OnLogoutConformButtonClicked}
                          type="button"
                        >
                          Confirm
                        </ConformOptionButton>
                      </OptionsContainer>
                    </PopupContent>
                  </>
                )}
              </Popup>
            </HeaderContent>
          </HeaderSectionContainer>
        )
      }}
    </ContextContent.Consumer>
  )
}
export default withRouter(Header)
