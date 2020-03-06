import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
// import Demo1 from './component/useState/indexHook'
// import Demo2 from './component/useEffect/makeUnmount'
// import Demo3 from './component/useContext/indexHook'
// import Demo4 from './component/useReducer/'
import Demo5 from './component/useMemo/'
import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render(<Demo1 />, document.getElementById('root'));
// ReactDOM.render(<Demo2 />, document.getElementById('root'));
// ReactDOM.render(<Demo3 />, document.getElementById('root'));
// ReactDOM.render(<Demo4 />, document.getElementById('root'));
ReactDOM.render(<Demo5 />, document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
