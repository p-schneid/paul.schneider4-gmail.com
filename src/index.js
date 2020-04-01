import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Welcome from './screens/Welcome/Welcome';
import TypographyTest from './screens/TypographyTest/TypographyTest';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <TypographyTest />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
