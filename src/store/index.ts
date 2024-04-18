import getPhotographyReducer from "./reducers/getPhotographyReducer";
import getTravelReducer from "./reducers/getTravelReducer";
import {configureStore} from '@reduxjs/toolkit';
import { default as skillsSagas } from './skills/sagas';


import createSagaMiddleware from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import getSkillsReducer from "./skills/reducers";


const rootReducer = {
        skills: getSkillsReducer,
    travel: getTravelReducer,
    photography: getPhotographyReducer
  };
  
  function* rootSaga(): Generator {
    yield all([
      // add sagas here
      fork(skillsSagas),
    ]);
  }

  export function initStore(preloadedState?: any) {
    const sagaMiddleware = createSagaMiddleware();
    const store = configureStore({
      reducer: rootReducer,
      middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware({
          serializableCheck: false,
        }).concat(sagaMiddleware);
      },
      preloadedState,
    });
    sagaMiddleware.run(rootSaga);
    return store;
  }
  
  export const store = initStore();
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  export default store;