import { SkillsData } from "../type";
import { GET_SKILLS_SUCCESS, GetSkillsActiontypes, SET_ERROR, SET_LOADING } from "./actions";

export interface PortfolioState {
    data: SkillsData[] | null;
    loading: boolean;
    error: {};
}


const initialState: PortfolioState = {
    data: [],
    loading: false,
    error: {}
}

const getSkillsReducer =  (state = initialState, action: GetSkillsActiontypes): PortfolioState => {
    switch(action.type) {
        case GET_SKILLS_SUCCESS:
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

    export default getSkillsReducer;