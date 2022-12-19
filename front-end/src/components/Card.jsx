import "./Card.css";
import React, {useState} from "react";

function Card(props) {
  const imgURL = "https://image.tmdb.org/t/p/w500/";

  return ( 
    <div className="card">
      <div className="face face1">
        <div className="content">
          <span className="stars"></span>
          <h2 className="java">{props.card_info.title}</h2>
          <p className="java">{props.card_info.overview}</p>
          <h5>Release date: {props.card_info.release_date}</h5>
          <h5>Rating: {props.card_info.vote_average}/10</h5>
        </div>
      </div>
      <div
        className="face face2"
        style={{
          backgroundImage: `url(${imgURL + props.card_info.poster_path})`,
        }}
      />
    </div>
  );
}

export default Card;
