export default function OppTake(){
    return (
        <div className="take-against flex-column justify-items-end space-y-94 w-1/4 px-23 py-30 bg-transparent border-white border-1">
            <div className="take-but-content flex-column justify-start space-y-33">
                <div className="but-actually flex-row justify-start space-x-20">
                    <a href="#" className="profile-other"> 
                        <img className="profile-luigi" src="/profiles/profile_other.png" alt="luigi profile" /> 
                    </a>
                    <img className="but-actually" src="/logos/butactually.svg" alt="but actually" />
                </div>
                <h3 className="arguement text-2xl text-white text-pretty font-semibold">Ew. Nothing sour on my pizza, thanks.</h3>
                <h6 className="supporting-details text-base text-white text-pretty font-normal">
                    Pizza, an iconic symbol of Italian 
                    culinary mastery, owes its 
                    worldwide acclaim to the 
                    harmonious blend of authentic 
                    Italian ingredients meticulously 
                    crafted by generations of pizza 
                    artisans. Toppings, the essence 
                    of any pizza, should honor this 
                    rich tradition by remaining 
                    authentically Italian. Each 
                    ingredient, from the vibrant San 
                    Marzano tomatoes to the creamy 
                    mozzarella cheese and fragrant...
                </h6>
            </div>
            <div className="take-info flex-row justify-between">
                <h5 className="but-user text-base text-white font-normal">Luigi Mario</h5>
                <div className="but-engagement flex-row justify-end space-x-8">
                    <a href="#"> <img className="icon-like" src="/icons/thumbs_up.svg"/> </a>
                    <a href="#"> <img className="icon-dislike" src="/icons/thumbs_down.svg"/> </a>
                    <a href="#"> <img className="icon-take" src="/icons/chat_bubble.svg"/> </a>
                    <h6 className="text-sm text-white font-normal">27</h6>
                </div>
            </div>
        </div>
    );
}