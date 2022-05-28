import './Dashboard.css'
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logoutUser } from '../../Store/Actions/authAction'
import { clearEvents } from '../../Store/Actions/eventsAction'

const Dashboard = () => {

    const dispatch = useDispatch()
    const isAuth = useSelector(state => state.auth.token)



  return (
    <nav className='Dashboard'>
        <div className='dash-container'>
            <li><Link to="/"><div className='dash-avatar container'><i className="fa-solid fa-user avatar"></i></div></Link></li>
                { isAuth 
                    ?  <li><Link onClick={() => dispatch(logoutUser(), clearEvents())} to="/"><h3 className='nav-link'>Logout</h3></Link></li>
                    :  <li><Link to="/"><h3 className='nav-link'>Login</h3></Link></li>
                }
            <ul>
                <li>
                    <NavLink to="/addevent" className='dash-link'>
                        <div className='dash-control'>
                            <div className='icon'><i className="fa-solid fa-circle-plus icon-icon"></i></div>
                            <small className='title'>Add Event</small>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/upcomingevents" className='dash-link'>
                        <div className='dash-control'>
                            <div className='icon'><i className="fa-solid fa-calendar icon-icon"></i></div>
                            <small className='title'>Upcoming event</small>
                        </div>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/previousevents" className='dash-link'>
                        <div className='dash-control'>
                            <div className='icon'><i className="fa-solid fa-calendar-check icon-icon"></i></div>
                            <small className='title'>Previous event</small>
                        </div>
                    </NavLink>
                </li>
            </ul>
        </div>
    </nav>
  )
}

export default Dashboard