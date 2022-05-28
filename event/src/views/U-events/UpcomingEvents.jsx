import { useEffect, useState } from 'react'
import './Upcomingevents.css'
import Card from '../../Components/UpCard/Upcard'
import { useDispatch, useSelector } from 'react-redux'
import { getEvents } from '../../Store/Actions/eventsAction'
import { Link } from 'react-router-dom'
// import { clearEvents } from '../../Store/Actions/eventsAction'

const UpcomingEvents = () => {

  const dispatch = useDispatch()
  const { data: events } = useSelector(state => state.events)
  const isAuth = useSelector(state => state.auth.token)
  const userId = useSelector(state => state.auth.userId)
  const [upcomingEvents, setUpcomingEvents] = useState([])


  // Kan hämta hem error där också
  
  useEffect(() => {

    dispatch(getEvents(userId))

  }, [dispatch, userId])

  useEffect(() => {

    setUpcomingEvents(events.filter(event => Date.parse(event.dateTime) > Date.now()))
    
  }, [events])
  
  return (
    <div className='UpcomingEvents'>
        <h1 className='head-title'>Upcoming Events</h1>
          <div className='primary-wrap'>
            { isAuth 
            ?<h3>Your upcoming events</h3>
            :<h3>Please login to see events</h3>
            }
              <div className='line'></div>
            { isAuth 
            ? <> {upcomingEvents.length ? upcomingEvents.map(event => < Card  key={event.id} event={event}/>) : <h4>No upcoming events, go to <Link to='/addevent' className='go-to-link'>Add Event</Link> to register some new events</h4>}</>
            : <div></div>
            }
          </div>
    </div>
  )
}

export default UpcomingEvents