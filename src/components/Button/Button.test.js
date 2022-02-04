import { render, screen } from "@testing-library/react";
import ButtonComponent from "./Button";
import userEvent from "@testing-library/user-event";

describe("Given a button Component", () => {
  describe("When it recives a 'david' as text", () => {
    test("Then it should render 'david' inside", () => {
      const text = "david";
      const action = jest.fn();

      render(<ButtonComponent text={text} onClick={action}></ButtonComponent>);
      const expectedText = screen.queryByText(text);

      expect(expectedText).toBeInTheDocument();
    });
  });
  describe("When it recives an action", () => {
    test("Then it should call the action", () => {
      const text = "david";
      const actionMock = jest.fn();

      render(
        <ButtonComponent text={text} onClick={actionMock}></ButtonComponent>
      );
      const expectedButton = screen.getByRole("button");
      userEvent.click(expectedButton);

      expect(actionMock).toHaveBeenCalled();
    });
  });
});
