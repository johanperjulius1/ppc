import React from 'react';
import { casinoMedBonusUtanOmsattningskravData } from '@/lib/categories-data';
import { marked } from 'marked';
import Toplist from "@/components/toplist/toplist"
import { sortByBonusTurnover } from '@/lib/toplist-utils';
import { casinos } from '@/lib/casinos-data';

function CasinoSwishPage() {
  const casinosByTurnover = sortByBonusTurnover(casinos)
  const htmlContent = marked(casinoMedBonusUtanOmsattningskravData.content);
  
  return (
    <div>
      <Toplist casinos={casinosByTurnover} />
      <h1>{casinoMedBonusUtanOmsattningskravData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default CasinoSwishPage;