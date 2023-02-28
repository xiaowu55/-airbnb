import React, { memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import AppFooter from './components/app-footer'
import AppHeader from './components/app-header'
import routes from './router'

const App = memo(() => {

  const location = useLocation()
  useEffect(()=>{
    window.scrollTo(0,0)
  },[location.pathname])

  return (
    <div className='app'>
      <AppHeader/>
        <div className="page">
            {useRoutes(routes)}
        </div>
    <AppFooter/>

    </div>
  )
})

export default App