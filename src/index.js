import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import {createLogger} from 'redux-logger';
import { Provider } from 'react-redux'
import {getArticles,addArticle, deleteArticle} from './actions/action';
import reducer from './reducers/articleReducer'


const store = createStore(reducer);




ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

