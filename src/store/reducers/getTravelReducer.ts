import { GET_TRAVELDETAILS, SET_ERROR, SET_LOADING, TravelAction, Travelstate } from "../actions/TravelData/type";

const initialState: Travelstate = {
    data: [],
    loading: false,
    error: ''
}

export default (state = initialState, action: TravelAction): Travelstate => {
switch(action.type) {
    case GET_TRAVELDETAILS:
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