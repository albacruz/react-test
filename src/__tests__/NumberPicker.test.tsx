import * as React from "react";
import { shallow } from "enzyme";
import NumberPicker from "../components/NumberPicker";

/* test("Debería renderizar un 1 cuando se haya hecho un click en el botón", () => {
  const wrapper = shallow(<CounterButton />);
  wrapper.find("button").simulate("click");
  expect(wrapper.find("button").text()).toBe("1");
}); */

describe("NumberPicker", () => {
  describe("render", () => {
    test("Should find 2 buttons", () => {
      const wrapper = shallow(<NumberPicker />);
      const buttons = wrapper.find("button");
      expect(wrapper.find("button")).toHaveLength(2);
    });

    test("Should increment the state", () => {
      const wrapper = shallow(<NumberPicker />);
      wrapper.find(".add").simulate("click");
      expect(wrapper.find("p").text()).toBe("1");
    });

    test("Should decrement the state", () => {
      const wrapper = shallow(<NumberPicker />);
      wrapper.find(".sub").simulate("click");
      expect(wrapper.find("p").text()).toBe("-1");
    });
  });
});
