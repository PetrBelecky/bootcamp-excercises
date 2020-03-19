import React from 'react'

function SearchResults(props) {

    const { results } = props
    return (
        <div className='searchResults-container'>
            {/* {results.map((obj) => {
                return obj.title
            })} */}
            {/* {console.log(typeof (results))} */}
        </div>
    )
}

export default SearchResults