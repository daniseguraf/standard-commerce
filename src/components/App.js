import React, { useState } from 'react';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from 'components/pages/Login';
import Home from 'components/pages/Home';
import LightTheme from 'themes/light';
import DarkTheme from 'themes/dark';

import GlobalFonts from 'assets/fonts';
import GridBootstrap from './../../node_modules/bootstrap/dist/css/bootstrap-grid.min.css';

const GlobalStyle = createGlobalStyle`
  ${GridBootstrap}

  body {
    background: white;
    color: black;
    font-family: 'Raleway Regular';
    margin: 0;
    min-height: 100vh;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'Raleway Regular';
  }

  h1 {
    text-align: center;
  }
`;

function App() {
  const [theme, setTheme] = useState(LightTheme);

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((props) => (props.id === 'light' ? DarkTheme : LightTheme));
        },
      }}
    >
      <GlobalFonts />
      <GlobalStyle />

      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
