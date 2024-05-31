import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Home from "./components/home";
import AddPatient from "./components/addPatient";

function App() {
  return (
    <React.Fragment>
      <header>
        <Header/>
      </header>
      <main>
        <Routes>
          <Route path="/"element={<Home/>} exact/>
          <Route path="/add" element={<AddPatient/>} exact/>
        </Routes>
      </main>
    </React.Fragment>
  )
}

export default App;