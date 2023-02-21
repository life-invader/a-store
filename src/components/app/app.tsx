import { Outlet } from 'react-router-dom';
import CartButton from '../cart/cart/cart';
import Footer from '../footer/footer';
import Header from '../header/header';

import './app.css';

function App() {
  return (
    <>
      <Header />
      <main className="app" data-testid="app">
        <Outlet />
      </main>
      <Footer />
      <CartButton />
    </>
  );
}

export default App;
