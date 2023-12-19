import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./Header";
import { Link } from "react-router-dom";

const HomeScreen = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios.get("https://dummyjson.com/products").then((res) => {
      console.log(res.data.products);
      setList(res.data.products);
    });
  }, []);
  return (
    <div >
     
      <Header />

     
      <div className="w-full flex flex-wrap justify-center rounded-md">
        {list.map((item, id) => {
          return (
            <div
              key={id}
              className=" p-4 m-3 border-solid border border-sky-500 w-[300px] bg-slate-400 rounded-md font-mono "
            >
              <h1 className="font-bold text-lg mb-2">Brand: {item.brand}</h1>
              <h1 className="font-semibold text-lg">Title: {item.title}</h1>
              <div>
                {" "}
                <img
                  className="w-full h-[200px]"
                  src={item.thumbnail} 
                  alt={`${item.name} Thumbnail`}
                />
              </div>
              <div className="font-bold text-lg my-1">{item.category}</div>
              <h1 className="text-lg font-medium">
                Rating:{" "}
                <span className="border-none pl-2 p-1 text-sm rounded-md bg-cyan-700 text-white ml-1">
                  {" "}
                  {item.rating}💥
                </span>
              </h1>
              <div><button><Link to={`/products/${item.id}`} >View Product</Link></button></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HomeScreen;
