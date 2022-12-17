import React, { createRef } from "react";
import { Meta, Story } from "@storybook/react";

import { Box, Collapse, CollapseProps } from "../src";

const meta: Meta = {
  title: "Collapse",
  component: Collapse,
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

const Template: Story<CollapseProps> = args => {
  const groupRef = [
    { collapse: createRef<any>() },
    { collapse: createRef<any>() },
    { collapse: createRef<any>() },
  ];

  const handleButton = () => {};

  return (
    <Box className="flex flex-col gap-4">
      <button onClick={handleButton}>Close</button>

      <Collapse
        label="Collapse 1"
        {...args}
        ref={groupRef[0].collapse}
        group={groupRef}
      >
        Collapse Content 1
      </Collapse>

      <Collapse
        label="Collapse 2"
        {...args}
        ref={groupRef[1].collapse}
        group={groupRef}
      >
        Collapse Content 2
      </Collapse>

      <Collapse
        label="Collapse 3"
        {...args}
        ref={groupRef[2].collapse}
        group={groupRef}
      >
        Collapse Content 3
      </Collapse>
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
