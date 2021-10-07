export const GET_PHOTOGRAPHYDETAILS = "GET_PHOTOGRAPHYDETAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";


export interface Photographystate {
    data: PhotographyData[] | null;
    loading: boolean;
    error: string;
}

export interface PhotographyData  {
    HobbieID: string;
    Image: string;
    Name:string;
    Location:string;
    Date:string;
    Description?:string;
}

interface GetPhotographyAction {
    type: typeof GET_PHOTOGRAPHYDETAILS;
    payload: PhotographyData[];
}

export interface photographyError {
    cod: string;
    message: string;
}

interface SetLoadingAction {
    type: typeof SET_LOADING;
}

interface SetErrorAction {
    type: typeof SET_ERROR;
    payload: string;
}

export type PhotographyAction = GetPhotographyAction | SetLoadingAction | SetErrorAction;