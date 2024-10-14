import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Search = () => {
  const [keyword, setKeyword] = useState('');
  const navigate = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault(); // Prevent default form submission
    if (keyword.trim()) { // Check if the keyword is not just whitespace
      navigate(`/search?keyword=${encodeURIComponent(keyword)}`); // Use encodeURIComponent to safely encode the keyword
    }
  };

  return (
    <form onSubmit={searchHandler} className="input-group"> {/* Wrap in a form */}
      <input
        type="text"
        id="search_field"
        onChange={(e) => setKeyword(e.target.value)}
        className="form-control"
        placeholder="Enter Product Name ..."
      />
      <div className="input-group-append">
        <button
          id="search_btn"
          type="submit" // Make it a submit button
          className="btn">
          <i className="fa fa-search" aria-hidden="true"></i>
        </button>
      </div>
    </form>
  );
};

export default Search;
