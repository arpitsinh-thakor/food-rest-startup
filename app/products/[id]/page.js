import React from 'react'

import { feedData } from '@/app/utils/constants';
import ProductCardDetailed from '@/app/components/ProductCardDetailed';

const page = ({params}) => {
    
    const {id} = params;
   
    const product = feedData.find(item => item.id === parseInt(id));
    if (!product) {
        return <div className="container mx-auto p-4">Product not found</div>;
    }

  return (
    <div className="container mx-auto p-4">
        <ProductCardDetailed product={product} />
    </div>
  )
}

export default page