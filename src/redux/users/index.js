import { getUsers } from '../../helpers/api/users';

// Actions
const GET_USERS_PENDING = 'friends-list/users/GET_USERS_PENDING';
const GET_USERS_REJECTED = 'friends-list/users/GET_USERS_REJECTED';
const GET_USERS_FULFILLED = 'friends-list/users/GET_USERS_FULFILLED';

// Reducer
const initialState = {
  users: [],
  isFetching: false,
  error: false,
};

const reducer = (state = initialState, action) => {

  switch(action.type) {

    case GET_USERS_PENDING:
      return {
        ...state,
        isFetching: true,
      }

    case GET_USERS_FULFILLED:
      return {
        ...state,
        isFetching: false,
        users: action.payload,
        error: false,
      }

    case GET_USERS_REJECTED:
      return {
        ...state,
        error: true,
        users: initialState.users,
      }

    default:
      return state;

  }

}

// Action Creators

const getUsersPending = () => ({
  type: GET_USERS_PENDING,
})

const getUsersFulfilled = (results) => ({
  type: GET_USERS_FULFILLED,
  payload: results,
})

const getUsersRejected = (error) => ({
  type: GET_USERS_FULFILLED,
  payload: error,
})

export const fetchUsers = () =>
  dispatch => {

    // 1. tell the store we're fetching
    dispatch(getUsersPending())
    // 2. fetch users
    return getUsers()
      // 3. return results on success
      .then(res => dispatch(getUsersFulfilled(res.results)))
      // 4. return an error on error
      .catch(error => dispatch(getUsersRejected(error)))


  }

export default reducer;
