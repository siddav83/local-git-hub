import React from 'react'

export default function SearchBar(props) {

    console.log(props)

  function handleInputText(e) {
    setSearchTerm(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserName([
      ...userName,
      {text: searchTerm, completed:false, id: Math.random() * 1000}
    ])
    setSearchTerm("")
  }

  return (
    <form>
        <label htmlFor='username'>Username</label>
        <input id="username" name="username" value={searchTerm} onChange={handleInputText} type="text" className="user-name-input" />
        <button role="button" onClick={handleSubmit} className="search-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
    </form>
  )
}
