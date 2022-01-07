import React from 'react'
import { Card } from './Card'
export const List = props => {
  return (
    <div className="movies">
      {props.list.map(item => {
        return (
          <Card
            key={item.imdbID}
            Poster={item.Poster}
            Title={item.Title}
            Year={item.Year}
            Type={item.Type}
            imdbID={item.imdbID}
          >
          </Card>
          // <Card
          //   key={item.imdbID}
          //   {...item}
          // >
          // </Card>
        )
      })}
    </div>
  )
}