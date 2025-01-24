import React, { useState } from "react";
import { FaSearch, FaCog } from "react-icons/fa";
import "../styles/Toolbar.css";

function Toolbar({ onSearch }) {
  const [searchText, setSearchText] = useState("");

  const handleSearch = () => {
    onSearch(searchText);
  };

  return (
    <div className="toolbar">
      <h2>DoIt</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button onClick={handleSearch} className="search-button">
          <FaSearch />
        </button>
      </div>
      <FaCog className="icon" />
    </div>
  );
}

export default Toolbar;
