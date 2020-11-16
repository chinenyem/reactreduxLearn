import * as actions from '../actions/commentsAction'

export const initialState = {
    loading:false,
    hasErrors:false,
    comments:[],
}

export default function commentReducer(state = initialState, action){
    switch(action.type){
        case actions.GET_COMMENT:
            return {...state, loading:true, hasErrors:false}
        case actions.GET_COMMENT_SUCCESS:
            return {...state, comments:action.payload, loading:false, hasErrors:false}
        case actions.GET_COMMENT_FAILURE:
            return {...state, loading:false, hasErrors:true}
        default:
            return state
    }
}

