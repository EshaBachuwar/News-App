import React, { useEffect, useState } from 'react'
import axios from "axios"
import { Link } from 'react-router-dom'


const FetchData = ({cat}) => {
    const [data, setData] = useState("")
    const fetchData=async()=>{
        await axios.get(
            cat?`https://newsapi.org/v2/top-headlines?country=in&category=${cat}&apiKey=ef127643e6a741619c480a99a587e0b0`:
            'https://newsapi.org/v2/top-headlines?country=in&apiKey=ef127643e6a741619c480a99a587e0b0'
            ).then((res)=>setData(res.data.articles))

    }
    useEffect(() => {
      fetchData();
    }, [cat])
    
  return (
    <div className='container my-4' >
        <h3>TOP HEADLINES</h3>
        <div className='container d-flex justify-content-center align-items-center flex-row flex-wrap my-3' style={{minHeight:"50vh",width:"100vw"}}>{data ? 
        data.map((item,index)=><>
        <div className='container my-3 p-4' style={{width:"400px",boxShadow:"2px 2px 10px silver",borderRadius:"10px" , height:"600px"}}>
        <h5 className='my-2'>{item.title}</h5>
        <div className='d-flex justify-content-center align-items-center'>
        <img src={item.urlToImage} alt="image not found" className='img-fluid ' style={{width:"100%",height:"300px",objectFit:"cover"}}/>
        </div>
        <p className='my-1'>{item.description}</p>
        <a href={item.url} target="blank">View More</a>
        </div>
        </>)
        :<button class="btn btn-primary" type="button" disabled>
        <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        <span class="sr-only">Loading...</span>
      </button>}</div>
    </div>
  )
}

export default FetchData