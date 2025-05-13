
function Filter(props) {
    let filterData = props.filterData;
    // console.log(filterData);
    let setCategory = props.setCategory;
    let category = props.category;

    function clickHandler(title){
        setCategory(title);
    }

    

    return(
        <div className="filter-btns">
            {
                filterData.map((data) => (
                    <button className={(data.title === category) ? "filterButtons active" : "filterButtons"} key={data.id} onClick={() => clickHandler(data.title)}>
                        {data.title}
                    </button>
                ))
            }
        </div>
    );
}
export default Filter;