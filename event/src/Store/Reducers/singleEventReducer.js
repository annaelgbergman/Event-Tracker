import actiontypes from "../actiontypes";

const initState = {
    data: null,
    loading: false,
    error: null
}

const singleEventReducer = (state = initState, action) => {
    switch(action.type) {

      case actiontypes().event.loadEvent:
        return {
          ...state,
          loading: true
        }
        // Den nedan laddar om tömmer datan när den laddar om 
        // return {
        //   data: null,
        //   loading: true,
        //   error: null
        // }

      case actiontypes().event.getEventSuccess:
        return {
          data: action.payload,
          loading: false,
          error: null
        }

      case actiontypes().event.getEventFailure:
        return {
          data: null,
          loading: false,
          error: action.payload
        }
      
      case actiontypes().event.clearEvent:
        return {
          ...state,
          data: null
        }

        default: 
        return state
    }
}

export default singleEventReducer; 