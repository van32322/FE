import React from "react";
import "./SearchBar.scss";

const SearchBar = () => {
  return (
    <div className="search-container">
      <input type="text" placeholder="Bạn muốn tìm gì ?" className="search-input" />
      <button className="search-button">Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;