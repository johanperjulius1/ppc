import React from 'react'
import classes from './operator-container.module.css'
import BadgeBoard from '../badge-board'
import CtaContainer from './cta-container'
import PerksContainer from './perks-container'
import Rating from './rating'
import BonusContainer from './bonus-container'

import { Casino } from "@/types/types";
import LogoContainer from './logo-container'

interface CasinoProps {
    casino: Casino
}


export default function OperatorContainer({ casino }: CasinoProps) {

    const { title, logoObject, rating, excerpt, link, positive1, positive2, turnoverBonus, turnoverFreespin, perks } = casino;

    return (
        <main>

            <div className={classes["operator-container"]}>
                <div className={classes["logo-container"]}><LogoContainer logoObject={logoObject}/></div>
                <div className={classes["bonus-container"]}>
                    <BonusContainer turnoverBonus={turnoverBonus} turnoverFreespin={turnoverFreespin} positive1={positive1} positive2={positive2} />
                </div>
                <div className={classes["rating-container"]}>
                    <Rating rating={5}></Rating>
                </div>
                <div className={classes["badges-container"]}>
                    <BadgeBoard />
                </div>
                <CtaContainer className={classes["cta-container"]} />
                <PerksContainer className={classes["perks-container"]} perks={perks}></PerksContainer>

            </div>
            <div className={classes["terms-container"]}></div>
        </main>
    )
}