'use client'
import React, { useState } from 'react'
import styles from './menu.module.css';
import Link from 'next/link';

function Menu() {

  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <header className={styles.header}>
      <div className={styles.menuIcon} onClick={toggleMenu}>
        {isOpen ? '✖' : '☰'}
      </div>
      <Link href="/" className={styles.logo}>
        Slotsa.se
      </Link>
      <nav className={`${styles['nav-container']} ${!isOpen ? styles.hidden : ''}`}>
        <div className={styles['link-container']}>
          <div className={styles['link-div']}><Link href="/nya-casinon">Nya casinon</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-bonus">Casino med bonus</Link></div>
          <div className={styles['link-div']}>
            <Link href="/casino-med-bonus-utan-omsattningskrav">Bonus utan omsättningskrav</Link>
          </div>
          <div className={styles['link-div']}><Link href="/casino-med-free-spins">Free spins</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-free-spins-utan-omsattningskrav">Free spins utan omsättningskrav</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-bankid">Casino med BankId</Link></div>
          <div className={styles['link-div']}><Link href="/casino-med-swish">Casino med Swish</Link></div>
        </div>
      </nav>
    </header>
  )
}

export default Menu



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