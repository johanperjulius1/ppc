import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons'


function FaqComponentItem() {
  return (
    <section>
      <h2>Vanliga fragor om </h2>
      <div className="faq-container">
        <div className="faq active">
          <h3 className="faq-title">

          </h3>
          <p className="faq-text">pasta bolognese is the best</p>
          <button className="faq-toggle">
            <FontAwesomeIcon icon={faChevronDown} />
            <FontAwesomeIcon icon={faTimes} />
          </button>
        </div>
      </div>
    </section>
  )
}

export default FaqComponentItem