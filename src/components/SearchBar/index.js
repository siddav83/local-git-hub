import React from 'react'

export default function SearchBar({searchTerm, setSearchTerm}) {

function handleInputText(e) {
  setSearchTerm(e.target.value);
}

function handleSubmit(e) {
  e.preventDefault();
}

  return (
    <form>
      <input 
      type="text" 
      onChange={handleInputText}
      value={searchTerm}
      />
      <button onClick={handleSubmit}>SEARCH</button>
    </form>
    // <form>
    //     <label htmlFor='username'>Username</label>
    //       <input id="username" 
    //       value={searchTerm} 
    //       onChange={handleInputText} 
    //       type="text" 
    //       className="user-name-input" 
    //     />
    //     <button role="button" onClick={handleSubmit} className="search-button" type="submit">
    //         <i className="fas fa-plus-square"></i>Submit</button>
    // </form>
  )
}
