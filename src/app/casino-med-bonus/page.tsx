import React from 'react';
import { casinoMedBonusData } from '@/lib/categories-data';
import { marked } from 'marked';

function CasinoBonusPage() {
  const htmlContent = marked(casinoMedBonusData.content);
  return (
    <div>
      <h1>{casinoMedBonusData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default CasinoBonusPage;