import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
import { SingleCard } from '../components/SingleCard';
import { Preloader } from '../components/Preloader';

export const SinglePage = () => {
  const { id } = useParams()
  const [single, setSingle] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchSingle() {
      const response = await fetch(`http://www.omdbapi.com/?apikey=79fb8a48&i=${id}`)
      const json = await response.json()
      setSingle(json)
      setLoading(false)
    }
    fetchSingle()
  }, [])
  console.log(single)
  return (
    <div className='container'>
      <div className="row">
        <div className="col" style={{ marginTop: '1rem' }}>
          {loading
            ? <Preloader color={'purple'}></Preloader>
            : <SingleCard single={single}></SingleCard>
          }
        </div>
      </div>
    </div>
  )
}
