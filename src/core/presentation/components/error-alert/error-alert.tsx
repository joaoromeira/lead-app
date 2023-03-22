type ErrorAlertProps = {
  message: string;
};

export const ErrorAlert = ({ message }: ErrorAlertProps): JSX.Element => {
  return (
    <div
      className="mb-4 flex items-center bg-red-800 p-2 leading-none text-red-100 lg:inline-flex lg:rounded-full"
      role="alert"
    >
      <span className="mr-3 flex rounded-full bg-red-500 px-2 py-1 text-xs font-bold uppercase">
        Error
      </span>
      <span className="mr-2 flex-auto text-left font-semibold">{message}</span>
    </div>
  );
};
