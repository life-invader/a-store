import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { selectIsCartEmpty } from '../../store/products-slice/selectors';
import Cart from '../cart/cart/cart';
import Footer from '../footer/footer';
import Header from '../header/header';

import styles from './style.module.css';

function App() {
  const isCartVisible = useSelector(selectIsCartEmpty);

  return (
    <>
      <Header />
      <main className={styles.app} data-testid="app">
        <Outlet />
      </main>
      <Footer />
      {isCartVisible && <Cart />}
    </>
  );
}

export default App;
