import React from 'react'
import { Link } from 'react-router-dom';

export default function SearchBar({userName, setUsername, searchTerm, setSearchTerm, setData}) {

function handleInputText(e) {
  setUsername(e.target.value);
}

  const handleSubmit = (e) => {
    e.preventDefault()
    setSearchTerm(userName)
    setUsername("")
  }

  return (
    <form onClick={handleSubmit}>
      <input 
        type="text"
        name="name"
        placeholder="Username"
        value={userName}
        onChange={handleInputText}
      />
     <Link to="/user"> <button>SEARCH</button></Link>
     
    </form>
  )
}
