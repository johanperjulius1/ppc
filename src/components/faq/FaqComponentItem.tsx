'use client'

import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FaqItem } from '@/types/types'
import styles from './faq.module.css'

function FaqComponentItem({ question, answer }: FaqItem) {
  const [isActive, setIsActive] = useState(false);
  
  const toggleFaq = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.faq} ${isActive ? styles.active : ''}`}>
      <h3 className={styles['faq-title']}>
        {question}
      </h3>
      <p className={styles['faq-text']}>{answer}</p>
      <button className={styles['faq-toggle']} onClick={toggleFaq}>
        <FontAwesomeIcon icon={faChevronDown} />
        <FontAwesomeIcon icon={faTimes} />
      </button>
    </div>
  )
}

export default FaqComponentItem 