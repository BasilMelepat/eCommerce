import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Container } from 'react-bootstrap';
import store from './store';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import ProductListPage from './pages/ProductListPage';
import ProductDetailPage from './pages/ProductDetailPage';
import CartPage from './pages/CartPage';
import PageNotFound from './pages/PageNotFound';

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="d-flex flex-column min-vh-100">
          <Navigation />
          <Container className="flex-grow-1 mt-4">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/category/:categoryId" element={<ProductListPage />} />
              <Route path="/product/:productId" element={<ProductDetailPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Container>
          <Footer />
        </div>
      </Router>
    </Provider>
  );
};

export default App;