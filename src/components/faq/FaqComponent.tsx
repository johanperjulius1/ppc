import React from 'react'
import { FaqBox } from "@/types/types"
import FaqComponentItem from './FaqComponentItem'
import styles from './faq.module.css'

function FaqComponent({ faqBox }: { faqBox: FaqBox }) {
  const faqItems = faqBox;
  
  return (
    <section>
      <h2>Vanliga frågor</h2>
      <div className={styles['faq-container']}>
        {Array.isArray(faqItems) && faqItems.map((item, index) => (
          <FaqComponentItem 
            key={index} 
            question={item.question} 
            answer={item.answer} 
          />
        ))}
      </div>
    </section>
  )
}

export default FaqComponent