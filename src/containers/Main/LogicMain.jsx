import React from 'react'
import { useState, useEffect } from 'react'
export const LogicMain = props => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch('http://www.omdbapi.com/?apikey=79fb8a48&s=Matrix')
      .then(response => response.json())
      .then(json => {
        setMovies(json.Search)
        setTimeout(() => {
          setLoading(false)
        }, 123123000)
      })
  }, [])
  return {
    movies,
    loading
  }
}