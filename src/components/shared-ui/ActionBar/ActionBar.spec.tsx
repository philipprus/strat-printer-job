import React from "react";
import renderer from "react-test-renderer";
import ActionBar from "./ActionBar";
import { shallow } from '../../../enzyme';

test("Link changes the class when hovered", () => {
  const component = renderer.create(<ActionBar title="Current printing job" />);
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should show correct text", () => {
  const wrapper = shallow(<ActionBar title="Current printing job" />);
  expect(wrapper.text().includes("Current printing job")).toBe(true);
});
