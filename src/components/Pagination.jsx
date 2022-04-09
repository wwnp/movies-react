import React from 'react'
import { CARDS_PER_PAGE } from '../config'

export const Pagination = (props) => {
  const { quantity, page, setPage } = props
  const pages = Math.ceil(quantity / CARDS_PER_PAGE)
  let temp = []
  for (let i = 1; i <= pages; i++) {
    temp.push(
      <li
        key={'li-pagi-' + i}
        className={`pagination-link ${page === i ? 'active' : null}`}
      >
        <a href="#!" onClick={(e) => {
          e.preventDefault()
          setPage(i)
        }}>{i}</a>
      </li>
    )
  }
  return (
    <ul className="pagination" style={{ display: 'flex', justifyContent: 'center', marginTop: '1rem', marginBottom: '1rem' }}>
      {
        temp
      }
      {/* <li className="disabled"><a href="#!"><i className="material-icons">chevron_left</i></a></li>
      <li className="waves-effect"><a href="#!"><i className="material-icons">chevron_right</i></a></li> */}
    </ul>
  )
}
