export default function AddTopic() {
    return (
      <div className="todays-topic flex-column justify-start space-y-34 p-18 fixed bg-transparent stroke-white stroke-1">
        <h5 className="text-white text-base font-semibold">What's on your mind?</h5>
        <img className="profile-friends px-48" src="/profiles/friends.png" alt="Your Friends"/>
        <button className="add-your flex-row justify-center px-48 py-12 mt-24 bg-white">
            <img className="icon-add" src="/icons/add.svg" alt="Add Your Topic"/>
            <h5 className="text-black text-base font-medium">ADD YOUR TOPIC</h5>
        </button>  
      </div>
    );
}