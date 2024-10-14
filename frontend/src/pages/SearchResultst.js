// SearchResults.js
import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard'; 

const SearchResults = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const searchParams = new URLSearchParams(window.location.search);
  const keyword = searchParams.get('keyword'); // Get the keyword from the URL

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await fetch(`http://localhost:5000/api/v1/products?keyword=${encodeURIComponent(keyword)}`);
        const data = await response.json();

        if (data.success) {
          setProducts(data.products);
        } else {
          setError('Failed to fetch products');
        }
      } catch (err) {
        setError('An error occurred while fetching products');
      } finally {
        setLoading(false);
      }
    };

    if (keyword) {
      fetchProducts();
    }
  }, [keyword]); // Run effect when keyword changes

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div className="row">
      {products.length > 0 ? (
        products.map(product => (
          <ProductCard 
            key={product._id}
            name={product.name}
            price={product.price}
            image={product.images[0].image} // Use the first image
            description={product.description}
            rating={product.ratings} // Use ratings directly
            product={product} // Pass the entire product object if needed
          />
        ))
      ) : (
        <p>No products found for "{keyword}"</p>
      )}
    </div>
  );
};

export default SearchResults;
