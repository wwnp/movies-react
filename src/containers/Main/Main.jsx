import React, { useEffect, useState } from 'react'
import { List } from '../../components/List'
import { Preloader } from '../../components/Preloader'
import { Search } from '../../components/Search/Search'
import { API_KEY } from '../../App'
// import { Pagination } from '../../components/Pagination'
import { useLocation, useNavigate, NavLink } from 'react-router-dom';
import { CARDS_PER_PAGE, SEARCH_MIN, types } from '../../config'
import { Pagination, PaginationItem } from '@mui/material';


const queryString = require('query-string');

export const Main = props => {
  const location = useLocation()
  const navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)

  const parsed = queryString.parse(location.search);
  const [page, setPage] = useState(+parsed.page || 1)
  const [quantity, setQuantity] = useState(0)
  const [search, setSearch] = useState("warcraft");
  const [type, setType] = useState(types.__all__);

  useEffect(() => {
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search}`
    // let url = `https://www.omdbapi.com/?apikey=${API_KEY}&s=${search ? search : 'warcraft'}`
    // let navigateUrl = `?page=${page}`
    if (page) {
      url += `&page=${page}`
    }
    if (type !== 'all') {
      url += `&type=${type}`
    }
    navigate(`?page=${page}${search ? '&s=' + search : ''}${type === types.__all__ ? "" : '&type=' + type}`)
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
          setQuantity(json.totalResults)
          setTimeout(() => {
            setLoading(false)
          }, 300)
        }
      })
      .catch((error) => {
        setMovies({ error: error.message })
      })
      .finally(() => {
        setTimeout(() => {
          setLoading(false)
        }, 500)
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, type])


  const handleUpdate = (type) => {
    setPage(1)
    let url = `https://www.omdbapi.com/?apikey=${API_KEY}`
    if (search) {
      url += `&s=${search}`
    }
    if (type !== 'all') {
      url += `&type=${type}`
    }

    navigate(`?page=1${search ? '&s=' + search : ''}${type ? '&t=' + type : ''}`)

    if (search.length >= SEARCH_MIN) {
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
            setQuantity(json.totalResults)
            setTimeout(() => {
              setLoading(false)
            }, 300)
          }
        })
    } else {
      alert(`At least ${SEARCH_MIN} symbols`)
    }
  }

  return (
    <main className='content container'>
      <Search
        setMovies={setMovies}
        setLoading={setLoading}
        search={search}
        handleUpdate={handleUpdate}
        setSearch={setSearch}
        type={type}
        setType={setType}
      >
      </Search>
      {
        loading
          ? <Preloader color='purple'></Preloader>
          : (
            movies?.error
              ? <h1>{movies.error}</h1>
              : <>
                {!!quantity && (
                  <Pagination
                    count={Math.ceil(quantity / CARDS_PER_PAGE)}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    showFirstButton
                    showLastButton
                    sx={{ marginY: 3, marginX: "auto" }}
                    renderItem={(item) => (
                      <PaginationItem
                        component={NavLink}
                        to={`/?page=${item.page}`}
                        {...item}
                      />
                    )}
                  />
                )}
                <List list={movies}></List>
                {!!quantity && (
                  <Pagination
                    count={Math.ceil(quantity / CARDS_PER_PAGE)}
                    page={page}
                    onChange={(_, num) => setPage(num)}
                    showFirstButton
                    showLastButton
                    sx={{ marginY: 3, marginX: "auto" }}
                    renderItem={(item) => (
                      <PaginationItem
                        component={NavLink}
                        to={`/?page=${item.page}`}
                        {...item}
                      />
                    )}
                  />
                )}
                {/* <Pagination quantity={quantity} page={page} setPage={setPage}></Pagination> */}
              </>
          )
      }
    </main >
  )
}