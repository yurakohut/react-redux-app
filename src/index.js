import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./components/app/app";
import ErrorBoundry from "./components/error-boundry/error-boundry";
import BookstoreService from "./services/bookstore-service";
import { BookStoreServicePropvider } from "./components/bookstore-service-context/bookstore-service-context";

import store from "./store";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookStoreServicePropvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookStoreServicePropvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById('root')
);
