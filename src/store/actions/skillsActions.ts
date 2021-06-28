import { ThunkAction } from "redux-thunk";
 import { RootState } from "..";
 import { GET_SKILLS, SET_ERROR, SET_LOADING, Skills, SkillsAction, skillsError } from "../type";

 export const getSkills = (): ThunkAction<void, RootState, null, SkillsAction> => {
     return async dispatch => {
         try {
             const res = await fetch("http://192.168.0.8:6039/all");
             if(!res.ok){
                 const resData: skillsError = await res.json();
                 throw new Error(resData.message);
             }
             const resData: Skills = await res.json();
             dispatch({
                 type: GET_SKILLS,
                 payload: resData
             })
            }catch(err) {
                dispatch({
                    type: SET_ERROR,
                    payload: err.message
                })
            }
         }  
 }

 export const setLoading = () : SkillsAction => {
     return {
         type: SET_LOADING
     }
 }

 export const setError = () : SkillsAction => {
     return {
         type: SET_ERROR,
         payload: ''
     }
 }