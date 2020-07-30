// Default export from modules
import React from 'react';

// Function exports from modules
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { render } from 'react-dom';

// CSS from a module
import 'bootstrap/dist/css/bootstrap.css';

// CSS from local file
import './css/musiclist.scss';

// Default export from local file
import DevTools from './components/shared/DevTools';
import configureStore from './store';
import TemplateContainer from './components/TemplateContainer';

const Store = configureStore();

const renderApp = (Component) => {
  render(
    <AppContainer>
      <Provider store={Store}>
        <div>
          <Component headline="Test Headline" count={1234} showCount />
          <DevTools />
        </div>
      </Provider>
    </AppContainer>,
    document.querySelector('#react-app'),
  );
};

renderApp(TemplateContainer);

if (module && module.hot) {
  module.hot.accept();
}
