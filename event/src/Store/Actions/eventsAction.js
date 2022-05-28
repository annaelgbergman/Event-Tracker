import axios from 'axios'
import actiontypes from '../actiontypes'

export const getEvents = (userId) => {

    return async dispatch => {
        dispatch({
            type: actiontypes().events.loading 
        })
        try{
            let token = localStorage.getItem('token')
            const res = await axios.get('http://localhost:8080/events?_sort=dateTime&userId=' + userId, {
                headers: {
                    'Authorization': `Bearer ` + token 
                }
            })
            if(res.status === 200){
                dispatch(getEventsSuccess(res.data))
            } else {
                throw new Error('Could not fetch data')
            }
        }
        catch(err) {
            dispatch(getEventsFailure(err.message))
        }
    }
}

export const addEvent = (payload) => {
    return async dispatch => {
        dispatch({
            type: actiontypes().events.loading
        })
        try {
            let token = localStorage.getItem('token')
            const res = await axios.post('http://localhost:8080/events?_sort=dateTime', payload, {
                headers: {
                    'Authorization': `Bearer ` + token
                }
            }) 
            if(res.status === 201){
                dispatch(addNewEvents(res.data))
            } else {
                throw new Error ('Cant add event')
            }
        } 
        catch (err) {
            dispatch(addNewEventFailure(err.message))
        }
    }
}

const addNewEvents = (payload) => {
    return {
        type: actiontypes().event.addNewEvent,
        payload
    }
}

const addNewEventFailure = (err) => {
    return {
        type: actiontypes().events.addNewEventFailure,
        payload: err
    }
}

const getEventsSuccess = (events) => {
    return {
        type: actiontypes().events.getEventsSuccess,
        payload: events
    }
}

// -- FAIL --
const getEventsFailure = err => {
    return{
        type: actiontypes().events.getEventsFailure,
        payload: err
    }
}

 export const clearEvents = () => {
    return {
        type: actiontypes().events.clearEvents,

    }
}