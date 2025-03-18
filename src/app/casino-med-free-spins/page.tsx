import React from 'react';
import { casinoMedFreeSpinsData } from '@/lib/categories-data';
import { marked } from 'marked';

function FreeSpinsPage() {
  const htmlContent = marked(casinoMedFreeSpinsData.content);
  return (
    <div>
      <h1>{casinoMedFreeSpinsData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default FreeSpinsPage; 