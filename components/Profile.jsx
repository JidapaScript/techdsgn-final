export default function Profile(){
    return (
        <div className="flex-column justify-start items-center p-24 bg-transparent stroke-white stroke-1">
            <div className="profile-heading flex-row justify-between w-[265px]">
                <h5 className="text-base text-white font-semibold">Profile</h5>
                <img className="profile-settings" src="/icons/settings.svg"/>
            </div>
            <div className="profile-name-img flex-column justify-between space-y-24">
                <img className="profile-img-lg" src="/profiles/profile_lg.png"/>
                <h3 className="text-2xl text-white font-semibold">Tom Jerry</h3>
            </div>
            <div className="profile-content flex-column justify-start space-y-14">
                <div className="followers flex-row justify-start space-x-16">
                    <h5 className="text-base text-white font-regular">36</h5>
                    <h5 className="text-base text-white font-regular">Followers</h5>
                </div>
                <div className="following flex-row justify-start space-x-16">
                    <h5 className="text-base text-white font-regular">117</h5>
                    <h5 className="text-base text-white font-regular">Following</h5>
                </div>
                <div className="topics flex-row justify-start space-x-22">
                    <h5 className="text-base text-white font-regular">11</h5>
                    <h5 className="text-base text-white font-regular">Topics</h5>
                </div>
                <div className="takes flex-row justify-start space-x-22">
                    <h5 className="text-base text-white font-regular">27</h5>
                    <h5 className="text-base text-white font-regular">Takes</h5>
                </div>
                <div className="saves flex-row justify-start space-x-22">
                    <h5 className="text-base text-white font-regular">92</h5>
                    <h5 className="text-base text-white font-regular">Saves</h5>
                </div>
            </div>
        </div>
    );
}