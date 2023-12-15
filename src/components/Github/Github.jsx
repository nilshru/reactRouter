import React, { useState } from 'react'
import { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';

function Github() {
    const data = useLoaderData()
    // const [data , setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/nilshru")
    //     .then((res)=>res.json())
    // .then((data)=>{
    //     console.log(data);
    //     setData(data)
    // })
    
    // }, [])
    
  return (
    <div className='p-4 m-4 text-3xl text-center text-white bg-gray-600'>Github UserID: {data.login}
    <div>Name : {data.name}</div>
    <div>Github Following: {data.following}</div>
    <img className='m-3 rounded-full border-spacing-1' src={data.avatar_url} alt="Git picture" width={300}  />
    </div>
  )
}

export default Github

export const githubInfoLoder =async ()=>{   //this is use for instant loding the data from api 
    const res = await fetch("https://api.github.com/users/nilshru")
    return res.json()
}