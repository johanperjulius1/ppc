import React from 'react';
import { casinoMedFreeSpinsUtanKravData } from '@/lib/categories-data';
import { marked } from 'marked';
import Toplist from '@/components/toplist/toplist'; 
import { casinosByFreeSpinsTurnover } from '@/lib/casinos-data';
function FreeSpinsUtanKravPage() {
  const htmlContent = marked(casinoMedFreeSpinsUtanKravData.content);

  return (
    <div>
      <Toplist casinos = {casinosByFreeSpinsTurnover}/>
      <h1>{casinoMedFreeSpinsUtanKravData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default FreeSpinsUtanKravPage; 