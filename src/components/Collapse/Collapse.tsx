import React, {
  FC,
  Ref,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
  useImperativeHandle,
} from "react";

import { Disclosure, Transition } from "@headlessui/react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

import { classNames } from "../../utils/miscellaneous";

export interface CollapseProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  defaultOpen?: boolean;
  children?: ReactNode;
  ref?: Ref<any>;
  group?: any;
}

export const Collapse: FC<CollapseProps> = forwardRef<any, CollapseProps>(
  ({ label, defaultOpen = false, children, group, ...rest }, ref) => {
    let closeCollapse: any;

    useImperativeHandle(ref, () => ({
      id: label,
      close() {
        if (closeCollapse) closeCollapse();
      },
    }));

    const handleButton = () => {
      if (!group) return;

      group
        .filter((ref: any) => ref.collapse.current.id !== label)
        .map((ref: any) => ref.collapse.current.close());
    };

    return (
      <Disclosure
        as="div"
        defaultOpen={defaultOpen}
        className="flex flex-col w-full"
      >
        {({ open, close }) => {
          closeCollapse = close;

          return (
            <>
              <Disclosure.Button
                onClick={handleButton}
                className="flex flex-1 p-4 bg-gray-100 rounded-lg justify-between items-center"
                {...rest}
              >
                <span className="text-gray-700">{label}</span>

                <ChevronRightIcon
                  className={classNames(
                    "w-6 h-6 text-gray-700",
                    "transition-all duration-200 ease-in-out",
                    open ? "transform rotate-90" : "transform rotate-0"
                  )}
                />
              </Disclosure.Button>

              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Disclosure.Panel className="flex flex-1 p-4 bg-gray-50 rounded-md">
                  {children}
                </Disclosure.Panel>
              </Transition>
            </>
          );
        }}
      </Disclosure>
    );
  }
);
