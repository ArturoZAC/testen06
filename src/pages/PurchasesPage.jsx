import React, { useEffect } from 'react'
import useFetch from "../hooks/useFecth"
import getToken from '../utils/getToken';
import "./styles/purchasesPage.css"

const PurchasesPage = () => {

  const [purchases, getPurchases] = useFetch();

  useEffect(() => {
    const url = "https://e-commerce-api-v2.academlo.tech/api/v1/purchases"
    getPurchases(url, getToken())
  }, [])
  
  console.log(purchases)


  return (
    <div className='pur_container'>
      <h2 className='h2title'>Purchases</h2>
      {
        purchases?.map((pur) => (
          <div className='purch' key={pur.id}>
            <figure className='fig' >
              <img className='figimg' src={pur.product.images[0].url} alt="img_product" />
            </figure>
            <div className='title_pur'>
              <p className='p_pur'>
              {pur.product.title}
              </p>
              </div>
            <div className='cantof'>{pur.quantity}</div>
            <div className='priceoff'>$ {pur.quantity * +pur.product.price}</div>
          </div>
        ))
      }
    </div>
  )
}

export default PurchasesPage