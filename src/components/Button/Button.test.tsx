import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Button } from "./Button";

describe("Running Test for gle-components Button", () => {

    test("Check Button Disabled", () => {
        render(<Button disabled>Button gle-components</Button>)
        expect(screen.getByRole('button', {name: "Button gle-components"})).toBeDisabled();
    });
});