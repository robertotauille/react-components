import React from "react";
import { Meta, Story } from "@storybook/react";

import { Box, Checkbox, CheckboxProps } from "../src";

const meta: Meta = {
  title: "Checkbox",
  component: Checkbox,
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

const Template: Story<CheckboxProps> = args => {
  return (
    <Box className="flex flex-col gap-4">
      <Checkbox
        name="label"
        label="Label"
        description="Description..."
        {...args}
      />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
