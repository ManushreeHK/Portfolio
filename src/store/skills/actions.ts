export interface getSkillsResponse {
    SkillId: number;
    SkillName: string;
    SkillDescription?: string;
}

export const GET_SKILLS = "GET_SKILLS";
export interface GetSkillsAction {
  type: typeof GET_SKILLS;
}

export const GET_SKILLS_SUCCESS = "GET_SKILLS_SUCCESS";
export interface getSkillsSuccessAction {
  type: typeof GET_SKILLS_SUCCESS;
  payload: getSkillsResponse[];
}

export const SET_ERROR = "SET_ERROR";
export interface setSkillsErrorAction {
  type: typeof SET_ERROR;
  payload: {
    cod: string;
    message: string;
  };
}

export const SET_LOADING = "SET_LOADING";
export interface SetLoadingAction {
  type: typeof SET_LOADING;
}


export type GetSkillsActiontypes =
  | GetSkillsAction
  | getSkillsSuccessAction
  | setSkillsErrorAction
  | SetLoadingAction;

export const getSkills = () : GetSkillsActiontypes => {
    return {
        type: GET_SKILLS
    }
}

export const setLoading = () : GetSkillsActiontypes => {
    return {
        type: SET_LOADING
    }
}

export const setError = () : GetSkillsActiontypes => {
    return {
        type: SET_ERROR,
        payload: {cod: '', message: '' }
    }
}

