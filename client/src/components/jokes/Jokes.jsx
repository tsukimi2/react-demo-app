import React, { useEffect, useContext, Fragment } from "react";
import JokeContext from "../../context/joke/jokeContext";
import "../../App.css";

// Component import
import JokeItem from "./JokeItem";
import Heading from "./Heading";
import Preload from "../layout/Preload";

const Jokes = () => {
  const jokeContext = useContext(JokeContext);
  const { jokes, getJokes, loading } = jokeContext;

  useEffect(() => {
    getJokes();
    // eslint-disable-next-line
  }, []);

  const handleClick = () => {
    getJokes();
  };

  if (loading) {
    return <Preload />;
  }

  return (
    <Fragment>
      <Heading />
      <div className="container joke-container">
        <JokeItem joke={jokes["value"]} img={jokes["icon_url"]} />
      </div>
      <div className="btn-next-container">
        <button className="btn-large orange darken-3" onClick={handleClick}>
          <i className="far fa-grin-tears"></i>
        </button>
      </div>
    </Fragment>
  );
};

export default Jokes;
