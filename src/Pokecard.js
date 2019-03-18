// Show single pokemon car with name, imaage, type.
import React, { Component } from "react";

const BASE_URL = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon";

class Pokecard extends Component {
    render () {

        const { name, id, type } = this.props;

        return (
            <div className="Pokecard">
                { name } { type } { `${BASE_URL}/${id}.png` }
            </div>
        );
    }
};

export default Pokecard;