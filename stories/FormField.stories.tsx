import React from "react";
import { Meta, Story } from "@storybook/react";

import { Box, FormField, FormFieldProps, Input } from "../src";

const meta: Meta = {
  title: "FormField",
  component: FormField,
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

const Template: Story<FormFieldProps> = args => {
  return (
    <Box className="flex flex-col gap-4">
      <FormField
        name="username"
        label="Username"
        description="description..."
        {...args}
      >
        <Input name="username" />
      </FormField>
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
