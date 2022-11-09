import React, { useState } from 'react';
import { Navbar } from './components';
import { FourOhFour, Home, Repo, User, UserRepos} from './pages'
import { Routes, Route} from 'react-router-dom';
import './styles/App.css';
import axios from 'axios'
import SearchBar from './components/SearchBar';

function App() {
const [searchTerm, setSearchTerm] = useState("")
console.log(searchTerm)


function searchRepos(searchTerm) {
    console.log(searchTerm,"in fuction in app")
    axios({
        method: 'get',
        url: `https://api.github.com/users/${searchTerm}`,
    }).then(res => {
        console.log(res.data)
    });
}

// searchRepos()

  return (
      <div id="app">
          <main>
              <Routes>
                  <Route path="/" element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm} />} />
                  <Route path="/user" element={<User navbar={Navbar} />} />
                  <Route path="/user/repos" element={<UserRepos/>} />
                  <Route path="/user/repos/repo" element={<Repo/>} />
                  <Route path="/*" element={<FourOhFour/>} />
              </Routes>
          </main>
      </div>
  )
}

export default App;
