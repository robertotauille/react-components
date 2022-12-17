import React, { FC, Ref, forwardRef, Fragment, createRef } from "react";

import { Popover, Transition } from "@headlessui/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import { Input } from "../Input/Input";

export interface InputSearchProps {
  ref?: Ref<HTMLInputElement>;
}

export const InputSearch: FC<InputSearchProps> = forwardRef<
  HTMLInputElement,
  InputSearchProps
>(({ ...rest }, ref) => {
  const refButton = createRef<HTMLButtonElement>();

  const handleFocus = () => {
    refButton.current?.click();
  };

  return (
    <div {...rest}>
      <Input ref={ref} icon={<MagnifyingGlassIcon />} onFocus={handleFocus} />

      <Popover>
        {/* {({ close }) => ( */}
        {() => (
          <div className="block w-full">
            <Popover.Button ref={refButton} className="sr-only" />

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="mx-auto max-w-xl transform divide-y divide-gray-100 overflow-hidden rounded-xl bg-white shadow-2xl ring-1 ring-black ring-opacity-5 transition-all">
                Lista
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    </div>
  );
});
