import { API_KEY } from '../../App'
import { useEffect } from 'react'
export const LogicSearch = (setMovies, search, setLoading) => {
  const handleUpdate = (type) => {
    // console.log(freeonesApi)
    let url = `http://www.omdbapi.com/?apikey=${API_KEY}`
    if (search) {
      url += `&s=${search}`
    }
    if (type !== 'all') {
      url += `&type=${type}`
    }

    if (search.length >= 2) {
      setLoading(true)
      fetch(url)
        .then(response => response.json())
        .then(json => {
          if (json.Error) {
            setMovies({
              error: json.Error,
            })
            setTimeout(() => {
              setLoading(false)
            }, 300)
          } else {
            setMovies(json.Search)
            setTimeout(() => {
              setLoading(false)
            }, 300)
          }
        })
    } else {
      alert('At least 2 symbols')
    }

  }
  return {
    handleUpdate
  }
}
export const HandleRadios = (setType, handleUpdate, type) => {
  console.log(123)
  const doFetchRadio = (e) => {
    setType(e.target.value);
  }
  useEffect(() => {
    handleUpdate(type);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type])
  return {
    doFetchRadio
  }
}