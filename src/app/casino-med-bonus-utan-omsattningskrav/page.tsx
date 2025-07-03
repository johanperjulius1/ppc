import React from 'react';
import { casinoMedBonusUtanOmsattningskravData } from '@/lib/categories-data';
import { marked } from 'marked';

function CasinoSwishPage() {
  const htmlContent = marked(casinoMedBonusUtanOmsattningskravData.content);
  return (
    <div>
      <h1>{casinoMedBonusUtanOmsattningskravData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default CasinoSwishPage;