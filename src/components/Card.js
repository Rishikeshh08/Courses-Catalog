import { FcLike } from "react-icons/fc";
import { FcLikePlaceholder } from "react-icons/fc"; 
import { toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Card(props) {
    let course = props.course;
    let description = (course.description.length <= 100) ? course.description : (course.description.substring(0, 100) + "...");
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    function likeHandler(){
        if(likedCourses.includes(course)) {
            setLikedCourses(prev => prev.filter((c) => c.id !== course.id) )  //prev.push(course)
            toast.warning("Like Removed")
        }else{
            setLikedCourses(prev => [...prev, course]);
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