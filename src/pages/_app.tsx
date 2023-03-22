import type { AppProps } from 'next/app';
import '@src/styles/main.css';

const App = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default App;
