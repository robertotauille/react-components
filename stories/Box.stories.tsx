import React, { createRef, useEffect } from "react";
import { Meta, Story } from "@storybook/react";

import { Box, BoxProps } from "../src";

const meta: Meta = {
  title: "Box",
  component: Box,
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

const Template: Story<BoxProps> = args => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    console.log(ref.current?.offsetWidth);
  }, [ref]);

  return (
    <Box className="flex flex-col gap-4">
      <Box ref={ref} className="w-10 h-10 bg-blue-400" {...args} />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
