import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Comp.css'

function Home() {
   let [com,setCom]=useState()
   let [gtm,setGtm]=useState(false)
   useEffect(()=>{
    window.addEventListener('scroll',()=>{

      if (scrollY> 200)
        {
          setCom ('hide')
          setGtm('opl')
        }
        else {
          setCom()
          setGtm('')
        }
    })
   })
   var nkc=()=>{
    setCom (!com)
   }
 
    let [data,setData]=useState([])
    let [active,setActive]=useState(true)
    var abc=()=>{
      setActive(!active)
    }

    const [quantity,SetQuantity]=useState(1)

    const handleincrement=()=>{
      if(quantity< 10)
        {
          SetQuantity(prevCount => prevCount+1)
        }
    }

    const handledecrement=()=>{
      if (quantity> 1)
        {
          SetQuantity( prevCount => prevCount-1)
        }
    }
    useEffect(()=>{
   fetch('https://dummyjson.com/products').then((a)=> a.json()).then((b)=> setData(b.products))
    },[])
  return (
    <>
    <section>
        <div className="container">
            <div className="row">
                 {data.map((a)=>(
                           <div className="col-lg-4">
                            <img src={a.thumbnail} alt="" />
                            {a.title}
                        <Link to={`/details/${a.id}/`}> <button>Readmore</button></Link>
                        <button onClick={handleincrement}>+</button>
                         {quantity}
                        <button onClick={handledecrement}>-</button>
                        <h1 className={active ? "":"aa"}>toggle</h1>
                        <button onClick={abc}>vlivk</button>

                        
                           </div>

                 ))}
               
            </div>
        </div>

        <div className={com ? "hide":""}>
          op
        </div>
       <div className={gtm ? "opl":""}>
   
       </div>
    </section>
    </>
  )
}

export default Home
