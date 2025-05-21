import Nodata from "./Nodata";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";

function Wishlist(props){
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    console.log("Liked Courses");
            console.log(likedCourses)

    let navigate = useNavigate();
    function backHandler(){
        navigate(-1);
    }
    return(
        <div className="wishlist-section">
            <div className="back-btn-div">
                <button className="backBtn wishBtn" onClick={backHandler}>
                <IoChevronBackOutline />
                  Back
                </button>

            </div>
            <div className="cards-section liked-cards">
                {
                    (Array.isArray(likedCourses) && likedCourses.length === 0) ?
                    (<Nodata></Nodata>) :
                    (likedCourses.map((lkCourse) => <Card course={lkCourse}  key={lkCourse.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>))
                }
            </div>
        </div>
    )
}
export default Wishlist;