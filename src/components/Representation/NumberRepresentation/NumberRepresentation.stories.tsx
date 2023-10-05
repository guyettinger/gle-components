import { Meta, StoryObj } from "@storybook/react";
import { useArgs } from "@storybook/preview-api";
import NumberRepresentation from "./NumberRepresentation";

const meta: Meta<typeof NumberRepresentation> = {
    component: NumberRepresentation,
    title: "gle-components/Representation/NumberRepresentation",
    argTypes: {},
};
export default meta;

type Story = StoryObj<typeof NumberRepresentation>;

export const Number: Story = (args: any) => {
    const [{value}, updateArgs] = useArgs()

    const handleSubmit = (newValue: number) => {
        args.onSubmit?.(newValue);
        updateArgs({value: newValue});
    };

    return (
        <NumberRepresentation data-testid="NumberRepresentation-id" {...args} value={value} onSubmit={handleSubmit}/>
    )
}
Number.args = {
    value: 3.14,
    onSubmit: (value:number) => {
        console.log('onValueChanged', value)
    }
};