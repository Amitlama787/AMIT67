import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    let {did}=useParams()
    let [data,setData]=useState([])
    useEffect(()=>{
   fetch(`https://dummyjson.com/products/${did}`).then((a)=>a.json()).then((b)=> setData(b))
    },[])
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
              <div className="col-lg-4">
                {data.title}
                <img src={data.thumbnail} alt="" />
              </div>
            </div>
        </div>
    </section>
      
    </>
  )
}

export default Details
