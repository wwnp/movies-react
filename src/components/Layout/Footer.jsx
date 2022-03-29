import React from 'react'
export const Footer = props => {
  return (
    <footer className="page-footer light-blue" style={{ paddingTop: 0 }}>
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
        </div>
      </div>
    </footer>
  )
}