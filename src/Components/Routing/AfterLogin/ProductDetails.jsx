import  { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products/${id}`)
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

export default ProductDetails;
