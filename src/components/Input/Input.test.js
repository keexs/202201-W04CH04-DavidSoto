import { render, screen } from "@testing-library/react";
import InputComponent from "./Input";

describe("Given a InputComponent", () => {
  describe("When it recives a 'david'", () => {
    test("Then it should render itself with 'david'", () => {
      const text = "david";
      const inputType = "text";

      render(<InputComponent text={text} type={inputType}></InputComponent>);
      const expectedText = screen.getByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
});
