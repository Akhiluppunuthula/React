// import { useState, useEffect } from "react";

// const Body = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     try {
//       let res = await fetch("https://jsonplaceholder.typicode.com/posts");
//       let json = await res.json();
//       console.log("Fetched data:", json);

//       if (Array.isArray(json)) {
//         setData(json);
//       } else {
//         console.error("Data is not an array:", json);
//       }
//     } catch (error) {
//       console.error("Error fetching data:", error);
//     }
//   };

//   return (
//     <div>
//       <h1>User Data</h1>

//       {data.map((val) => (
//         <div key={val.id} className="border border-red-500 p-4 mb-4 bg-stone-400">
//           <h1 className="text-2xl text-red-400	">Usename:{val.userId}</h1>
//           {/* <p className="text-yellow-400	">Name : {val.name}</p>
//           <p>Email : {val.email}</p>
//           <p >Street : {val.address.street}</p> */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Body;


// import React from 'react'
import axios from "axios"
import { useEffect ,useState} from "react"

const Body = () => {
  const [data,setData]=useState([])
  useEffect(()=>{
axios.get("https://dummyjson.com/products").then(res=>{
  console.log(res.data.products)
  setData(res.data.products)
  // console.log("data is getting:",data);
})
  },[])
  return (
    <div className="w-full  grid grid-cols-4	">
      {data.map((item,id)=>{
        return(
          <div key={id} className=" p-3 m-3 border-solid border-2 border-sky-500 w-6/12 bg-red-400">
          <h1>{item.brand}</h1>
          <h1>{item.title}</h1>
          <h1>{item.rating}</h1>
          </div>
        )
      })}
    </div>
  )
}

export default Body
