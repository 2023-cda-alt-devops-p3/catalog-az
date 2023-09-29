import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <p>&copy; {new Date().getFullYear()} Copyright.</p>
    </footer>
  )
}
const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '1rem',
    position: 'fixed',
    bottom: 0,
  };

export default Footer
