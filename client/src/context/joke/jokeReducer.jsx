import { GET_JOKES, JOKES_ERROR, SET_LOADING } from "../Types";

export default (state, action) => {
  switch (action.type) {
    case GET_JOKES:
      return {
        ...state,
        jokes: action.payload,
        loading: false,
      };
    case JOKES_ERROR:
      return {
        ...state,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
};
