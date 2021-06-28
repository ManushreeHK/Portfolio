import { createStore, applyMiddleware, combineReducers   } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

import SkillsReducer from "./reducers/SkillsReducer";

const rootReducer = combineReducers({
    skills: SkillsReducer
});

const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export type RootState = ReturnType<typeof rootReducer>;

export default store;