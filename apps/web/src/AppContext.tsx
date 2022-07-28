import {createContext, ReactNode, useMemo} from 'react';
import {useLocation} from 'react-router-dom';
import queryString from 'query-string';
import {makeClient} from './client/configure';
import {Provider} from 'urql';

interface AppContextType {}

type AppProviderProps = {
  children: ReactNode;
};
export const AppContext = createContext<AppContextType>({});

export const AppProvider = ({children}: AppProviderProps) => {
  const location = useLocation();
  const client = useMemo(() => {
    const {token} = queryString.parse(location.search);
    return makeClient(
      process.env.REACT_APP_API_ENDPOINT || '',
      (token as string) || undefined
    );
  }, [location.search]);
  return (
    <AppContext.Provider value={{}}>
      <Provider value={client}>{children}</Provider>
    </AppContext.Provider>
  );
};
