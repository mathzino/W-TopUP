import { ComponentStory, ComponentMeta } from "@storybook/react";
import StepItems, { StepItemsProps } from "../../../../components/molecules/StepItems";

export default {
  title: "Components/Molecules/StepItems",
  component: StepItems,
} as ComponentMeta<typeof StepItems>;

const Template: ComponentStory<typeof StepItems> = (args: StepItemsProps) => <StepItems {...args} />;

export const Default = Template.bind({});

Default.args = {
  icon: "step1",
  desc1: "yang ingin kamu top upstring",
  desc2: "Pilih salah satu game",
  title: "1. Start",
};
