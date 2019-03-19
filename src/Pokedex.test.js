import React from "react";
import { shallow, mount } from "enzyme";
import Pokedex from "./Pokedex";
import toJson from "enzyme-to-json";


// smoke test
it("renders without crashing", function() {
  shallow(<Pokedex />);
});

// mount smoke test
it("renders using mount", function() {
    mount(<Pokedex />);
  });

// snapshot test
it("matches snapshot", function() {
    let wrapper = shallow(<Pokedex />);
    let serialized = toJson(wrapper);
    expect(serialized).toMatchSnapshot();
  });  