import React from "react";
import Enzyme, { shallow, mount } from "enzyme";
import { create } from "react-test-renderer";
import Pet from "../Pet";
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });

test("snapshot", () => {
  const c = create(<Pet />);
  expect(c.toJSON()).toMatchSnapshot();
});

describe("Pet component", () => {
  test("renders", () => {
    const wrapper = shallow(<Pet />);

    expect(wrapper.exists()).toBe(true);
  });
});
