import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



function Filter(props) {
    let filterData = props.filterData;
    // let likedCourses = props.likedCourses;
    // let num = likedCourses.length;
    // console.log(likedCourses);
    
    // console.log(num);
    // console.log(filterData);
    let setCategory = props.setCategory;
    let category = props.category;


    const likedCourses = useSelector((state) => state.like)
    let num = likedCourses.length;

    let navigate = useNavigate();
    function clickHandler(title){
        setCategory(title);
    }
    function clickWishlistHandler(){
        navigate("/wishlist");
    }
    

    return(
        <div className="filter-btns">
            <div className="filter-first">
                {
                filterData.map((data) => (
                    <button className={(data.title === category) ? "filterButtons active" : "filterButtons"} key={data.id} onClick={() => clickHandler(data.title)}>
                        {data.title}
                    </button>
                    
                ))
            }
            </div>
            
            <button className="wishBtn" onClick={clickWishlistHandler}>
                Wish List ({num})
            </button>
        </div>
    );
}
export default Filter;