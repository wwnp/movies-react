import React from 'react'
export const Header = () => {
  return (
    <nav className='deep-purple'>
      <div className="nav-wrapper">
        <a href="/" className="brand-logo">Movies</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li><a href="https://github.com/wwnp/movies-react" target={'_blank'} rel="noreferrer">GitHub Repo</a></li>
          <li><a href="https://github.com/michey85" target={'_blank'} rel="noreferrer">Contributes to michey85</a></li>
          <li><a href="https://www.omdbapi.com/" target={'_blank'} rel="noreferrer">Contributes to OMBDb API</a></li>
        </ul>
      </div>
    </nav>
  )
}