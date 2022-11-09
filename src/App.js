import React from 'react';
import { FourOhFour, Home, Repo, User, UserRepos} from './pages'
import { Routes, Route} from 'react-router-dom';
import './styles/App.css';

function App() {
  return (
      <div id="app">
          <main>
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/user" element={<User />} />
                  <Route path="/user/repos" element={<UserRepos/>} />
                  <Route path="/user/repos/repo" element={<Repo/>} />
                  <Route path="/*" element={<FourOhFour/>} />
              </Routes>
          </main>
      </div>
  )
}

export default App;
