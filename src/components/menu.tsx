"use client"
import React, { useState } from 'react';
import styles from './menu.module.css';
import Link from 'next/link';

function Menu () {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-inner']}>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          {isOpen ? '✖' : '☰'}
        </div>
        <div className={styles.logo}>CASINOSISTERS</div>
        <ul className={`${styles.menuList} ${isOpen ? styles.showMenu : ''}`}>
          <li><Link href="/alla-casinon">Alla Casinon</Link></li>
          <li><Link href="/nya-casinon">Nya Casinon</Link></li>
          <li>Casino Bonus</li>
          <li>Free Spins</li>
          <li>CasinoTempen 2024</li>
        </ul>
      </div>
    </nav>
  );
};
export default Menu; 