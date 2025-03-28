import React from 'react'
import { FaqBox } from "@/types/types"
import FaqComponentItem from './FaqCompononentItem'

function FaqComponent({ FaqBox }: { FaqBox: FaqBox }) {
  console.log(FaqBox)
    return (
      <FaqComponentItem/>
    )
  }

export default FaqComponent