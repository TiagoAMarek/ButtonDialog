import { render, fireEvent, screen } from "@testing-library/react";
import { ButtonDialog } from "..";

describe("Dialog basic behaviors", () => {
  it("should open the dialog when clicking on the dialog button and close it when clicking on close button", async () => {
    render(
      <ButtonDialog text="click me!" closeButtonAriaLabel="close button">
        <p>Dialog content</p>
      </ButtonDialog>
    );


    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", {name: /click me!/i}));

    expect(screen.getByRole('dialog')).toHaveAttribute("open");
    expect(screen.getByText(/Dialog content/i)).toBeInTheDocument();

    fireEvent.click(screen.getByLabelText(/close button/i));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });
});
