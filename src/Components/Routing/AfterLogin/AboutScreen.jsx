import { useEffect, useState } from "react";
import Header from "./Header";
import axios from "axios";
import { Link } from "react-router-dom";

const AboutScreen = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setList(response.data);
        console.log(response.data);
      });
  }, []);

  return (
    <div >
      <Header />
      <div  className="w-full flex flex-wrap justify-center rounded-md">
        {list.map((cart) => (
          <div key={cart.id}  className=" p-4 m-3 border-solid border border-sky-500 w-[300px] bg-slate-400 rounded-md font-mono ">
            <div>Cart ID: {cart.id}</div>
            <div className="w-full h-[40px] leading-none">Total: {cart.title}</div>
            <div className="my-1">Discounted Total: {cart.discountedTotal}</div>
            <div className="my-1">Total Products: {cart.totalProducts}</div>
            <div>Total Quantity: {cart.totalQuantity}</div>
            <div className="my-1"><img src={cart.image} alt={cart.title} className="w-full h-[250px] rounded-md"/></div>
            <div><button><Link to={`/product/${cart.id}`} >View Product</Link></button></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutScreen;
