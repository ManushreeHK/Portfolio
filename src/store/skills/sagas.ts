import { all, fork, put, takeEvery } from "redux-saga/effects";
import Axios, { AxiosResponse } from "axios";
import { GetSkillsAction,getSkillsResponse, GET_SKILLS_SUCCESS, SET_ERROR, GET_SKILLS } from "./actions";

function* getSkills(action: GetSkillsAction): Generator {
  try {
    const response: AxiosResponse = (yield Axios.get(
      "https://cy3k588iaf.execute-api.us-west-2.amazonaws.com/Skills-stage/skills",
      {
        withCredentials: true,
      }
    )) as AxiosResponse;
    const data: getSkillsResponse = response.data;
    if (data) {
      yield put({
        type: GET_SKILLS_SUCCESS,
        payload: data,
      });
    } else {
      yield put({
        type: SET_ERROR,
      });
    }
  } catch (e) {
    yield put({
      type: SET_ERROR,
    });
  }
}

function* watchInitiateChase() {
  yield takeEvery(GET_SKILLS, getSkills);
}

export default function* rootSaga(): Generator {
  yield all([fork(watchInitiateChase)]);
}
