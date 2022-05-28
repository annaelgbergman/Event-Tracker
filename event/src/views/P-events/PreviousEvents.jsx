import { useEffect, useState } from 'react'
import './PreviousEvents.css'
import Card from '../../Components/PrevCard/PrevCard'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearEvents, getEvents } from '../../Store/Actions/eventsAction'
import { Link } from 'react-router-dom'

const PreviousEvents = () => {

  const dispatch = useDispatch()
  const isAuth = useSelector(state => state.auth.token)
  const { data: events } = useSelector(state => state.events)
  const userId = useSelector(state => state.auth.userId)
  const [pastEvents, setPastEvents] = useState([])

  useEffect(() => {

    dispatch(getEvents(userId))

  }, [dispatch, userId])

  useEffect(() => {

    setPastEvents(events.filter(event => Date.parse(event.dateTime) < Date.now()))
    
  }, [events])

  return (
    <div className='PreviousEvent'>
        <h1 className='head-title'>Previous Events</h1>
          <div className='primary-wrap'>
          { isAuth 
            ?<h3>Your previous events</h3>
            :<h3>Please login to see previous events</h3>
            }
            <div className='line'></div>
            { isAuth 
            ? <>{pastEvents.length ? pastEvents.map(event=> < Card  key={event.id} event={event}/>) : <h4>No previous events yet, go to <Link to='/upcomingevents' className='go-to-link'>Upcoming Events</Link> to see when your event will start</h4> }</>
            : <div></div>
            }
          </div>
    </div>
  )
}

export default PreviousEvents