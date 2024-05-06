export default function Tag(props){
    return (
        <a href="#" className="tag">
            <button className="px-14 py-24 rounded-full bg-transparent stroke-white stroke-1 text-white text-sm font-semibold">
                {props.tagname}
            </button>
        </a>
    );
}