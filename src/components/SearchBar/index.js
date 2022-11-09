import React from 'react'

export default function SearchBar({userName, setUserName, inputText, setInputText}) {

  function handleInputText(e) {
    setInputText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setUserName([
      ...userName,
      {text: inputText, completed:false, id: Math.random() * 1000}
    ])
    setInputText('')
  }

  return (
    <form>
        <label htmlFor='username'>Username</label>
        <input id="username" name="username" value={inputText} onChange={handleInputText} type="text" className="user-name-input" />
        <button role="button" onClick={handleSubmit} className="search-button" type="submit">
            <i className="fas fa-plus-square"></i>
        </button>
    </form>
  )
}
