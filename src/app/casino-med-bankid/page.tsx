import React from 'react';
import { casinoMedBankidData } from '@/lib/categories-data';
import { marked } from 'marked';
import { casinos } from '@/lib/casinos-data';
import { sortByBankId } from '@/lib/toplist-utils';
import Toplist from '@/components/toplist/toplist';

function CasinoBankidPage() {
  const casinosByBankId = sortByBankId(casinos)
  const htmlContent = marked(casinoMedBankidData.content);
  return (
    <div>
      <h1>{casinoMedBankidData.title}</h1>
      <Toplist casinos={casinosByBankId}></Toplist>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default CasinoBankidPage;