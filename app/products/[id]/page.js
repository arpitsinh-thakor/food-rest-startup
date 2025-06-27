
import ProductCardDetailed from '@/app/components/ProductCardDetailed'
import React from 'react'

import {feedData} from "@/app/utils/constants";

const ProductDetailedPage = async ({params}) => {

  const {id} = await params
  const product = feedData.find(item => item.id === parseInt(id))

  return (
    <div className="container mx-auto p-4">
      <ProductCardDetailed product={product} />
    </div> 
  )
}

export default ProductDetailedPage