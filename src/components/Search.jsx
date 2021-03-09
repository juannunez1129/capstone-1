import React from 'react'

const Search = ({search, setSearch}) => {

    const handleChange = val => 
        {
            setSearch(val)
        }

    return (
        <div className="filter-main"> 
            <form
                onSubmit = { event => {
                    event.preventDefault(); 
                    setSearch('')
                }}
            >
                <input className="searchbar" 
                value = {search}
                placeholder='Search by Make'
                type='text'
                onChange={e => handleChange(e.target.value)}
                >
                </input>
                <input className="searchbar"
                type='submit' 
                value='Search' 
                />
            </form>
        </div>
    )   
}

export default Search;

