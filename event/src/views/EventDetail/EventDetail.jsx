import './EventDetail.css'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clearEvent, getEventById } from '../../Store/Actions/singleEventAction'
import { useParams } from 'react-router-dom'
import moment from 'moment'

const EventDetail = () => {

  const dispatch = useDispatch()
  const { id } = useParams()

  useEffect(() => {
    dispatch(getEventById(id))

    return () => {
      dispatch(clearEvent())
    }
  }, [dispatch, id])

  const { data: event } = useSelector(state => state.event)


  // const { loading } = useSelector(state => state.event)
  // Behövs inte egentligen, men kan vara smart att lägga till! GÖR DET SIST
  // Lägg till error med om du hinner 


  return (

    <div className='EventDetail'>
      <h1 className='head-title'>Event.</h1>
        <div className='primary-wrap'>
        { event && 
        <>
            <div className='text-ctrl'>
              <h2>{event.title}</h2>
              <h4>{moment(event.dateTime).format('L')}</h4>
            </div>
              <div className='line'></div>
              <div className='text-ctrl'>
                <p className='place-txt'>{event.place}</p>
                <div className='time-ctrl'>
                 <i className="fa-solid fa-clock"></i>
                 <p>{moment(event.dateTime).format('LT')}</p>
                </div>
              </div>
              <p className='detail-txt mt-1'>{event.textArea}</p>
          </>
        }
      </div>
    </div>
  )
}

export default EventDetail