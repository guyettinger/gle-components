import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import { BooleanRepresentation } from "./BooleanRepresentation";

const meta: Meta<typeof BooleanRepresentation> = {
    component: BooleanRepresentation,
    title: "gle-components/Representations/BooleanRepresentation",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof BooleanRepresentation>;

export const Boolean: Story = (args: any) => {
    const [{value}, updateArgs] = useArgs()

    const handleSubmit = (newValue: boolean) => {
        args.onSubmit?.(newValue);
        updateArgs({value: newValue});
    };

    return (
        <BooleanRepresentation data-testid="BooleanRepresentation-id" {...args} value={value} onSubmit={handleSubmit}/>
    )
}
Boolean.args = {
    value: true,
    onSubmit: (value: boolean) => {
        console.log('onValueChanged', value)
    }
};