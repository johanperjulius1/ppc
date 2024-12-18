import React, { useState } from "react";
import classes from "./toplist.module.css";
import ToplistItem from "./toplist-item";
import OperatorContainer from "./feber/operator-container"
import { getAllPostsData } from "../lib/toplist-utils";
import { Casino } from '../types/types'

export default function Toplist() {
  const dateDay = new Date().getDate().toString()
  const dateMonth = new Date().toLocaleString('default', { month: 'long' })
  const dateYear = new Date().getFullYear()
  
  
  const casinosData: Casino[] = getAllPostsData();
  return (
    <div>
      <h1>Topp 10 bästa online casinon</h1>
      <h2 className={classes.subtitle}>Bonusarna uppdaterades den {dateDay} {dateMonth} {dateYear} </h2>
      {/* {casinosData.map((casino) => (
        <ToplistItem key={casino.title} casino={casino} />
      ))} */}

      {casinosData.map((casino) => (
        <OperatorContainer key={casino.title} casino={casino} />
      ))}

    </div>
  );
}
