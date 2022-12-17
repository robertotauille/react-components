import React, { useState } from "react";
import { Meta, Story } from "@storybook/react";
import { CheckIcon } from "@heroicons/react/24/outline";

import { Box, Button, Modal, ModalProps } from "../src";

const meta: Meta = {
  title: "Modal",
  component: Modal,
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

const Template: Story<ModalProps> = args => {
  const [isOpened, setIsOpened] = useState(false);

  const handleButton = () => {
    setIsOpened(!isOpened);
  };

  return (
    <Box>
      <Button onClick={handleButton}>Open Modal</Button>

      <Modal
        isOpened={isOpened}
        buttonLabel="Ok"
        onCancel={() => setIsOpened(false)}
        onOk={() => alert("Ok!")}
      >
        <div>
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
            <CheckIcon className="h-6 w-6 text-green-600" />
          </div>

          <div className="mt-3 text-center sm:mt-5">
            <h3 className="text-lg font-medium leading-6 text-gray-900">
              Lorem ipsum dolor
            </h3>

            <div className="mt-2">
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur amet labore.
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </Box>
  );
};

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
