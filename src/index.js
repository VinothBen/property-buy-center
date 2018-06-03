import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import './CSS/CSSimporter.css';
import './CSS/lessImporter.less';
import Root from './Root';
// import registerServiceWorker from './registerServiceWorker';

const render = Component =>
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('root')
  );

render(Root);

// Webpack Hot Module Replacement API
if (module.hot) module.hot.accept('./Root', () => render(Root));

// ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
