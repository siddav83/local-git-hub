
import React, { useState } from 'react';
import { Navbar } from './components';
import { FourOhFour, Home, Repo, User, UserRepos} from './pages'
import { Routes, Route} from 'react-router-dom';
import './styles/App.css';
import axios from 'axios'


function searchRepos() {

    axios({
        method: 'get',
        url: `https://api.github.com/users/siddav83`,
    }).then(res => {
        // setLoading(false);
        // setRepos(res.data);
        console.log(res.data)
    });
}
searchRepos()

function App() {
const [searchTerm, setSearchTerm] = useState([])

  return (
      <div id="app">
          <main>
              <Routes>
                  <Route path="/" element={<Home searchTerm={searchTerm} setSearchTerm={setSearchTerm}/>} />
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
