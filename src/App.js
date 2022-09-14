import React, { useState } from 'react';
import Cart from './components/Cart/Cart';
import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';

const App = () => {
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCarthHandler = () => {
    setCartIsShown(true);
  };

  const hideCartHandler = () => {
    setCartIsShown(false);
  };

  return (
    <>
      {cartIsShown && <Cart onClose={hideCartHandler} />}
      <Header onShowCart={showCarthHandler} />
      <main>
        <Meals />
      </main>
    </>
  );
};

export default App;
