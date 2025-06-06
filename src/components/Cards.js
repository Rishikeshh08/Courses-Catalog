// import { useState } from "react";
import Card from "./Card";
import Nodata from "./Nodata";

function Cards(props){
    let courses = props.courses;
    let category = props.category;
    

    function getCoursesData() {
        let arr = [];
        if(category === "All") {
            Object.values(courses).forEach((courseCategory) =>
                courseCategory.forEach((course) => 
                    arr.push(course)
                )
            )
        } else{
            arr = courses[category];  //courses.category nahi ayega becoz category is a variable
        }
        return arr;
    }

    let mydata = getCoursesData()
    return(
        <div className="cards-section">
            {
                (Array.isArray(mydata) && mydata.length === 0)
                ?
                <Nodata></Nodata>
                :
                (
                mydata.map( (course) => (
                    <Card key={course.id} course={course}></Card>
                ))
                )
            }
        </div>
    )
}
export default Cards;