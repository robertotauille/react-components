import React from "react";
import { Meta, Story } from "@storybook/react";

import { Box, InputSearch, InputSearchProps } from "../src";

const meta: Meta = {
  title: "InputSearch",
  component: InputSearch,
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

const Template: Story<InputSearchProps> = args => {
  return (
    <Box className="flex flex-col gap-4">
      <InputSearch {...args} />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
