import React from 'react'
import { Link } from 'react-router-dom';

const ProductCard = ({ name, price, image, description, rating, product }) => {
  // Function to generate star ratings dynamically
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); // Number of full stars
    const halfStar = rating % 1 !== 0; // If there's a half star
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // Remaining empty stars

    const stars = [];

    // Push full stars
    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fa fa-star"></i>);
    }

    // Push half star
    if (halfStar) {
      stars.push(<i key="half" className="fa fa-star-half-o"></i>);
    }

    // Push empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="fa fa-star-o"></i>);
    }

    return stars;
  };

  return (
    <div className="col-sm-12 col-md-6 col-lg-3 my-3">
      <div className="card p-3 rounded">
        <img className="card-img-top mx-auto" src={image} alt={name} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">
            <Link to= {`/product/${product._id}`}>{name}</Link>
          </h5>
          <div className="ratings mt-auto">
            {renderStars(rating)} {/* Render the stars based on the rating */}
          </div>
          <p className="card-text">${price}</p>
          <Link to= {`/product/${product._id}`} id="view_btn" className="btn btn-block">View Details</Link>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
