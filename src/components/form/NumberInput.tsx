import * as React from "react";
import { Input } from "@/components/ui/input";

interface NumberInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "onBlur"> {
  value?: number | null | undefined;
  onChange: (val: number | undefined) => void;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  min?: number;
  max?: number;
  step?: string | number;
}

export const NumberInput = React.forwardRef<HTMLInputElement, NumberInputProps>(
  ({ value, onChange, onBlur, min, max, step, className, ...props }, ref) => {
    // Keep local string state to allow natural typing (e.g. empty, negative signs, decimals)
    const [inputValue, setInputValue] = React.useState<string>("");

    // Sync local state when incoming prop changes
    React.useEffect(() => {
      if (value === undefined || value === null) {
        setInputValue("");
      } else {
        const parsedLocal = parseFloat(inputValue);
        if (isNaN(parsedLocal) || parsedLocal !== value) {
          setInputValue(value.toString());
        }
      }
    }, [value]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const valStr = e.target.value;
      setInputValue(valStr);

      if (valStr === "") {
        onChange(undefined);
      } else {
        const parsed = parseFloat(valStr);
        if (!isNaN(parsed)) {
          onChange(parsed);
        }
      }
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      let finalVal: number;
      const parsed = parseFloat(inputValue);

      if (inputValue === "" || isNaN(parsed)) {
        finalVal = min !== undefined ? min : 0;
      } else {
        finalVal = parsed;
        if (min !== undefined && finalVal < min) {
          finalVal = min;
        }
        if (max !== undefined && finalVal > max) {
          finalVal = max;
        }
      }

      if (step === 1 || step === "1") {
        finalVal = Math.round(finalVal);
      }

      setInputValue(finalVal.toString());
      onChange(finalVal);

      if (onBlur) {
        onBlur(e);
      }
    };

    return (
      <Input
        type="number"
        ref={ref}
        value={inputValue}
        onChange={handleChange}
        onBlur={handleBlur}
        min={min}
        max={max}
        step={step}
        className={className}
        {...props}
      />
    );
  }
);

NumberInput.displayName = "NumberInput";
