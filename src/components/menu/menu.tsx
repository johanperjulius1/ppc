import React from 'react'
import styles from './menu.module.css';
import Link from 'next/link';

function menu() {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Slotsa.se</div>
      <nav className={styles['nav-container']}>
        <div className={styles['link-container']}>
          {/* <div className={styles['link-div']}><Link href="/alla-casinon">Alla Casinon</Link></div> */}
          <div className={styles['link-div']}><Link href="/nya-casinon">Nya casinon</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-bonus">Casino med bonus</Link></div>
          <div className={styles['link-div']}>
            <Link href="/casino-med-bonus-utan-omsattningskrav">Bonus utan omsättningskrav</Link>

            {/* <div className={styles['nav-button-div']}>
              <button className={styles['nav-button']}>Casino
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  focusable="false"
                  width="16px"
                  height="8px"
                  fill="white"
                  stroke="white"
                  stroke-width="1"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 8 20"
                >
                  <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z"></path>
                </svg>
              </button>
            </div> */}
          </div>
          <div className={styles['link-div']}><Link href="/casino-med-free-spins">Free spins</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-free-spins-utan-omsattningskrav">Free spins utan omsättningskrav</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-bankid">Casino med bankId</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-swish">Casino med swish</Link></div>
        </div>
      </nav>
    </header>
  )
}

export default menu



// "use client"
// import React, { useState } from 'react';
// import styles from './menu.module.css';
// import Link from 'next/link';

// function Menu () {
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   return (
//     <nav className={styles.navbar}>
//       <div className={styles['navbar-inner']}>
//         <div className={styles.menuIcon} onClick={toggleMenu}>
//           {isOpen ? '✖' : '☰'}
//         </div>
//         <div className={styles.logo}>Slotsa</div>
//         <ul className={`${styles.menuList} ${isOpen ? styles.showMenu : ''}`}>
//           <li><Link href="/alla-casinon">Alla Casinon</Link></li>
//           <li><Link href="/nya-casinon">Nya Casinon</Link></li>
//           <li><Link href="/casino-med-bonus">Casino Bonus</Link></li>
//           <li><Link href="/casino-med-free-spins">Free Spins</Link></li>
//           <li><Link href="/casino-med-bankid">Casino Med BankID</Link></li>
//           <li><Link href="/casino-med-swish">Casino Med Swish</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };
// export default Menu; 