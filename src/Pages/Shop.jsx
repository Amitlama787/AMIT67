import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Shop() {

    let {cid}=useParams()
    let [data,setData]=useState([cid])
    useEffect(()=>{
    fetch(`https://dummyjson.com/products/category/${cid}`).then((a)=>a.json()).then((b)=> setData(b.products))
    },[cid])
  return (
    <>
    <section>
        <div className="container">
            <div className="row">

                {data.map((a)=>(
                  <div className="col-lg-4">
                      {a.title}
                      <img src={a.thumbnail} alt="" />
                  </div>
                ))}
               
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Shop
