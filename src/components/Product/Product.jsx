/* eslint-disable jsx-a11y/anchor-is-valid */
import { useState, useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import ProductTile from "./../ProductTile/ProductTile";
import { db } from "./../../firebase.config";



const Product = () => {
  const [products, setProducts] = useState([]);
  const [currentTab, setCurrentTab] = useState('સન પ્લાય')

  useEffect(() => {
    const unSub = onSnapshot(collection(db, "products"), (col) => {
      let ps = col.docs.map((doc) => doc.data());
      setProducts(ps);
    });
    return unSub;
  }, []);

  const Tab = ({ tabName }) => {
    return <a className={currentTab === tabName ? "is-active mx-2" : 'mx-2'} onClick={() => setCurrentTab(tabName)}> {tabName} </a>
  }

  const tabsArr = [
    'સન પ્લાય',
    'સ્ક્રિન ડોર',
    'કોરી પ્લાય',
    'એલ્યુમિનિયમ ડોર',
    'એલ્યુમિનિયમ બારી'
  ]


  return (
    <div className="my-5">
      <nav class="panel" style={{
        boxShadow:'none',
      }}>
        <p class="panel-tabs p-5">
          {tabsArr.map((t, idx) => <Tab tabName={t} />) }
        </p>
      </nav>
      <div class="panel-block flex-container">
        {products.filter((product) => product.cat === currentTab).map((product) => (
          <ProductTile product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
