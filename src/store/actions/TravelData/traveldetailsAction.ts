import { ThunkAction } from "redux-thunk";
import { RootState } from "../..";
import { GET_TRAVELDETAILS, SET_ERROR, SET_LOADING, TravelAction, TravelData, travelError } from "./type";

 export const getTravel = (): ThunkAction<void, RootState, null, TravelAction> => {
     return async dispatch => {
         try {
             const res = await fetch("https://nsexfvlfq0.execute-api.us-west-2.amazonaws.com/v1/addtraveldata?Category=Travel");
             if(!res.ok){
                 const resData: travelError = await res.json();
                 throw new Error(resData.message);
             }
             const resData: TravelData[] = await res.json();
             dispatch({
                 type: GET_TRAVELDETAILS,
                 payload: resData
             })
            }catch(err) {
                dispatch({
                    type: SET_ERROR,
                    payload: "error"
                })
            }
         }  
 }

 export const setLoading = () : TravelAction => {
     return {
         type: SET_LOADING
     }
 }

 export const setError = () : TravelAction => {
     return {
         type: SET_ERROR,
         payload: ''
     }
 }