import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc"; 
import { useDispatch } from "react-redux";
import { toast} from 'react-toastify';
// import {toast} from 'react-hot-toast'
// import 'react-hot-toast/dist/react-hot-toast.css';
import 'react-toastify/dist/ReactToastify.css';
import {add, remove} from '../redux/slices/likeSlice'
import { useSelector } from "react-redux";

function Card(props) {
    let course = props.course;
    let description = (course.description.length <= 100) ? course.description : (course.description.substring(0, 100) + "...");
    // let likedCourses = props.likedCourses;
    // let setLikedCourses = props.setLikedCourses;

    const likedCourses = useSelector((state) => state.like);
    console.log(likedCourses)
    const dispatch = useDispatch();

    function likeHandler(){
        if(likedCourses.includes(course)) {
            // setLikedCourses(prev => prev.filter((c) => c.id !== course.id) ) 
            dispatch(remove(course.id));
            toast.warning("Like Removed")
        }else{
            // setLikedCourses(prev => [...prev, course]);
            dispatch(add(course))
            toast.success("Liked Successfully")
        }
        
    }

    
    return(
        <div className="card-section">
            <div className="img-container">
                <img className="image" src={course.image.url} alt={course.image.alt}></img>
            </div>
            <button className="like-btn" onClick={likeHandler}>
                {(likedCourses.includes(course)) ? <FcLike className="like-icon"/> : <FcLikePlaceholder className="like-icon"/>}
            </button>
           {/* <ToastContainer/> */} {/*use on root - mounting and mounting causes problem*/}
            <div className="card-contents">
                <p className="card-title">{course.title}</p>
                <p className="card-description">{description}</p>
            </div>
        </div>
    )
}
export default Card;