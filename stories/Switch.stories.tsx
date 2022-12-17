import React from "react";
import { Meta, Story } from "@storybook/react";

import { Box, BoxProps, Switch } from "../src";

const meta: Meta = {
  title: "Switch",
  component: Switch,
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
  const [enabled, setEnabled] = React.useState(false);

  const handleChange = (value: boolean) => setEnabled(value);

  return (
    <Box className="flex flex-col gap-4">
      <Switch enabled={enabled} onChange={handleChange} {...args} />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
