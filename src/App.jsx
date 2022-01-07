import React from "react";
import { Header } from "./components/Layout/Header";
import { Footer } from "./components/Layout/Footer";
import { Main } from "./containers/Main/Main";
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
