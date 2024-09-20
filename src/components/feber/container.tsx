import React from 'react'
import classes from './container.module.css'
import BadgeBoard from '../badge-board'
import CtaContainer from './cta-container'

export default function OperatorContainer() {
    return (
        <main>

            <div className={classes["operator-container"]}>
                <div className={classes["logo-container"]}></div>
                <div className={classes["badges-container"]}>
                    <BadgeBoard/>
                </div>
                <div className={classes["bonus-container"]}></div>
                <div className={classes["perks-container"]}></div>
                <CtaContainer rating={5} className={classes["cta-container"]}/>
              
  
            </div>
            <div className={classes["terms-container"]}></div>
        </main>
    )
}