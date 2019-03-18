// Show single pokemon car with name, imaage, type.
import React, { Component } from "react";
import "./Pokecard.css";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

class Pokecard extends Component {
    render () {

        const { name, id, type } = this.props;

        return (
            <div className="Pokecard">
                <p>{ name }</p> <img src={ `${BASE_URL}/${id}.png` }></img> <p>{ type }</p>
            </div>
        );
    }
};

export default Pokecard;