import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from './store';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import NotFoundPage from './pages/NotFoundPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ProductListPage from './pages/ProductListPage';
import CartPage from './pages/CartPage';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navigation />
          <Container className="flex-grow-1 mt-4">
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/login" component={LoginPage} />
              <Route path="/category/:categoryId" component={ProductListPage} />
              <Route path="/product/:productId" component={ProductDetailPage} />
              <Route path="/cart" component={CartPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </Container>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;