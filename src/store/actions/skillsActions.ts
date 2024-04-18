import { ThunkAction } from "redux-thunk";
 import { RootState } from "..";
 import { GET_SKILLS, SET_ERROR, SET_LOADING, SkillsData, SkillsAction, SetLoadingAction, skillsError } from "../type";

 export const getSkills = (): ThunkAction<void, RootState, null, SkillsAction> => {
     return async dispatch => {
         try {
             const res = await fetch("https://cy3k588iaf.execute-api.us-west-2.amazonaws.com/Skills-stage/skills");
             if(!res.ok){
                 const resData: skillsError = await res.json();
                 throw new Error(resData.message);
             }
             const resData: SkillsData[] = await res.json();
             dispatch({
                 type: GET_SKILLS,
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

 export const setLoading = () : SetLoadingAction => {
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