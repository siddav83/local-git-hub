import React from 'react'

import { Link } from 'react-router-dom';
import './style.css'
// import octcat from './octcat.png'
import github from './github.svg'
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
    <div className="bar">
    <i><img className="icon" src={github} alt="gitcat" /></i>
    <div className="search-container">
      <form id="search-form" onClick={handleSubmit}>
        <input 
        type="text"
        name="name"
        placeholder="Username"
        value={userName}
        onChange={handleInputText}
        className="input"
      />
     <Link to="/user"><button>SEARCH</button></Link>
     
    </form>
    </div>
    </div>
  )
}
