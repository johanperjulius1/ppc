import React from 'react'
import Toplist from '@/components/toplist/toplist'
import { casinosByNewCasino } from '@/lib/casinos-data'
import { marked } from 'marked';
import { nyaCasinonData } from '@/lib/categories-data';


function page() {
  const htmlContent = marked(nyaCasinonData.content);
  return (
    <div>
      <h1>{nyaCasinonData.title}</h1>
      <Toplist casinos={casinosByNewCasino} />
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  )
}

export default page

