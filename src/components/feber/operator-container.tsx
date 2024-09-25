import React from 'react'
import classes from './operator-container.module.css'
import BadgeBoard from '../badge-board'
import CtaContainer from './cta-container'
import PerksContainer from './perks-container'
import Rating from './rating'
import BonusContainer from './bonus-container'

import { Casino } from "@/types/types";

interface CasinoProps {
  casino: Casino
}


export default function OperatorContainer({ casino }: CasinoProps) {


    const { title, logo, rating, excerpt, link } = casino;
    const logoPath = `/images/logos/${title}/${logo}`;
  
    return (
        <main>

            <div className={classes["operator-container"]}>
                <div className={classes["logo-container"]}></div>
                <div className={classes["bonus-container"]}>
                    <BonusContainer/>
                </div>
                <div className= {classes["rating-container"]}>
                    <Rating rating={5}></Rating>
                </div>
                <div className={classes["badges-container"]}>
                    <BadgeBoard/>
                </div>
                <CtaContainer className={classes["cta-container"]}  />
                <PerksContainer className={classes["perks-container"]}></PerksContainer>

            </div>
            <div className={classes["terms-container"]}></div>
        </main>
    )
}