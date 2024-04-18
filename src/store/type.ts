

export const GET_SKILLS = "GET_SKILLS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";

export interface PortfolioState {
    data: SkillsData[] | null;
    loading: boolean;
    error: {};
}


export interface SkillsData  {
    SkillId: number;
    SkillName: string;
    SkillDescription?:string;
}

export interface skillsError {
    cod: string;
    message: string;
}

interface GetSkillsAction {
    type: typeof GET_SKILLS;
    payload: SkillsData[];
}

export interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type SkillsAction = GetSkillsAction | SetLoadingAction | SetErrorAction;