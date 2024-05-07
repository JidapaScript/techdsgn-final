export default function TopBar(){
    return (
        <div className="flex justify-between fixed bottom-0 w-full mx-20 my-12">
            <a href="/profile" className="profile-sm"> 
            <img className="profile-img-sm" src="/profiles/profile_sm.png" alt="profile" /> 
            </a>
            <a href="/feed" className="actually-mainpage"> 
            <img className="actually-logo" src="/logos/actually.svg" alt="actually" /> 
            </a>
            <a href="#" className="search-bar"> 
            <img className="search" src="/icons/search.svg" alt="search" /> 
            </a>
        </div>
    );
}