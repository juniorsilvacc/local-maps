import {ThemeProvider} from 'styled-components';
import {BrowserRouter, Switch, Route } from 'react-router-dom';

import HomePage from './pages/Home';

function App() {

  const theme = {
    primary: "#253238",
    secondery: "#6c63ff",
    background: "#F0F0F5",
    text: "#6C6C80",
    white: "#FFFFFF"
  }

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <HomePage/>
          </Route>
            
          <Route path="/new">Renderizando a new</Route>
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
