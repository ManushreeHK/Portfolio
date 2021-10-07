export const GET_TRAVELDETAILS = "GET_TRAVELDETAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_ALERT = "SET_ALERT";


export interface Travelstate {
    data: TravelData[] | null;
    loading: boolean;
    error: string;
}

export interface TravelData  {
    HobbieID: string;
    Image: string;
    Name:string;
    Location:string;
    Date:string;
    Description:string;
}

interface GetTravelAction {
    type: typeof GET_TRAVELDETAILS;
    payload: TravelData[];
}

export interface travelError {
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

export type TravelAction = GetTravelAction | SetLoadingAction | SetErrorAction;