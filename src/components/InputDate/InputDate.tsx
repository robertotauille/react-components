import React, { FC, Ref, forwardRef, useState, Fragment } from "react";

import { Popover, Transition } from "@headlessui/react";
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { CalendarDaysIcon } from "@heroicons/react/24/outline";

import "react-day-picker/dist/style.css";

import { Input, InputProps } from "../Input/Input";

export interface InputDateProps extends InputProps {
  formatDate?: string;
  ref?: Ref<HTMLInputElement>;
}

export const InputDate: FC<InputDateProps> = forwardRef<
  HTMLInputElement,
  InputDateProps
>(
  (
    { formatDate = "y-MM-dd", children, className = "", style, ...rest },
    ref
  ) => {
    const [selected, setSelected] = useState<Date>();
    const [inputValue, setInputValue] = useState<string>("");

    const handleDaySelect = (date: any) => {
      setSelected(date);

      if (date) {
        setInputValue(format(date, formatDate));
      } else {
        setInputValue("");
      }
    };

    return (
      <Popover>
        {({ close }) => (
          <div className="block w-full">
            <Popover.Button className="block w-full">
              <Input
                ref={ref}
                icon={<CalendarDaysIcon />}
                value={inputValue}
                className="pointer-events-none"
                {...rest}
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="w-fit">
                <DayPicker
                  mode="single"
                  showOutsideDays
                  selected={selected}
                  defaultMonth={selected}
                  onSelect={date => {
                    handleDaySelect(date);
                    close();
                  }}
                />
              </Popover.Panel>
            </Transition>
          </div>
        )}
      </Popover>
    );
  }
);
