import React from 'react'
export const Footer = () => {
  return (
    <footer className="page-footer deep-purple" style={{ paddingTop: 0 }}>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  )
}