import React, { useReducer } from "react";
import axios from "axios";
import { GET_JOKES, JOKES_ERROR, SET_LOADING } from "../Types";
import JokeContext from "./jokeContext";
import jokeReducer from "./jokeReducer";

const JokeState = (props) => {
  const initialState = {
    jokes: [],
    error: "",
    loading: false,
  };

  const [state, dispatch] = useReducer(jokeReducer, initialState);

  // Get jokes
  const getJokes = async () => {
    setLoading();

    try {
      const randCategories = [
        "animal",
        "career",
        "celebrity",
        "dev",
        "fashion",
        "food",
        "history",
        "money",
        "movie",
        "music",
        "science",
        "sport",
        "travel",
      ];

      const category = Math.floor(Math.random() * randCategories.length);

      const res = await axios.get(
        `https://api.chucknorris.io/jokes/random?category=${randCategories[category]}`
      );
      dispatch({ type: GET_JOKES, payload: res.data });
    } catch (error) {
      dispatch({ type: JOKES_ERROR, payload: error });
    }
  };

  // Set loading
  const setLoading = () => {
    dispatch({ type: SET_LOADING });
  };

  return (
    <JokeContext.Provider
      value={{
        jokes: state.jokes,
        error: state.error,
        loading: state.loading,
        getJokes,
        setLoading,
      }}
    >
      {props.children}
    </JokeContext.Provider>
  );
};

export default JokeState;
