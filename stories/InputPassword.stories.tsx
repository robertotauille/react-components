import React from 'react';
import { Meta, Story } from '@storybook/react';
import { ShieldCheckIcon } from '@heroicons/react/24/outline';

import { Box, InputPassword, InputPasswordProps } from '../src';

const meta: Meta = {
  title: 'InputPassword',
  component: InputPassword,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<InputPasswordProps> = args => {
  return (
    <Box className="flex flex-col gap-4">
      <InputPassword {...args} />
      <InputPassword label="Password" color="blue" {...args} />
      <InputPassword
        label="Password"
        icon={<ShieldCheckIcon />}
        color="blue"
        {...args}
      />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
