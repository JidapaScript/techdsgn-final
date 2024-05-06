import TopBar from "@/components/TopBar";
import Profile from "@/components/Profile";

export default function Take() {
    return (
      <div className="flex-column justify-start min-w-full min-h-full">
        <TopBar />
        <hr className="divider-line w-full h-px mt-58 mb-42 bg-white"/>
        <section>
            <Profile />
            <div className="your-topics"></div>
        </section>
      </div>
    );
  }