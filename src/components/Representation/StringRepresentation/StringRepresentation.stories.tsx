import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import StringRepresentation from "./StringRepresentation";

const meta: Meta<typeof StringRepresentation> = {
    component: StringRepresentation,
    title: "gle-components/Representations/StringRepresentation",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof StringRepresentation>;

export const String: Story = (args: any) => {
    const [{value}, updateArgs] = useArgs()

    const handleSubmit = (newValue: string) => {
        args.onSubmit?.(newValue);
        updateArgs({value: newValue});
    };

    return (
        <StringRepresentation data-testid="StringRepresentation-id" {...args} value={value} onSubmit={handleSubmit}/>
    )
}
String.args = {
    value: 'Editable String',
    onSubmit: (value:string) => {
        console.log('onValueChanged', value)
    }
};