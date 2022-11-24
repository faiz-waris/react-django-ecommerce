import React from 'react'
import SearchBar from '../search-bar/SearchBar'
import './NavBar.css'
import { FaShoppingCart } from 'react-icons/fa'
import { MdAccountCircle } from 'react-icons/md'

function NavBar() {
    return (
        <nav className="nav-bar">
          <div className="nav-title">
            <h1>
              Apna
              <font color="#f2a20c">Sneakers</font>
            </h1>
          </div>
          <div className="search-bar">
            <SearchBar />
          </div>
        <div className="nav-bar-pages">
          <div className="pages">Home</div>
          <div className="line" />

          <div className="pages">New Arrivels</div>
          <div className="line" />

          <div className="pages">Women</div>
          <div className="line" />

          <div className="pages">Men</div>
          <div className="line" />

          <div className="pages">Kids</div>
          <div className="line" />

          <div className="pages">Contact</div>
          <div className="line" />

          <div className="pages">Our Story</div>
        </div>
        <div className="nav-bar-icon">
          <div className="myicons">
            <FaShoppingCart size = '30px' />
          </div>

          <div className="myicons">
            <MdAccountCircle size ="30px" />
          </div>
        </div>

      </nav>
    )
}

export default NavBar
