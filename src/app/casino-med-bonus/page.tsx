import React from 'react';
import { casinoMedBonusData } from '@/lib/categories-data';
import { marked } from 'marked';
import Toplist from '@/components/toplist/toplist';
import { casinos } from '@/lib/casinos-data';
import { sortByBonusAmount } from '@/lib/toplist-utils';

function CasinoBonusPage() {
  const htmlContent = marked(casinoMedBonusData.content);
  const casinosByBonus = sortByBonusAmount(casinos);

  return (
    <div>
      <Toplist
        casinos={casinosByBonus}
        subtitle="Casinon sorterade efter högsta bonusbelopp"
      />
      <h1>{casinoMedBonusData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default CasinoBonusPage;