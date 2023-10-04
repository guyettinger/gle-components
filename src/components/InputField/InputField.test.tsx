import '@testing-library/jest-dom'
import userEvent from "@testing-library/user-event";
import { render, screen, waitFor } from '@testing-library/react'

import InputField from "./InputField";

describe("Running Test for gle-components Input", () => {

    test("Check placeholder in InputField", () => {
        render(<InputField placeholder="Hello gle-components" />)
        expect(screen.getByPlaceholderText('Hello gle-components')).toHaveAttribute('placeholder', 'Hello gle-components');
    });

    test("renders the InputField component", async () => {
        render(<InputField placeholder="gle-components" />);
        const input = screen.getByPlaceholderText("gle-components") as HTMLInputElement;
        userEvent.type(input, "Hello world!");
        await waitFor(() => expect(input.value).toBe("Hello world!"));
    });
});
