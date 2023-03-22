import { ButtonHTMLAttributes } from 'react';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  text: string;
  isLoading?: boolean;
};

export const Button = ({
  isLoading,
  text,
  ...buttonProps
}: ButtonProps): JSX.Element => {
  return (
    <button
      disabled={isLoading}
      className="ease relative inline-flex items-center rounded-md bg-green-400 px-10 py-2 font-medium text-white transition duration-300 hover:bg-green-500"
      {...buttonProps}
    >
      {isLoading ? (
        <svg
          aria-hidden="true"
          className="white:text-gray-600 mr-2 h-6 w-6 animate-spin fill-green-500 text-green-100"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
      ) : (
        <>
          <span className="absolute bottom-0 left-0 -ml-2 h-full">
            <svg
              viewBox="0 0 487 487"
              className="object-stretch h-full w-auto opacity-100"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 .3c67 2.1 134.1 4.3 186.3 37 52.2 32.7 89.6 95.8 112.8 150.6 23.2 54.8 32.3 101.4 61.2 149.9 28.9 48.4 77.7 98.8 126.4 149.2H0V.3z"
                fill="#FFF"
                fillRule="nonzero"
                fillOpacity=".1"
              />
            </svg>
          </span>
          <span className="absolute top-0 right-0 -mr-3 h-full w-12">
            <svg
              viewBox="0 0 487 487"
              className="h-full w-full object-cover"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M487 486.7c-66.1-3.6-132.3-7.3-186.3-37s-95.9-85.3-126.2-137.2c-30.4-51.8-49.3-99.9-76.5-151.4C70.9 109.6 35.6 54.8.3 0H487v486.7z"
                fill="#FFF"
                fillRule="nonzero"
                fillOpacity=".1"
              />
            </svg>
          </span>
          <span className="relative">{text}</span>
        </>
      )}
    </button>
  );
};
