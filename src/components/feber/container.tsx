'use client'

import React from 'react'
import classes from './container.module.css'
import BadgeBoard from '../badge-board'
import CtaContainer from './cta-container'
import PerksContainer from './perks-container'

export default function OperatorContainer() {
    return (
        <main>

            <div className={classes["operator-container"]}>
                <div className={classes["logo-container"]}></div>
                <CtaContainer className={classes["cta-container"]} rating={5} />
                <div className={classes["badges-container"]}>
                    <BadgeBoard />
                </div>
                <div className={classes["bonus-container"]}></div>
                <PerksContainer className={classes["perks-container"]}></PerksContainer>

            </div>
            <div className={classes["terms-container"]}></div>
        </main>
    )
}