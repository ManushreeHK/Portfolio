import { ThunkAction } from "redux-thunk";
import { RootState } from "../..";
import { GET_PHOTOGRAPHYDETAILS, PhotographyAction, PhotographyData, photographyError, SET_ERROR, SET_LOADING } from "./type";

 export const getPhotography = (): ThunkAction<void, RootState, null, PhotographyAction> => {
     return async dispatch => {
         try {
             const res = await fetch("https://nsexfvlfq0.execute-api.us-west-2.amazonaws.com/v1/addtraveldata?Category=Photography");
             if(!res.ok){
                 const resData: photographyError = await res.json();
                 throw new Error(resData.message);
             }
             const resData: PhotographyData[] = await res.json();
             dispatch({
                 type: GET_PHOTOGRAPHYDETAILS,
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

 export const setLoading = () : PhotographyAction => {
     return {
         type: SET_LOADING
     }
 }

 export const setError = () : PhotographyAction => {
     return {
         type: SET_ERROR,
         payload: ''
     }
 }