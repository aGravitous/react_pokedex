import React from "react";
import { shallow } from "enzyme";
import Pokecard from "./Pokecard";


//Smoke test
it("renders without crashing", function() {
  shallow(<Pokecard />);
});
