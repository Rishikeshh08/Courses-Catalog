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
  const [likedCourses, setLikedCourses] = useState([]);

  async function fetchData() {
    try{
      // setLoad(true);
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
      // setCourses({});
      setLoad(false);
    }
    catch(e) {
      alert('Unable to fetch data through an api');
    }
  }

  useEffect( () => {fetchData()}, []); 


  return (
    <div>
        <div className="App">
            <div className="topRibbon">
              <p>Top Courses</p>
            </div>
            
            <Routes>
              <Route path="/" element= {<Home load={load} courses={courses} likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>}></Route>
              <Route path="/wishlist" element={<Wishlist likedCourses={likedCourses} setLikedCourses={setLikedCourses}/>}></Route>
            </Routes>
            

        </div>
        <ToastContainer className="toast-container"/>
    </div>
    
  );
}

export default App;