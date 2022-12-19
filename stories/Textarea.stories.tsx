import React from "react";
import { Meta, Story } from "@storybook/react";

import { Box, Textarea, TextareaProps } from "../src";

const meta: Meta = {
  title: "Textarea",
  component: Textarea,
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

const Template: Story<TextareaProps> = args => {
  return (
    <Box className="flex flex-col gap-4">
      <Textarea {...args} />
      <Textarea placeholder="Placeholder" error="Error..." {...args} />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
