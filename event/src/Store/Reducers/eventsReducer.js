import actiontypes from "../actiontypes";

const initState = {
    data: [],
    loading: false,
    error: null,
    user: null
}

const eventsReducer = (state = initState, action) => {
    switch(action.type) {
        case actiontypes().events.loading:
            return {
                ...state, 
                loading: true
            }

        case actiontypes().events.getEventsSuccess:
            return {
                data: action.payload,
                loading: false,
                error: null,
            }
            
        case actiontypes().events.getEventsFailure:
            return {
                data: [],
                loading: false,
                error: action.payload
            }

        case actiontypes().events.addNewEvent:
            // localStorage.setItem('user', action.user)
            return {
                data: [...state.data, action.payload],
                loading: false,
                error: null,
                // user: action.user
            }
        
        case actiontypes().events.addNewEventFailure:
            return{
                ...state,
                loading: false,
                error: action.payload
            }

        case actiontypes().events.clearEvents:
            return{
                ...initState
            }
        default: 
        return state
    }
}

export default eventsReducer; 