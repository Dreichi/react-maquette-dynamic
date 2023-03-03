import React from 'react';
import './PuzzleCard.css';

export default function PuzzleCard(props) {
    return (
        <div className="puzzle__card">
            <img src={props.img} class="filter-blue"></img>
            <h2 className="puzzle__name">{props.name}</h2>
            <p>{props.text}</p>
        </div>
    )
}
