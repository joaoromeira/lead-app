import { InputHTMLAttributes } from 'react';

type TextInputProps = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const TextInput = ({
  label,
  ...inputProps
}: TextInputProps): JSX.Element => {
  return (
    <label className="block">
      <span className="text-gray-700">{label}</span>
      <input className="mt-1 block w-full rounded border p-2" {...inputProps} />
    </label>
  );
};
