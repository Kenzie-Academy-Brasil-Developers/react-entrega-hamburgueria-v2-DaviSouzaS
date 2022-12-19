import { UserProvider } from './contexts/UserContext';
import { GlobalStyles } from './styles/globalStyles.js';
import { StyledButtons } from './styles/buttons';
import { BrowserRouter } from 'react-router-dom';
import { Displays } from './styles/displays';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Displays/>
    <GlobalStyles/>
    <StyledButtons/>
    <UserProvider>
      <App />
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
