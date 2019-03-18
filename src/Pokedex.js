import React, { Component } from "react";
import Pokecard from "./Pokecard";
import pokecards from "./pokecards";

class Pokedex extends Component {
 render () {

    return (
        <span className="Pokedex">
            { pokecards.map(card => <p><Pokecard name={ card.name }
            id={ card.id } type={ card.type }/></p>) }
        </span>
    );
 }
};

export default Pokedex;