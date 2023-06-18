import type { Meta, StoryObj } from "@storybook/react";
import { ButtonDialog } from "../";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: "Example/ButtonDialog",
  component: ButtonDialog,
  tags: ["autodocs"],
} satisfies Meta<typeof ButtonDialog>;

export default meta;
type Story = StoryObj<typeof ButtonDialog>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  render: () => (
    <ButtonDialog
      classStyles={{
        button: "hover:text-sky-500",
        closeButton: "cursor-pointer",
        dialogContainer: "open:flex flex-col w-96",
        header: "flex flex-row-reverse",
      }}
      closeButtonAriaLabel="Close"
      text="Click me"
    >
      Content
    </ButtonDialog>
  ),
};
