import React from 'react';
import { casinoMedBankidData } from '@/lib/categories-data';
import { marked } from 'marked';

function CasinoBankidPage() {
  const htmlContent = marked(casinoMedBankidData.content);
  return (
    <div>
      <h1>{casinoMedBankidData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default CasinoBankidPage;