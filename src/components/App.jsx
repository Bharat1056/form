import React from 'react'
import { Outlet } from 'react-router-dom'
import UserContext from '../Context/context'
import UserContextProvider from '../Context/ContextProvider'

function App() {
  return (
    <UserContextProvider>
      <Outlet />
    </UserContextProvider>
  )
}

export default App
