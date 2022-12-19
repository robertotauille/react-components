import React from "react";
import { Meta, Story } from "@storybook/react";
import { UserCircleIcon } from "@heroicons/react/24/outline";

import { Box, Input, InputProps } from "../src";

const meta: Meta = {
  title: "Input",
  component: Input,
  argTypes: {
    children: {
      control: {
        type: "text",
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputProps> = args => {
  return (
    <Box className="flex flex-col gap-4">
      <Input {...args} />

      <Input label="Username" color="blue" {...args} />

      <Input
        label="Username"
        icon={<UserCircleIcon />}
        color="blue"
        {...args}
      />
      <Input
        label="Username"
        placeholder="Username"
        error="Error..."
        {...args}
      />

      <Input mask="999-999-999" placeholder="Mask 999-999-999" {...args} />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
