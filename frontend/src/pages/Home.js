import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import {Link} from 'react-router-dom'

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + '/products')
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch products");
        }
        return res.json();
      })
      .then((res) => setProducts(res.products))  // Make sure to access the "products" array correctly
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {products.map((product) => (
            <ProductCard
              key={product._id}
              name={product.name}
              price={product.price}
              image={product.images[0].image}
              description={product.description}
              rating={product.ratings}
              product={product}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
