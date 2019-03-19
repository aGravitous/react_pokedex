import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";


//Smoke test
it("renders without crashing", function() {
  shallow(<App />);
});


//mount smoke test
it("renders using mount", function() {
  mount(<App />);
});