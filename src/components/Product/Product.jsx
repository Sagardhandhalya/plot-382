import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import ProductTile from "./../ProductTile/ProductTile";
import { db } from "./../../firebase.config";
const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const unSub = onSnapshot(collection(db, "products"), (col) => {
      let ps = col.docs.map((doc) => doc.data());
      setProducts(ps);
    });
    return unSub;
  }, []);
  return (
    <div className="columns my-5">
      {products.map((product) => (
        <ProductTile product={product} />
      ))}
    </div>
  );
};

export default Product;
