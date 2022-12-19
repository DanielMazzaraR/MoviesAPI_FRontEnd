import "./App.css";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import CardList from "./components/CardList";

function App() {
  const [API_CALL, setAPI_CALL] = useState();
  const api_key = "94101ad71736a755667d5010c495638a";
  const [currentPage, setCurrentPage] = useState(1);
  const title = useRef();

  const prevBtnHandler = (event) => {
    if(currentPage == 1){
      setCurrentPage(currentPage)
    }
    else{
      setCurrentPage(currentPage - 1);
    }
    focusTop();
  }

  const nextPageHandler = (event) => {
    setCurrentPage(currentPage + 1);
    focusTop();
  }

  const focusTop = () => {
    title.current.focus();
  }

  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/discover/movie?api_key=" +
          api_key +
          `&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${currentPage}&with_watch_monetization_types=flatrate`
      )
      .then((respone) => {
        setAPI_CALL(respone.data.results);
        console.log(respone.data.results);
      });
  }, [currentPage]);

  return (
    <div className="App">
      <h1 ref={title}>Movies</h1>
      <div className="page-manager">
        <button onClick={prevBtnHandler}> previus page </button>
         <h3>  {currentPage}  </h3>   
        <button onClick={nextPageHandler}> next page </button>
      </div>
      <div className="cards">
        <CardList info={API_CALL} />
      </div>
      <div className="page-manager">
        <button onClick={prevBtnHandler}> previus page </button>
         <h3>  {currentPage}  </h3>   
        <button onClick={nextPageHandler}> next page </button>
      </div>
    </div>
  );
}

export default App;
