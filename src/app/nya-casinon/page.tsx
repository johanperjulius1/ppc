import React from 'react'
import Toplist from '@/components/toplist/toplist'
import { casinosByNewCasino } from '@/lib/casinos-data'


function page() {
  return (
    <div>
      <Toplist casinos={casinosByNewCasino} />
    </div>
  )
}

export default page