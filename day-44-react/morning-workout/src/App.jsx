import React, { useState } from 'react';
import './App.css';
import SearchBar from './components/SearchBar'
import SearchResults from './components/SearchResults'

function App() {

  const [searchValue, setSearchValue] = useState('')
  const [currentOffset, setCurrentOffset] = useState(0)
  const [searchResults, setSearchResults] = useState(0)

  const url = 'https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&origin=*&srsearch='
  const pageOffsetPrefix = '&sroffset='
  const pageUrl = `${url}${searchValue}${pageOffsetPrefix}${currentOffset}`

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  const handleSearchClick = () => {
    getSearchResults()
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') getSearchResults()
  }

  const getSearchResults = async () => {
    console.log('Getting Search Results')

    try {
      const res = await fetch(pageUrl);
      const data = await res.json();
      setSearchResults(data.query.search);
      console.log(searchResults);
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="App">
      <SearchBar
        searchValue={searchValue}
        handleInputChange={handleInputChange}
        handleSearchClick={handleSearchClick}
        handleKeyPress={handleKeyPress}
      />
      <SearchResults results={searchResults} />
    </div>
  );
}

export default App;
