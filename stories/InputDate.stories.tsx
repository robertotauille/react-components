import React from "react";
import { Meta, Story } from "@storybook/react";

import { Box, InputDate, InputDateProps } from "../src";

const meta: Meta = {
  title: "InputDate",
  component: InputDate,
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

const Template: Story<InputDateProps> = args => {
  return (
    <Box className="flex flex-col gap-4">
      <InputDate formatDate="dd/MM/Y" {...args} />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
