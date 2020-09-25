import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({component: Component, ...rest}) => {
  console.log('checking token...')
  return(
    <Route
      {...rest}
      render={(props) => {
        const token = localStorage.getItem('token')
        const username = localStorage.getItem('username')
        if (!token){
          console.log('no token found, redirecting...')
          return <Redirect to='/login' />
        }
        if (!username){
          console.log('no username found, redirecting...')
          return <Redirect to='/login' />
        }
        return <Component {...props} />
      }}
    />
  )
}
export default PrivateRoute