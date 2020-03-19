import React from 'react'


function SearchBar(props) {
    const { searchValue, handleInputChange, handleSearchClick, handleKeyPress } = props
    return (
        <div className='searchBar-container' onKeyUp={handleKeyPress}>
            <input className='searchBar-input' value={searchValue} onChange={handleInputChange} />
            <button className='searchBar-button' onClick={handleSearchClick}>Search</button>
        </div>
    )
}

export default SearchBar