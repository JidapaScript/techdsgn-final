export default function TakeCard(props) {
    return (
      <div className="card flex-column justify-start space-y-22">
        <div className="take-thumbnail flex-column justify-start space-y-20">
            <a href="#" className="card-img"> 
                <img className="thumbnail-img w-[311px] h-[175px]" src={props.featureimage} alt={props.title} /> 
            </a>
            <h3 className="text-3xl text-pretty text-gunsmoke-400 font-semibold">{props.title}</h3>
        </div>
        <div className="take-title flex-column justify-end justify-items-end space-y-96">
            <h1 className="text-4xl text-pretty text-white font-semibold"></h1>
            <div className="engagement flex-row justify-end space-x-14">
                <div className="like flex-row justify-between space-x-8">
                    <a href="#"> <img className="icon-like" src="thumbs_up.svg"/> </a>
                    <h6 className="like-count text-sm text-white font-regular">{props.like}</h6>
                </div>
                <div className="dislike flex-row justify-between space-x-8">
                    <a href="#"> <img className="icon-dislike" src="thumbs_down.svg"/> </a>
                    <h6 className="dislike-count text-sm text-white font-regular">{props.dislike}</h6>
                </div>
            </div>
        </div>
      </div>
    );
}