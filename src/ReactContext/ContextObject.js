import React from 'react'

const ContextObject = React.createContext({
  isDarkTheme: false,
  activeRouteId: '',
  onToggleDarkTheme: () => {},
  onChangeBackgroundTheme: () => {},
  savedVideosList: [],
  onChangeSavedVideosList: () => {},
})

export default ContextObject
