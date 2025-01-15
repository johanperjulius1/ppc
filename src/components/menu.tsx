"use client"
import React, { useState } from 'react';
import styles from './menu.module.css';

function Menu () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <div className={styles.logo}>CASINOSISTERS</div>
      <ul className={`${styles.menuList} ${isOpen ? styles.showMenu : ''}`}>
        <li>Casinon</li>
        <li>Nya Casinon</li>
        <li>Casino Bonus</li>
        <li>Free Spins</li>
        <li>CasinoTempen 2024</li>
      </ul>
    </nav>
  );
};
export default Menu; 