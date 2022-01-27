import { ADD_ID, ADD_NEW_LECTURE, GET_READ_LAST, SET_BOOK_GEN } from "../actions/actions"

const initialState = {
    authid: null,
    idGen: 0,
    currentLectures: []
}

const rootReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_ID:
            return {
                ...state,
                authid: action.payload
            }
        case GET_READ_LAST: 
            return {
                ...state,
                currentLectures: action.payload
            }
        case ADD_NEW_LECTURE:
            return {
                ...state,
                currentLectures: [...state.currentLectures, action.payload]
            }
        case SET_BOOK_GEN:
            return {
                ...state,
                idGen: action.payload
            }
        default:
            return state
    }
}

export default rootReducer;