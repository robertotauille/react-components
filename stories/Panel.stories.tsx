import React from "react";
import { Meta, Story } from "@storybook/react";

import { Box, Button, Panel, PanelProps, UploadFile } from "../src";

const meta: Meta = {
  title: "Panel",
  component: Panel,
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

const HeaderActions = () => {
  return (
    <Box className="flex gap-2">
      <Button color="green" size="lg">
        Button Text
      </Button>
    </Box>
  );
};

const FooterActions = () => {
  return (
    <Box className="flex gap-2">
      <Button color="gray" colorType="outline" size="lg">
        Button Text
      </Button>

      <Button size="lg">Button Text</Button>
    </Box>
  );
};

const Template: Story<PanelProps> = args => (
  <Box className="flex gap-4">
    <Panel
      title="Panel Title"
      subtitle="Panel Subtitle"
      actions={<HeaderActions />}
      footer={<FooterActions />}
      {...args}
    >
      <Box className="p-4">
        <UploadFile name="file" description="Descrição" />
      </Box>
    </Panel>
  </Box>
);

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
