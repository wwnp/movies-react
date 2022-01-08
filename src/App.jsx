import React from "react";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Main } from "./containers/Main/Main";
export const API_KEY = process.env.REACT_APP_API_KEY
function App() {
  return (
    <div className="wrapper">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}
export default App;
