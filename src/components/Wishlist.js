import Nodata from "./Nodata";
import Card from "./Card";
import { useNavigate } from "react-router-dom";
import { IoChevronBackOutline } from "react-icons/io5";
import { useSelector } from "react-redux";

function Wishlist(props){
    const likedCourses = useSelector((state) => state.like);

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
                    (likedCourses.map((lkCourse) => <Card course={lkCourse}  key={lkCourse.id}></Card>))
                }
            </div>
        </div>
    )
}
export default Wishlist;