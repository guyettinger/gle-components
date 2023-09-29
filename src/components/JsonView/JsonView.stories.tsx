import { Meta, StoryObj } from "@storybook/react";
import JsonView from "./JsonView";
import { JsonViewProps } from "./JsonView.types";

const meta: Meta<typeof JsonView> = {
    component: JsonView,
    title: "gle-components/JsonView",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof JsonView>;

export const Primary: Story = (args:JsonViewProps) => (
    <JsonView data-testId="JsonView-id" {...args} />
);
Primary.args = {
    title: 'json',
    json: {
        firstName: "Teeny",
        lastName: "Bettini",
        age: 3,
        favoriteFoods: ["La Bouf", "Treats", "Ocean whitefish"],
        nickNames: {
            good: "Muffin Face",
            bad: "Boop Face",
            evil: "The Darkness"
        }
    }
};