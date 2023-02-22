import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsCartEmpty } from '../../store/products-slice/selectors';
import CartButton from '../cart/cart/cart';
import Footer from '../footer/footer';
import Header from '../header/header';

import './app.css';

function App() {
  const isCartVisible = useSelector(selectIsCartEmpty);

  return (
    <>
      <Header />
      <main className="app" data-testid="app">
        <Outlet />
      </main>
      <Footer />
      {isCartVisible && <CartButton />}
    </>
  );
}

export default App;
