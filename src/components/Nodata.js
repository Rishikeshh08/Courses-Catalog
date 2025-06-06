import { Link } from "react-router-dom";

function Nodata(){
    return(
        <div className = "wishlistDiv">
            <p className="no-data-text">5000+ learners have added courses to their wishlist.</p>
            <p className="no-data-text">What's stopping you?</p>
            <Link to="/" className="nav">
                <button className="backBtn wishBtn">Start Exploring Now</button>
            </Link>
            
        </div>
        
    )
}
export default Nodata;