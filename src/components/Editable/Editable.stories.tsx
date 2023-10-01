import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
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
    const [{value},updateArgs] = useArgs()

    const onValueChange = (newValue: string) => {
        // Call the provided callback
        // This is used for the Actions tab
        args.onValueChange?.(newValue);

        // Update the arg in Storybook
        updateArgs({ value: newValue });
    };

    return (
        <Editable data-testId="Editable-id" {...args} value={value} onValueChanged={onValueChange} />
    )
}
Primary.args = {
    value: 'Editable text',
    editableType: EditableTypes.input,
    onValueChanged: value => {console.log('onValueChanged', value)}
};