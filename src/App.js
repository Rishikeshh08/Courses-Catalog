import './App.css';
import { apiUrl } from './data';
import { useState } from 'react';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import Home from './components/Home';
import Wishlist from './components/Wishlist';
import {Routes, Route} from 'react-router-dom'

// this is redux branch

function App() {
  const [courses, setCourses] = useState(null);
  const [load, setLoad] = useState(true);

  async function fetchData() {
    try{
      setLoad(true);
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      console.log(output); 
      setLoad(false);
    }
    catch(e) {
      alert('Unable to fetch data through an api');
    }
  }

  useEffect( () => {fetchData()}, []); 


  return (
    <div>
        {/* <Toaster/> */}
        <div className="App">
            <div className="topRibbon">
              <p>Top Courses</p>
            </div>
            
            <Routes>
              <Route path="/" element= {<Home load={load} courses={courses}/>}></Route>
              <Route path="/wishlist" element={<Wishlist/>}></Route>
            </Routes>
            

        </div>
        <ToastContainer className="toast-container" autoClose={1000}/>
        
    </div>
    
  );
}

export default App;