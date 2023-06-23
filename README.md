# Button Dialog

Simple button that opens a dialog in React

## How to install

### prod

pnpm

```bash
pnpm add button-dialog
```

or
npm

```bash
npm i button-dialog
```


### dev

pnpm

```bash
pnpm add -D button-dialog
```

or

npm

```bash
npm i -D button-dialog
```

## How to use it

```tsx
import { ButtonDialog } from "button-dialog"

function MyComponent() {
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
}
```

## Props

- **classStyles**: classNames for the elements: [Action Button](https://github.com/TiagoAMarek/ButtonDialog/blob/154a4fcd334b7ff2759572323260c96ec6bf55b1/src/index.tsx#L47), [Close Button](https://github.com/TiagoAMarek/ButtonDialog/blob/154a4fcd334b7ff2759572323260c96ec6bf55b1/src/index.tsx#L36), [Dialog Container](https://github.com/TiagoAMarek/ButtonDialog/blob/154a4fcd334b7ff2759572323260c96ec6bf55b1/src/index.tsx#L31) and the [Header](https://github.com/TiagoAMarek/ButtonDialog/blob/154a4fcd334b7ff2759572323260c96ec6bf55b1/src/index.tsx#L34)
- **closeButtonAriaLabel**: The label text to be read by screen readers for the close button
- **text**: The text to be shown on the action button
