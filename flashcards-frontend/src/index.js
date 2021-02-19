import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ToastContainer } from 'react-toastify';//notifications package
import 'react-toastify/dist/ReactToastify.css';
import { createHttpLink, InMemoryCache, ApolloClient, ApolloProvider } from '@apollo/client';
import App from './App';

// Set Up Apollo Client

//link tp graphql server
const link = createHttpLink({
  uri: 'http://localhost:3000/graphql',
});
const cache = new InMemoryCache();

const client = new ApolloClient({
  link,
  cache,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
    <ToastContainer />
  </ApolloProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
