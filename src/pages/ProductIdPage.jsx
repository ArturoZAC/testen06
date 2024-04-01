import React, { useEffect } from 'react'
import InfoProduct from '../components/productIdPage/InfoProduct'
import useFecth from '../hooks/useFecth';
import { useParams } from 'react-router-dom';
import SimilarItems from '../components/productIdPage/SimilarItems';
import SliderImagenes from '../components/productIdPage/SliderImagenes';
import "./styles/productidPage.css"

const ProductIdPage = () => {

  const [productId, getProductId] = useFecth();
  const param = useParams()

  
  useEffect(() => {
    const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`
    getProductId(url)
  }, [param])
  
  // console.log(productId)


  return (
    <div className='sepaid'>
      <div className='div_idprod'>
      <SliderImagenes 
        images={productId?.images}
      />
      <InfoProduct 
        productId={productId}
      />
      </div>
      <SimilarItems
        categoryId={productId?.categoryId}
        prodId={productId?.id}
      />
    </div>
  )
}

export default ProductIdPage