import React, { createRef } from "react";
import { Meta, Story } from "@storybook/react";

import { Box, UploadFile, UploadFileProps } from "../src";

const meta: Meta = {
  title: "UploadFile",
  component: UploadFile,
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

const Template: Story<UploadFileProps> = args => {
  const ref = createRef<HTMLInputElement>();

  setTimeout(() => console.log(ref.current), 2000);

  return (
    <Box className="flex flex-col gap-4">
      <UploadFile ref={ref} description="PNG ou JPG até 5MB" {...args} />

      <UploadFile
        ref={ref}
        description="PNG ou JPG até 5MB"
        error="Error..."
        {...args}
      />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
