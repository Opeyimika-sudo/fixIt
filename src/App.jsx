import React from "react";
import "./App.css";
import Blog_see_all from './pages/Blog--see-all'
import Blog from './pages/Blog'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {
  

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Blog_see_all />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
