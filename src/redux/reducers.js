import {
  FETCH_USER_DATA,
  USER_DATA_LOADING,
  REFETCH_USER_DATA,
  CREATE_USER_LOADING,
} from "./types";

const userDataState = {
  userData: [],
  loading: false,
  refetchData: true,
  createUserLoading: false,
};

export const userDataReducer = (state = userDataState, action) => {
  switch (action.type) {
    case FETCH_USER_DATA:
      return { ...state, userData: action.data };
    case USER_DATA_LOADING:
      return { ...state, loading: action.data };
    case REFETCH_USER_DATA:
      return { ...state, refetchData: action.data };
    case CREATE_USER_LOADING:
      return { ...state, createUserLoading: action.data };
    default:
      return state;
  }
};
