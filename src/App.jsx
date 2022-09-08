import React from "react";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Outlet } from 'react-router-dom';
export const API_KEY = process.env.REACT_APP_API_KEY
function App() {
  return (
    <div className="wrapper">
      <div>123</div>
      <Header></Header>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
}
export default App;
