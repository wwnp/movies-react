import React from 'react'
import { LogicMain } from './LogicMain'
import { List } from '../../components/List'
import { Preloader } from '../../components/Preloader'
export const Main = props => {
  const { loading, movies } = LogicMain()
  return (
    <main className='content container'>
      {loading
        ? <Preloader color='red'></Preloader>
        : <List list={movies}></List>
      }
    </main>
  )
}