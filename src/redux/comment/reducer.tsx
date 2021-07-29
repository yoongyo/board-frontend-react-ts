import { SET_COMMENTS } from "./types"


const initalState = {
    comments: []
}


const setCommentsReducer = (state=initalState, action:any) => {
    
    switch(action.type) {
        case SET_COMMENTS:
            return {
                ...state,
                comments: []
            }
        default: return state
    }
}

export default setCommentsReducer