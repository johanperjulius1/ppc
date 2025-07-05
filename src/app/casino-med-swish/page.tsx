import React from 'react';
import { casinoMedSwishData } from '@/lib/categories-data';
import { marked } from 'marked';
import  Toplist  from "@/components/toplist/toplist"
import { sortBySwish } from '@/lib/toplist-utils';
import { casinos } from '@/lib/casinos-data';

function CasinoSwishPage() {
    const htmlContent = marked(casinoMedSwishData.content);
    const casinosBySwish = sortBySwish(casinos)
    
    return (
      <div>
        <Toplist casinos= {casinosBySwish} />
        <h1>{casinoMedSwishData.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    );
  }

export default CasinoSwishPage;