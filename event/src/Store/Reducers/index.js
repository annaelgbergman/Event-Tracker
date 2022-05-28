import { combineReducers } from 'redux'
import eventsReducer from './eventsReducer'
import singleEventReducer from './singleEventReducer'
import authReducer from './authReducer'

export default combineReducers({
    events: eventsReducer,
    event: singleEventReducer,
    auth: authReducer
})