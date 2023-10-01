import { Meta, StoryObj } from "@storybook/react";
import Editable from "./Editable";
import { EditableTypes } from "./Editable.types";

const meta: Meta<typeof Editable> = {
    component: Editable,
    title: "gle-components/Editable",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Editable>;

export const Primary: Story = (args:any) => {
    return (
        <Editable data-testId="Editable-id" {...args} />
    )
}
Primary.args = {
    value: 'Editable text',
    editableType: EditableTypes.input,
    onValueChanged: value => {console.log('onValueChanged', value)}
};