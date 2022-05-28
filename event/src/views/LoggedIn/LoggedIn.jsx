import './LoggedIn.css'
import { useSelector} from 'react-redux'

import React from 'react'


const LoggedIn = () => {

  const { name } = useSelector(state => state.auth)


  return (
    <div className='LoggedIn'>
      <h1 className='head-title'>Event.</h1>
        <div className='primary-wrap'>
          <h3 className='text'>Hi {name}!</h3>
            <div className='line'></div>
            <p>Add an new event or check out your upcoming or previous events</p>
        </div>
  </div>
  )
}

export default LoggedIn