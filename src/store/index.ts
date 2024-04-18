import { createStore, applyMiddleware, combineReducers   } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import {thunk} from "redux-thunk";
import getPhotographyReducer from "./reducers/getPhotographyReducer";
import getTravelReducer from "./reducers/getTravelReducer";

import SkillsReducer from "./reducers/SkillsReducer";

const rootReducer = combineReducers({
    skills: SkillsReducer,
    travel: getTravelReducer,
    photography: getPhotographyReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;