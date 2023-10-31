import { Product } from '@prisma/client'

import React from 'react'

import Card from './Card'

// -------------------------------------
const Cards = ({data}: { data: Product[] }) => {
  return (
    <div>
        {
            data.map(item => {
                return (
                    <Card key={item.id} data={item}/>
                )
            })
        }
    </div>
  )
}

export default Cards