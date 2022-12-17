import React, { createRef, useEffect } from "react";
import { Meta, Story } from "@storybook/react";

import { Box, Text, TextProps } from "../src";

const meta: Meta = {
  title: "Text",
  component: Text,
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

const Template: Story<TextProps> = args => {
  const ref = createRef<HTMLDivElement>();

  useEffect(() => {
    console.log(ref.current?.offsetWidth);
  }, [ref]);

  return (
    <Box className="flex flex-col gap-4">
      <Text>Text</Text>
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
