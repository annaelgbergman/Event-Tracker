const actiontypes = () => {
    return {
        events: {
            loading: 'LOADING',
            getEventsSuccess: 'GET_EVENTS_SUCCESS',
            getEventsFailure: 'GET_EVENTS_FAILURE',
            addNewEvent: 'ADD_NEW_EVENT',
            addNewEventFailure: 'ADD_NEW_EVENT_FAILURE',
            clearEvents: 'CLEAR_EVENTS'
        },
        event: {
            loadEvent: 'LOAD_EVENT',
            getEventSuccess: 'GET_EVENT_SUCCESS',
            getEventFailure: 'GET_EVENT_FAILURE',
            clearEvent: 'CLEAR_EVENT'
        },
        auth: {
            loading: 'AUTH_LOADING',
            authFailure: 'AUTH_FAILURE',
            authSuccess: 'AUTH_SUCCESS',
            logout: 'LOGOUT_USER'
        }
    }
}

export default actiontypes;