import React from 'react';
import { Link } from 'react-router-dom'; 

export default function HomeScreen() {
  return (
    <div className="home-screen">
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/Authentication" className="nav-link">Authentication</Link>
          </li>
          <li className="nav-item">
            <Link to="/FireStore" className="nav-link">FireStore</Link>
          </li>
          <li className="nav-item">
            <Link to="/FirebaseStorage" className="nav-link">FirebaseStorage</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
