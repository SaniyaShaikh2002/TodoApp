import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import TaskInput from "./components/TaskInput";
import TaskList from "./components/TaskList";
import './styles/App.css';

function App() {
  const [category, setCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const handleCategoryChange = (newCategory) => {
    setCategory(newCategory);
    console.log(`Category selected: ${newCategory}`);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
    console.log(`Search query: ${query}`);
  };

  return (
    <div className="app">
      <Sidebar onSelectCategory={handleCategoryChange} />
      <div className="main">
        <Toolbar onSearch={handleSearch} />
        <TaskInput />
        <TaskList category={category} searchQuery={searchQuery} />
      </div>
    </div>
  );
}

export default App;
