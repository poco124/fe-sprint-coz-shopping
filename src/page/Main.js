import { useEffect, useState} from 'react'
import Header from '../component/Header'
import Footer from '../component/Footer'
import Product from '../component/Product/Product';

function Main() {
  const [products, setProducts] = useState([]);
  useState(()=>{
    fetch('http://cozshopping.codestates-seb.link/api/v1/products?count=10')
    .then(res =>res.json())
    .then(json => setProducts(json))
  })
  return (
    <section>
     <Header></Header>
     {products.map((product)=>{
      return <Product key={product.id} title={product.title} image_url={product.image_url}></Product>
     })}
     <Product></Product>
     <Footer></Footer>
    </section>
   
  );
}

export default Main;
