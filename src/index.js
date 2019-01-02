import React from 'react';
import ReactDOM from 'react-dom';
import 'react-hot-loader/patch'
import './index.css';
import './styles/main.scss';

import * as serviceWorker from './serviceWorker';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import RootContainer from './components/RootContainer';

const render = (Component) => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={configureStore()}>
                <Component />
            </Provider>
        </AppContainer>,
        document.getElementById('root'),
    );
};

render(RootContainer);

if (module.hot) {
    module.hot.accept('./components/RootContainer', () => {
        render(RootContainer);
    });
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
