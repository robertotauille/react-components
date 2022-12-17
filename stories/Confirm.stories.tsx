import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';
import { Box, Button, Confirm, ConfirmProps } from '../src';

const meta: Meta = {
  title: 'Confirm',
  component: Confirm,
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

const Template: Story<ConfirmProps> = args => {
  const [isOpened, setIsOpened] = useState(false);

  const handleButton = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Box>
      <Button onClick={handleButton}>Open Confirm</Button>

      <Confirm
        title="Remove Item"
        description="Do you want to remove <span className='text-gray-800 font-bold'>this</span> item?"
        inputPlaceholder='Type "remove" to confirm'
        labelCancel="Cancel"
        labelConfirm="Remove"
        value="remove"
        isOpened={isOpened}
        onCancel={() => setIsOpened(false)}
        onConfirm={(value: string) => alert(`Item removed: ${value}`)}
      />
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
