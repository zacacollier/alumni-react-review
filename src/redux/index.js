import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

const initialState = {
  users: [],
  isFetching: false,
  error: false,
  initialized: false,
};

const INIT = 'friends-list/INIT';

const reducer = (state = initialState, action) => {

  switch (action.type) {

    case INIT:
      return {
        ...state,
        initialized: true,
      }
    default:
      return state;

  }

}


const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(
      thunk
    )
  )
);

export default store;
