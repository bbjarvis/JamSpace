import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// Import Custom Components
import AdListings from './components/ad-listings';
import Login from './components/login';
import Ad from './components/ad';
import CreateListing from './components/create-listing';

function App() {
  const [user, setUser] = useState('');

  async function login(user = null) {
    setUser(user);
  }

  async function logout() {
    setUser(null);
  }

  return (
    <div>
      <nav className='navbar sticky-top navbar-expand navbar-dark bg-dark'>
        <div className='container-fluid'>
          <div className='navbar-brand'>JamSpace</div>
          <div className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={'/'} className='nav-link'>
                Listings
              </Link>
            </li>
            <li className='nav-item'>
              <Link to={'/listings/new'} className='nav-link'>
                New Listing
              </Link>
            </li>
            <li className='nav-item'>
              {user ? (
                <a
                  onClick={logout}
                  href='/login'
                  className='nav-link'
                  style={{ cursor: 'pointer' }}
                >
                  Logout {user.name}
                </a>
              ) : (
                <Link to={'/login'} className='nav-link'>
                  Login
                </Link>
              )}
            </li>
          </div>
        </div>
      </nav>

      <div className='container mt-3'>
        <Routes>
          <Route path={'/'} element={<AdListings user={user} />} />
          <Route path='/listings/new' element={<CreateListing user={user} />} />
          <Route path='/listings/:id' element={<Ad user={user} />} />
          <Route path='/login' element={<Login login={login} />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
