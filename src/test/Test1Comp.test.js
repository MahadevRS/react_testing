import React from "react";
import { configure, shallow } from "enzyme";
import chai, { expect } from "chai";
import chaiEnzyme from "chai-enzyme";
import Adapter from "enzyme-adapter-react-16";
import Test1Comp from "../components/Test1Comp";

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

describe("Testing <Test1Comp/> Component", () => {
  it("Test1Comp renders correctly", () => {
    const wrapper = shallow(<Test1Comp />);
    expect(wrapper.find("#componentTitle").text()).to.equal(
      "Testing the Component"
    );
    expect(wrapper.find('input[type="number"]').length).to.equal(2);
    expect(wrapper.find("#calculateButton").text()).to.equal("Show Sum");
  });

  it("calculates and displays the correct sum", () => {
    const wrapper = shallow(<Test1Comp />);

    wrapper.find("#num1").simulate("change", { target: { value: "5" } });
    wrapper.find("#num2").simulate("change", { target: { value: "10" } });

    wrapper.find("#calculateButton").simulate("click");

    expect(wrapper.find("#sumResult").text()).to.equal("Sum: 15");
  });

  it("displays the proper error message", () => {
    const wrapper = shallow(<Test1Comp />);

    wrapper.find("#num1").simulate("change", { target: { value: "" } });
    wrapper.find("#num2").simulate("change", { target: { value: "10" } });

    wrapper.find("#calculateButton").simulate("click");

    expect(wrapper.find("#sumResult").text()).to.equal(
      "Sum: Please enter valid numbers"
    );
  });
});
