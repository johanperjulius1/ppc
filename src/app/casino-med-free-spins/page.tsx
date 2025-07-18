import React from 'react';
import { casinoMedFreeSpinsData } from '@/lib/categories-data';
import { marked } from 'marked';
import { casinosByFreeSpins } from '@/lib/casinos-data';
import Toplist from '@/components/toplist/toplist';

function FreeSpinsPage() {
  const htmlContent = marked(casinoMedFreeSpinsData.content);
  return (
    <div>
      <Toplist casinos ={casinosByFreeSpins}/>
      <h1>{casinoMedFreeSpinsData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}

export default FreeSpinsPage; 