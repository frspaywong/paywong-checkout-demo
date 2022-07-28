import '@fontsource/inter';
import {ChakraProvider} from '@chakra-ui/react';
import {customTheme} from 'theme';
import Routers from 'pages/Routers';
import {AppProvider} from './AppContext';

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <AppProvider>
        <Routers />
      </AppProvider>
    </ChakraProvider>
  );
}

export default App;
