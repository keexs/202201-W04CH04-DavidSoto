import { render, screen } from "@testing-library/react";
import InputComponent from "./Input";

describe("Given a InputComponent", () => {
  describe("When it recives a text'david'", () => {
    test("Then it should render itself with 'david'", () => {
      const text = "david";
      const inputType = "text";

      render(<InputComponent text={text} type={inputType}></InputComponent>);
      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
  describe("When it recives a 'text' as inputType", () => {
    test("Then it should render a input with inputType text", () => {
      const text = "david";
      const inputType = "text";

      render(<InputComponent text={text} type={inputType}></InputComponent>);
      const component = screen.getByRole("textbox");
      const expectedType = component.type;

      expect(expectedType).toMatch(inputType);
    });
  });
});
