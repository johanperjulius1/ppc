// import React from 'react';

// function CasinoBonus() {
//   return (
//     <div>Casino Bonus</div>
//   );
// }

// export default CasinoBonus; 

import React from 'react';
import { casinoBonusData } from '@/lib/categories-data';

function CasinoBonusPage() {
  return (
    <div>
      <h1>{casinoBonusData.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: casinoBonusData.content }} />
    </div>
  );
}

export default CasinoBonusPage;