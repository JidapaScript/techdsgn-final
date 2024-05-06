export default function TopicCategories(props){
    return (
        <a href="#" className="category">
            <button className="text-white text-sm font-normal">
                {props.categoryname}
            </button>
        </a>
    );
}