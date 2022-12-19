import React, {
  FC,
  ChangeEvent,
  DragEvent,
  forwardRef,
  Ref,
  useState,
  createRef,
  MutableRefObject,
  InputHTMLAttributes,
} from "react";

import { XCircleIcon } from "@heroicons/react/24/outline";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";

import { Theme, ThemeColors } from "../../theme";
import { classNames, formatBytes } from "../../utils/miscellaneous";

export interface UploadFileProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  description?: string;
  color?: keyof typeof ThemeColors;
  error?: string;
  ref?: Ref<HTMLInputElement>;
}

const colors = {
  text: {
    slate: "text-slate-600 hover:text-slate-500 focus-within:ring-slate-500",
    gray: "text-gray-600 hover:text-gray-500 focus-within:ring-gray-500",
    red: "text-red-600 hover:text-red-500 focus-within:ring-red-500",
    orange:
      "text-orange-600 hover:text-orange-500 focus-within:ring-orange-500",
    amber: "text-amber-600 hover:text-amber-500 focus-within:ring-amber-500",
    yellow:
      "text-yellow-600 hover:text-yellow-500 focus-within:ring-yellow-500",
    lime: "text-lime-600 hover:text-lime-500 focus-within:ring-lime-500",
    green: "text-green-600 hover:text-green-500 focus-within:ring-green-500",
    emerald:
      "text-emerald-600 hover:text-emerald-500 focus-within:ring-emerald-500",
    teal: "text-teal-600 hover:text-teal-500 focus-within:ring-teal-500",
    cyan: "text-cyan-600 hover:text-cyan-500 focus-within:ring-cyan-500",
    sky: "text-sky-600 hover:text-sky-500 focus-within:ring-sky-500",
    blue: "text-blue-600 hover:text-blue-500 focus-within:ring-blue-500",
    indigo:
      "text-indigo-600 hover:text-indigo-500 focus-within:ring-indigo-500",
    violet:
      "text-violet-600 hover:text-violet-500 focus-within:ring-violet-500",
    purple:
      "text-purple-600 hover:text-purple-500 focus-within:ring-purple-500",
    fuchsia:
      "text-fuchsia-600 hover:text-fuchsia-500 focus-within:ring-fuchsia-500",
    pink: "text-pink-600 hover:text-pink-500 focus-within:ring-pink-500",
    rose: "text-rose-600 hover:text-rose-500 focus-within:ring-rose-500",
  },
  border: {
    slate: "border-slate-600",
    gray: "border-gray-600",
    red: "border-red-600",
    orange: "border-orange-600",
    amber: "border-amber-600",
    yellow: "border-yellow-600",
    lime: "border-lime-600",
    green: "border-green-600",
    emerald: "border-emerald-600",
    teal: "border-teal-600",
    cyan: "border-cyan-600",
    sky: "border-sky-600",
    blue: "border-blue-600",
    indigo: "border-indigo-600",
    violet: "border-violet-600",
    purple: "border-purple-600",
    fuchsia: "border-fuchsia-600",
    pink: "border-pink-600",
    rose: "border-rose-600",
  },
};

export const UploadFile: FC<UploadFileProps> = forwardRef<
  HTMLInputElement,
  UploadFileProps
>(({ name, description, color = Theme.config.color, error, ...rest }, ref) => {
  const [dragActive, setDragActive] = useState(false);
  const [fileDroped, setFileDroped] = useState(false);

  const [file, setFile] = useState<File | null>(null);
  const [image, setImage] = useState<FileReader | null>(null);

  const inputRef = createRef<HTMLInputElement>() as MutableRefObject<
    HTMLInputElement
  >;

  const handleFiles = (file: FileList) => {
    if (!inputRef.current) return;

    inputRef.current.files = file;
  };

  const handleImage = (file: File) => {
    const type = file.type;
    const validTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (!validTypes.includes(type)) return;

    const fileReader = new FileReader();

    fileReader.readAsDataURL(file);
    fileReader.onload = () => setImage(fileReader);
  };

  const handleDrag = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.type === "dragenter" || event.type === "dragover") {
      setDragActive(true);
    } else if (event.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (event: DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    event.stopPropagation();

    if (event.dataTransfer.files && event.dataTransfer.files[0]) {
      setFile(event.dataTransfer.files[0]);
      handleImage(event.dataTransfer.files[0]);
      handleFiles(event.dataTransfer.files);
      setDragActive(false);
      setFileDroped(true);
    }
  };

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files[0]) {
      setFile(event.target.files[0]);
      handleImage(event.target.files[0]);
      setFileDroped(true);
    }
  };

  const handleRemoveFile = () => {
    setImage(null);
    setFileDroped(false);
  };

  const handleRef = (el: HTMLInputElement) => {
    if (ref) {
      if (typeof ref === "function") {
        ref(el);
      } else {
        ref.current = el;
      }
    }

    inputRef.current = el;
  };

  return (
    <div className="mt-1 sm:col-span-2 sm:mt-0">
      <input
        ref={handleRef}
        id={name}
        name={name}
        type="file"
        className="sr-only"
        onChange={handleInput}
        {...rest}
      />

      <div
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
        className={classNames(
          "relative flex flex-col max-w-lg justify-center items-center rounded-md border-2 border-dashed p-6 transition-all duration-150 ease-in-out",
          dragActive ? colors.border[color] : "border-gray-300",
          error ? "border-red-500" : ""
        )}
      >
        {error && (
          <div className="pointer-events-none absolute inset-y-0 top-0 right-0 flex pt-2 pr-2">
            <ExclamationCircleIcon
              className="h-5 w-5 text-red-500"
              aria-hidden="true"
            />
          </div>
        )}

        {fileDroped ? (
          <div className="flex flex-1 w-full">
            <div className="flex flex-1 w-full gap-4">
              {image && (
                <img
                  src={image.result as string}
                  alt="upload"
                  className="w-28 h-20 rounded-md"
                />
              )}

              <div className="flex flex-1 w-full flex-col justify-center">
                <h3 className="text-md font-medium text-gray-700">
                  {file?.name}
                </h3>
                <p className="text-sm text-gray-400">
                  {formatBytes(file?.size || 0)}
                </p>
              </div>

              <div className="flex justify-end items-center">
                <button
                  type="button"
                  onClick={handleRemoveFile}
                  className="inline-flex items-center rounded-full border border-transparent bg-gray-100 p-2 text-gray-500 shadow-sm hover:text-red-700 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-200 focus:text-red-700 focus:ring-offset-2"
                >
                  <XCircleIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-1 text-center">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              stroke="currentColor"
              fill="none"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <div className="flex text-sm text-gray-600">
              {dragActive ? (
                <p className={classNames("pl-1", colors.text[color])}>
                  Solte para fazer upload
                </p>
              ) : (
                <>
                  <label
                    htmlFor={name}
                    onClick={() => inputRef.current?.click()}
                    className={classNames(
                      "relative cursor-pointer rounded-md bg-white font-medium focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2",
                      colors.text[color]
                    )}
                  >
                    Clique para fazer upload
                  </label>
                  <p className="pl-1">ou arraste e solte</p>
                </>
              )}
            </div>

            <p className="text-xs text-gray-500">{description}</p>
          </div>
        )}
      </div>

      {error && (
        <p className="inline-flex items-center mt-1 text-xs text-red-400">
          {error}
        </p>
      )}
    </div>
  );
});
