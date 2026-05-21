import classNames from "classnames";
import type { InputHTMLAttributes } from "react";

export interface TextInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string | boolean;
}

export default function TextInput({ label, error, className, ...rest }: TextInputProps) {
  return (
    <label className="block">
      {label && <span className="block text-sm font-medium mb-1">{label}</span>}
      <input
        className={classNames(
          "w-full rounded-md border px-3 py-2 focus:outline-none focus:ring-2 focus:ring-stone-300",
          { "border-red-500": error },
          className
        )}
        {...rest}
      />
      {error && typeof error === "string" && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </label>
  );
}

TextInput.displayName = "TextInput";
