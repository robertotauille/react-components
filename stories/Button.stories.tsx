import React, { createRef, useEffect } from "react";
import { Meta, Story } from "@storybook/react";

import { Box, Button, ButtonProps } from "../src";

const meta: Meta = {
  title: "Button",
  component: Button,
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

const Template: Story<ButtonProps> = args => {
  const ref = createRef<HTMLButtonElement>();

  useEffect(() => {
    console.log(ref.current?.offsetWidth);
    ref.current?.focus();
  }, [ref]);

  return (
    <Box className="flex gap-4">
      <Button ref={ref} {...args}>
        Button Text
      </Button>
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
