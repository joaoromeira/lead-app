import { ButtonHTMLAttributes } from 'react';

type DeleteButton = ButtonHTMLAttributes<HTMLButtonElement> & {
  isLoading?: boolean;
};

export const DeleteButton = ({
  isLoading,
  ...buttonProps
}: DeleteButton): JSX.Element => {
  return (
    <button
      disabled={isLoading}
      className="rounded bg-white py-2 px-4 font-bold text-red-500  hover:text-red-700"
      {...buttonProps}
    >
      Delete
    </button>
  );
};
