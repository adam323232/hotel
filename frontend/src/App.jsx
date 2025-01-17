import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import {BrowserRouter, Route, Link} from 'react-router-dom';
import Homescreen from './screens/Homescreen'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">        
        <Navbar/>
        <BrowserRouter/>

        <Route path="/home" exact Component={Homescreen}/>

      </div>
    </>
  );
}

export default App;
