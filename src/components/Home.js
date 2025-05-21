import { filterData } from "../data";
import Filter from "./Filter";
import Nodata from "./Nodata";
import Loader from "./Loader";
import Cards from "./Cards";
import { useState } from "react";

function Home(props){
    let courses = props.courses;
    let load = props.load;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;

    const [category, setCategory] = useState("All");
    
    return(
        <div>
            <Filter filterData={filterData} setCategory={setCategory} category={category} likedCourses={likedCourses}></Filter>
        
            <div className="cards-loader-section">
                {
                (!load) 
                ? 
                // what is data obtained is empty??
                ((typeof courses === "object" && Object.keys(courses).length === 0) ? 
                    <Nodata></Nodata> : 
                    <Cards courses={courses} category={category} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Cards>
                )
                :
                (<Loader></Loader>) 

                }
            </div>
        </div>
        
    );
}
export default Home;