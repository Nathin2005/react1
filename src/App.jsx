// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GridView from "../src/GridView"
import Todo from "./Todo";
import Navbar from "./Navbar";
import Profile from './Profile';
import Home from "./Sample"
import { Provider } from "react-redux";
import store from "./store";

const ProfileLst = {
  name: "Nadhin",
  Department: "AIDS",
  year: 2,
  mobile: 9809890980,
  address: "D.No: 23/234,Saraswathi Nagar,Coimbatore",
};

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/todo" element={<Todo />} /> */}
        <Route path="/profilecard" element={<Profile ProfileLst={ProfileLst}/>
} />
        <Route path="/gridview" element={<GridView />} />

        <Route path="/todo" element={ <Provider store={store}> <Todo/></Provider> }/>

       
      </Routes>
    </BrowserRouter>
  );
}

export default App;