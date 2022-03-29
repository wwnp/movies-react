import React from 'react'
export const Header = () => {
  return (
    <nav className='light-blue'>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/wwnp/movies-react" target={'_blank'} rel="noreferrer">GitHub</a></li>
        </ul>
      </div>
    </nav>
  )
}