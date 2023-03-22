import 'reflect-metadata';
import '@presentation/styles/main.css';
import { ContainerProvider } from '@presentation/hooks/use-container';
import { container } from '@vendor/inversify/container';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ContainerProvider container={container}>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ContainerProvider>
  );
};

export default App;
