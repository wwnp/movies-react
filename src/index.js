import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { SinglePage } from './containers/SinglePage';
import { Notfound } from './containers/Notfound';
import { Main } from './containers/Main/Main';

const root = createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter basename='movies-react'>
    <React.StrictMode>
      <Routes>
        <Route path='/' element={<App />}>
          <Route index element={<Main />}></Route>
          <Route path='single/:id' element={<SinglePage />}></Route>
          <Route path='*' element={<Notfound />}></Route>
        </Route>
      </Routes>
    </React.StrictMode>
  </BrowserRouter >

)

// React 17
// ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
//   document.getElementById('root')
// );

// features
// batching async
// New Strict.Mode
// New Suspense 