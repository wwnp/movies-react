import React from 'react'
import { API_KEY } from '../../App'
import { useState, useEffect } from 'react'
export const LogicMain = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&s=Matrix`)
      .then(response => response.json())
      .then(json => {
        setMovies(json.Search)
        setTimeout(() => {
          setLoading(false)
        }, 300)
      })
  }, [])
  return {
    movies,
    setMovies,
    loading,
    setLoading
  }
}