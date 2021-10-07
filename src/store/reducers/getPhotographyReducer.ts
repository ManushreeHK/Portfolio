import { GET_PHOTOGRAPHYDETAILS, PhotographyAction, Photographystate, SET_ERROR, SET_LOADING } from "../actions/Photography/type"

const initialState: Photographystate = {
    data: [],
    loading: false,
    error: ''
}

export default (state = initialState, action: PhotographyAction): Photographystate => {
switch(action.type) {
    case GET_PHOTOGRAPHYDETAILS:
        return{
        data: action.payload,
        loading:false,
        error: ''
        }
    case SET_LOADING:
        return {
            ...state,
            loading: true
        }
    case SET_ERROR:
        return {
            ...state,
            error: action.payload,
            loading: false
        }
    default:
        return state;
}
}