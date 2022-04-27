import {
  SidebarContainer,
  SidebarOptionsList,
  ContactDetailsContainer,
  ContactTitle,
  SocialMediaContainer,
  SocialMediaIcon,
  ContactDescription,
} from './styledComponents'
import MenuItem from '../MenuItem'
import ContextObject from '../../ReactContext/ContextObject'

const menuOptionConstraints = [
  {id: 'HOME', displayText: 'Home', link: '/'},
  {id: 'TRENDING', displayText: 'Trending', link: '/trending'},
  {id: 'GAMING', displayText: 'Gaming', link: '/gaming'},
  {id: 'SAVEDVIDEOS', displayText: 'Saved videos', link: '/saved-videos'},
]

const Sidebar = () => (
  <ContextObject.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <SidebarContainer isDarkTheme={isDarkTheme}>
          <SidebarOptionsList>
            {menuOptionConstraints.map(eachConstraint => (
              <MenuItem menuItem={eachConstraint} key={eachConstraint.id} />
            ))}
          </SidebarOptionsList>
          <ContactDetailsContainer>
            <ContactTitle isDarkTheme={isDarkTheme}>CONTACT US</ContactTitle>
            <SocialMediaContainer>
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <SocialMediaIcon
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </SocialMediaContainer>
            <ContactDescription isDarkTheme={isDarkTheme}>
              Enjoy! Now to see your channels and recommendations!
            </ContactDescription>
          </ContactDetailsContainer>
        </SidebarContainer>
      )
    }}
  </ContextObject.Consumer>
)

export default Sidebar
