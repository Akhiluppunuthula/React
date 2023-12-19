import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const HeaderProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => setProduct(response.data))
      .catch(error => console.error("Error fetching product:", error));
  }, [id]);


  return (
    <div>
      <h2>Product Details</h2>
      <p>{product.title}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default HeaderProduct;