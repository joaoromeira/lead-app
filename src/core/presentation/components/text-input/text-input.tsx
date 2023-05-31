import { InputHTMLAttributes } from 'react';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  errorMessage?: string;
};

export const TextInput = ({
  label,
  errorMessage,
  ...inputProps
}: TextInputProps): JSX.Element => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input
        className={`mt-1 block w-full rounded border p-2 ${
          !!errorMessage ? 'border-red-500' : ''
        }`}
        {...inputProps}
      />
      {errorMessage && (
        <span className="mt-1 ml-1 flex items-center text-xs font-medium tracking-wide text-red-500">
          {errorMessage}
        </span>
      )}
    </label>
  );
};
