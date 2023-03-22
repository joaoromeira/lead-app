import { createContext, useContext } from 'react';

import { Container } from 'inversify';

export const ContainerContext = createContext<Container>({} as Container);

export const ContainerProvider = ({ children, container }: any) => {
  return (
    <ContainerContext.Provider value={container}>
      {children}
    </ContainerContext.Provider>
  );
};

export const useContainer = () => {
  return useContext(ContainerContext);
};
