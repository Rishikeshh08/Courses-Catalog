import './App.css';
import Filter from './components/Filter'
import Cards from './components/Cards'
import { filterData } from './data';
import { apiUrl } from './data';
import { useState } from 'react';
import { useEffect } from 'react';
import Loader from './components/Loader';
import Nodata from './components/Nodata';
import React from 'react';
import { ToastContainer } from 'react-toastify';


function App() {
  const [courses, setCourses] = useState(null);
  const [load, setLoad] = useState(true);
  const [category, setCategory] = useState("All");
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
      {/* <div className="filterSection"> */}
        <Filter filterData={filterData} setCategory={setCategory} category={category}></Filter>
      {/* </div> */}
      <div className="cards-loader-section">
        {
          (!load) 
          ? 
          // what is data obtained is empty??
          ((typeof courses === "object" && Object.keys(courses).length === 0) ? 
            <Nodata></Nodata> : 
            <Cards courses={courses} category={category}></Cards>
          )
          :
          (<Loader></Loader>) 

        }
      </div>
       
    </div>
    <ToastContainer className="toast-container"/>
    </div>
    
  );
}

export default App;