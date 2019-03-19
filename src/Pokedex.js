import React, { Component } from "react";
import Pokecard from "./Pokecard";
import pokecards from "./pokecards";

class Pokedex extends Component {
 render () {

    return (
        <div className="Pokedex">
            { pokecards.map(card =>  <Pokecard key={card.id} name={ card.name }
            id={ card.id } type={ card.type }/>) }
        </div>
    );
 }
};

export default Pokedex;