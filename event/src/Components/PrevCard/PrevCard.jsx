import React from 'react'
import './PrevCard.css'
import moment from 'moment'

const PrevCard = ({event}) => {
  return (
    <div className='PreviousCardEvent'>
     <div className='card-control'>
        <div className='left-card'>
            <h3>{moment(event.dateTime).format('MMM')}</h3>
        <div className='line-sm'></div>
            <h1>{moment(event.dateTime).format('DD')}</h1>
        </div>
         <div className='line-vertical'></div>
          <div className='right-card'>
            <h2>{event.title}</h2>
          <div>
            <div className='time-group'>
                <p className='time-p'>Started at: </p>
                <p className='time-p'>{moment(event.dateTime).format('LT')}</p>
                <p className='time-p'> / {moment(event.dateTime).format('L')}</p>
            </div>
          </div>
            <p className='desc-info'>{event.textArea}</p>
            </div>
        </div>
        <div className='line-bm'></div>
    </div>
  )
}

export default PrevCard