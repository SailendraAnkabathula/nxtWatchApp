import {Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {MdPlaylistAdd} from 'react-icons/md'
import {
  MenuOptionItem,
  OptionButton,
  OptionContainer,
  OptionText,
} from './styledComponents'
import ContextContent from '../../ReactContext/ContextObject'

const MenuItem = props => {
  const renderIcon = activeRouteId => {
    const {menuItem} = props

    switch (menuItem.id) {
      case 'HOME':
        return (
          <AiFillHome
            fill={activeRouteId === 'HOME' ? '#ff0b37' : '#606060'}
            size="24"
          />
        )
      case 'TRENDING':
        return (
          <HiFire
            fill={activeRouteId === 'TRENDING' ? '#ff0b37' : '#606060'}
            size="24"
          />
        )
      case 'GAMING':
        return (
          <SiYoutubegaming
            fill={activeRouteId === 'GAMING' ? '#ff0b37' : '#606060'}
            size="24"
          />
        )
      case 'SAVEDVIDEOS':
        return (
          <MdPlaylistAdd
            fill={activeRouteId === 'SAVEDVIDEOS' ? '#ff0b37' : '#606060'}
            size="24"
          />
        )
      default:
        return null
    }
  }

  return (
    <ContextContent.Consumer>
      {value => {
        const {isDarkTheme, activeRouteId, onChangeActiveRouteId} = value
        const {menuItem} = props
        const {id, displayText, link} = menuItem
        const changeRouteItemId = () => {
          onChangeActiveRouteId(id)
        }

        const icon = renderIcon(activeRouteId)

        return (
          <MenuOptionItem
            id={menuItem.id}
            active={menuItem.id === activeRouteId}
            activeColor={isDarkTheme ? '#909090' : '#f1f5f9'}
            nonActiveColor="transparent"
          >
            <Link to={link} style={{textDecoration: 'none'}}>
              <OptionButton onClick={changeRouteItemId} type="button">
                <OptionContainer>
                  {icon}
                  <OptionText>{displayText}</OptionText>
                </OptionContainer>
              </OptionButton>
            </Link>
          </MenuOptionItem>
        )
      }}
    </ContextContent.Consumer>
  )
}

export default MenuItem
