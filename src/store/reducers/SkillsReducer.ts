import { PortfolioState,GET_SKILLS,SET_ERROR, SET_LOADING, SkillsAction } from "../type";

const initialState: PortfolioState = {
    data: [],
    loading: false,
    error: ''
}

export default (state = initialState, action: SkillsAction): PortfolioState => {
switch(action.type) {
    case GET_SKILLS:
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