import htmr from "htmr";
import React, {
  FC,
  KeyboardEvent,
  FormEvent,
  Fragment,
  useState,
  createRef,
} from "react";

import { Dialog, Transition } from "@headlessui/react";
import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export interface ConfirmProps {
  isOpened: boolean;
  value: string;
  title: string;
  description: string;
  inputPlaceholder: string;
  inputErrorMessage?: string;
  labelCancel?: string;
  labelConfirm?: string;
  onCancel: () => void;
  onConfirm: (value: string) => void;
}

export const Confirm: FC<ConfirmProps> = ({
  isOpened,
  value,
  title,
  description,
  inputPlaceholder,
  inputErrorMessage = "The value is not correct. Please try again.",
  labelCancel,
  labelConfirm,
  onCancel,
  onConfirm,
}) => {
  const [valueInput, setValueInput] = useState("");
  const [hasError, setHasError] = useState(false);

  const cancelButtonRef = createRef<HTMLButtonElement>();

  const replaceValue = (text: string) => {
    return text.replace("[VALUE]", value);
  };

  const handleInputChange = (event: FormEvent<HTMLInputElement>) => {
    setValueInput(event.currentTarget.value);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleConfirm();
    }
  };

  const handleCancel = () => {
    setHasError(false);
    onCancel();
  };

  const handleConfirm = () => {
    if (value !== valueInput) {
      setHasError(true);
      return;
    }

    setHasError(false);
    onConfirm(value);
    onCancel();
  };

  return (
    <Transition.Root show={isOpened} as={Fragment}>
      <Dialog
        as="div"
        initialFocus={cancelButtonRef}
        className="relative z-10"
        onClose={handleCancel}
      >
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-lg bg-white px-4 pt-5 pb-4 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10">
                    <ExclamationTriangleIcon className="h-6 w-6 text-red-600" />
                  </div>

                  <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {title}
                    </Dialog.Title>

                    <div>
                      <p className="text-sm text-gray-500">
                        {htmr(replaceValue(description))}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="py-6">
                  <Input
                    placeholder={inputPlaceholder}
                    error={hasError ? inputErrorMessage : ""}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                  />
                </div>

                <div className="flex justify-end gap-4">
                  <Button
                    ref={cancelButtonRef}
                    type="button"
                    colorType="outline"
                    size="xl"
                    full
                    onClick={handleCancel}
                  >
                    {labelCancel}
                  </Button>

                  <Button
                    type="button"
                    color="red"
                    size="xl"
                    full
                    onClick={handleConfirm}
                  >
                    {labelConfirm}
                  </Button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
};
