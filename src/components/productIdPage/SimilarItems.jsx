import React, { useEffect } from 'react'
import useFecth from '../../hooks/useFecth'
import ProductCard from '../homePage/ProductCard'
import "./styles/similarItems.css"

const SimilarItems = ({categoryId,prodId}) => {

    // console.log(categoryId)  

    const [productByCategory, getProductByCategory] = useFecth()

    useEffect(() => {
        if(categoryId){
            const url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`;
            getProductByCategory(url)
        }
    }, [categoryId])
    
    // console.log(productByCategory)
    // console.log(prodId)

    const cbfilter = (prod) => {
        return prod.id !== +prodId
    }
 

  return (
    <section className='sim_section'>
        <h2 className='sim_h2'>Discover similar items</h2>
        <div className='productsContainer'>
            <div className='dca'>
            {
                productByCategory?.filter(cbfilter).map(prod => (
                    <ProductCard 
                    key={prod.id}
                    prod={prod}                    
                    />
                ))
            }
            </div>
        </div>
    </section>
  )
}

export default SimilarItems