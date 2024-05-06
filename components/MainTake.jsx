export default function MainTake(){
    return (
        <div className="take-for flex-column justify-items-end w-3/4 space-y-300 bg-transparent border-white border-1">
            <div className="take-post flex-row justify-start space-x-34">
                <div className="profile flex-row justify-start space-x-20">
                    <a href="/profile" className="profile"> 
                        <img className="profile-pic-md" src="/profiles/profile_md.png" alt="profile" /> 
                    </a>
                    <div className="take-content flex-column justify-start space-y-36 w-[785px]">
                        <h1 className="text-4xl text-white text-pretty font-semibold">Yes! Pineapple creates a sweet and sour flavour profile.</h1>
                        <h6 className="text-base text-white text-pretty font-normal">
                            Pineapple lends a distinct sweet and sour flavor profile to Hawaiian pizza due to its natural composition.
                            The fruit contains enzymes, particularly bromelain, which contribute to its slightly acidic taste. This 
                            acidity, coupled with the inherent sugars present in pineapple, creates a harmonious balance of 
                            sweetness and tanginess. When baked atop pizza, the heat caramelizes these sugars, intensifying the 
                            sweetness while retaining its tangy undertones. This interaction between heat and pineapple's natural 
                            components results in a uniquely flavorful experience, enhancing the savory notes of ham or bacon and 
                            complementing the cheese with its contrasting taste profile
                        </h6>
                    </div>
                </div>
                <div className="flex-row justify-end pace-x-14">
                    <a href="#"> <img className="icon-save" src="/icons/bookmark.svg"/> </a>
                    <a href="#"> <img className="icon-share" src="/icons/ios_share.svg"/> </a>
                </div>
            </div>
            <div className="take-engagement flex-row justify-end space-x-8">
                <a href="#"> <img className="icon-like" src="/icons/thumbs_up.svg"/> </a>
                <a href="#"> <img className="icon-dislike" src="/icons/thumbs_down.svg"/> </a>
                <a href="#"> <img className="icon-take" src="/icons/chat_bubble.svg"/> </a>
                <h6 className="text-sm text-white font-normal">328</h6>
            </div>
        </div>
    );
}