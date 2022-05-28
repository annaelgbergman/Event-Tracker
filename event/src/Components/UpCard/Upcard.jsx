import React from 'react'
import { Link } from 'react-router-dom'
import './Upcard.css'
import moment from 'moment'

const card = ({ event }) => {


  return (
    <div className='UpcomingEventsCard'>
        <div className='card-control'>
            <div className='left-card'>
            <h3>{moment(event.dateTime).format('MMM')}</h3>
            <div className='line-sm'></div>
            <h1>{moment(event.dateTime).format('DD')}</h1>
            </div>
            <div className='line-vertical'></div>
            <div className='right-card'>
            <h2>{event.title}</h2>
            <div className='time-control'>
                <div className='time-group'>
                <p className='time-p'>Start at: </p>
                <p className='time-p'>{moment(event.dateTime).format('LT')} / </p>
                <p className='time-p'>{moment(event.dateTime).format('L')}</p>
                </div>
            </div>
            <Link to={'/upcomingevents/' + event.id} className='link-text'>View event details <i className="fa-solid fa-arrow-right"></i></Link>
            </div>
        </div>
          <div className='line-bm'></div>
    </div>
  )
}

export default card