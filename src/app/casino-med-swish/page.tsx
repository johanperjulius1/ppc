import React from 'react';
import { casinoMedSwishData } from '@/lib/categories-data';
import { marked } from 'marked';

function CasinoSwishPage() {
  const htmlContent = marked(casinoMedSwishData.content);
  return (
    <div>
      <h1>{casinoMedSwishData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default CasinoSwishPage;