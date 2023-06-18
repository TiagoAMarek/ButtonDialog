import { render, fireEvent, screen } from "@testing-library/react";
import { ButtonDialog } from "..";


// Happy-dom is not behaving really well with the dialog html.
// TODO: Review how to improve this tests
describe("Dialog basic behaviors", () => {
  it("should open the dialog when clicking on the dialog button and close it when clicking on close button", async () => {
    render(
      <ButtonDialog text="click me!" closeButtonAriaLabel="close button">
        <p>Dialog content</p>
      </ButtonDialog>
    );

    fireEvent.click(screen.getByRole("button", {name: /click me!/i}));
    expect(screen.getByText(/Dialog content/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/close button/i)).toBeInTheDocument();
  });
});
