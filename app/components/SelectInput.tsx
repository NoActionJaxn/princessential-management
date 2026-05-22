import * as Select from "@radix-ui/react-select";
import classNames from "classnames";
import type { CSSProperties } from "react";

export interface Option {
  value: string;
  label: string;
}

export interface SelectInputProps {
  label?: string;
  value?: string;
  onChange?: (value: string) => void;
  options: Option[];
  placeholder?: string;
  style?: CSSProperties;
  className?: string;
  error?: string | boolean;
}

export default function SelectInput({ label, value, onChange, options, placeholder = "Select...", className, style, error }: SelectInputProps) {
  return (
    <label className="block">
      {label && <span className="block text-sm font-medium mb-1">{label}</span>}

      {/* Pass `undefined` to Radix Select when value is empty string so placeholder displays */}
      <Select.Root value={value === "" ? undefined : value} onValueChange={onChange}>
        <Select.Trigger className={classNames("inline-flex items-center justify-between w-full rounded-md border px-3 py-2", {
          "border-stone-900": !error,
          "border-red-600": error,
        }, className)} aria-label={label} style={style}>
          <Select.Value placeholder={placeholder} />
          <Select.Icon>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
              <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Select.Icon>
        </Select.Trigger>

        <Select.Content sideOffset={8}>
          <Select.Viewport className="bg-white rounded-md border py-1">
            {options.map((opt) => (
              <Select.Item key={opt.value} value={opt.value} className="flex items-center justify-between px-3 py-2 cursor-pointer hover:bg-stone-50">
                <Select.ItemText>{opt.label}</Select.ItemText>
                <Select.ItemIndicator>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Select.ItemIndicator>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Root>

      {error && typeof error === "string" && (
        <p className="mt-1 text-xs text-red-600">{error}</p>
      )}
    </label>
  );
}

SelectInput.displayName = "SelectInput";
