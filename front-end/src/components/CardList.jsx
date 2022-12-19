import Card from "./Card"
import React from "react";
import './Card.css'


function CardList (props) {

    return (<div className="container">{props.info?.map((movie) => {
        return <Card key={movie.id} card_info={movie}/>
    })}</div>);
    
}

export default CardList;