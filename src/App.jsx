import React, { useEffect, useState } from 'react'
import Card from './Component/Card'

export default function App() {
  
  const [products , setProducts] = useState(null)
  const [error , setError] = useState(false)
  const [loading  , setLoading] = useState(true)

  useEffect(()=>{
    getProducts()
  },[])

  async function getProducts() {
   try{
    const prod=await fetch('https://dummyjson.com/Products')
    const response=await prod.json()
    console.log(response)
    setProducts(response)
    setError(false)
   }
   catch(error){
    console.log(error)
    setError(true)
    setProducts(null)
   }
   finally{
    setLoading(false)
   }
   
  }
  return (
    <div>
        <h1 className='text-center '>Products</h1><hr/>
        {error && <h3>There is some Error</h3>}
        {loading && <h3>Loading.....</h3>}
        {products && (
        <div className="container">
          <div className="row g-3">
            {products.products.map((item) => (
              <div className="col-md-4" key={item.id}>
                <Card 
                  src={item.thumbnail}
                  title={item.title}
                  description={item.description}
                  brand={item.brand}
                  price={item.price}
                  warranty={item.warrantyInformation}
                />
        </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}