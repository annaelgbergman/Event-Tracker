import actiontypes from "../actiontypes";
import axios from 'axios'

export const getEventById = (id) => {
    return async dispatch => {
        dispatch(loadEvent())

        try {
            const res = await axios.get('http://localhost:8080/events/' + id)
            dispatch(getEventSuccess(res.data))
        } 
        catch (err) {
            dispatch(getEventFailure(err.message))
        }
    }
}

export const clearEvent = () => {
    return {
        type: actiontypes().event.clearEvent
    }
}

const loadEvent = () => {
    return {
        type: actiontypes().event.loadEvent
    }
}

const getEventSuccess = (event) => {
    return {
        type: actiontypes().event.getEventSuccess,
        payload: event
    }

}

const getEventFailure = (err) => {
    return {
        type: actiontypes().event.getEventFailure,
        payload: err
    }
}

