import React from 'react';
import { Link } from 'react-router-dom'; //uvijek kad mi treba link

const headerStyle = {
    background: '#333',
    color:'#fff',
    textAlign: 'center',
    padding: '10px'
}
const linkStyle = {
  color: '#fff',
  textDecoration: 'none'
}
//home uvezli smo link i preko njega se otvara home
export default function Header() {
  return (
    <div>
      <header style={headerStyle}>
          <h1>TodoList</h1>
          <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
      </header>
    </div>
  )
}


