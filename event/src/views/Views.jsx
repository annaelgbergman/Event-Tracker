import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Login from './Login/Login'
import AddEvent from './Add-Event/AddEvent'
import UpcomingEvents from './U-events/UpcomingEvents'
import PreviousEvents from './P-events/PreviousEvents'
import Register from './Register/Register'
import LoggedIn from './LoggedIn/LoggedIn'
import EventDetail from './EventDetail/EventDetail'

const Views = () => {
  return (
    <Routes>
        <Route path='/' element={ <Login />}/>
        <Route path='/addevent' element={ <AddEvent />}/>
        <Route path='/upcomingevents' element={ <UpcomingEvents />}/>
        <Route path='/previousevents' element={ <PreviousEvents />}/>
        <Route path='/register' element={ <Register />}/>
        <Route path='/loggedin' element={ <LoggedIn />}/>
        <Route path='/upcomingevents/:id' element={ <EventDetail />}/>


    </Routes>
  )
}

export default Views