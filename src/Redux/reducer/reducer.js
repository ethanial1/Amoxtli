import { GET_READ_LAST } from "../actions/actions"

const initialState = {
    currentLectures: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_READ_LAST: 
            return {
                ...state,
                currentLectures: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;