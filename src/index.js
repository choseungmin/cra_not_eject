import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react'; // MobX 에서 사용하는 Provider
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import RootStore from './stores';

const root = new RootStore(); // *** 루트 스토어 생성

ReactDOM.render(
  <Provider {...root}>
    {/* *** ...root 으로 스토어 모두 자동으로 설정 */}
    <App />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();
