import React from 'react';
import style from './Header.module.css';
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <>
      <header className={style.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton />
      </header>
      <div className={style['main-image']}>
        <img src={mealsImage} alt="Reat Meals" />
      </div>
    </>
  );
};

export default Header;
