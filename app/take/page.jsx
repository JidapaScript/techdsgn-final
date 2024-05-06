import TopBar from "@/app/components/TopBar";
import Tag from "@/app/components/Tag";
import MainTake from "@/app/components/MainTake";
import OppTake from "@/app/components/OppTake";

export default function Take() {
  return (
    <div className="flex-column justify-start min-w-full min-h-full">
      <TopBar/>
      <hr className="divider-line w-full h-px mt-12 bg-white"/>
      <div className="flex-row justify-between mx-36 my-24">
        <title className="heading flex-column justify-start space-y-4">
            <h3 className="category text-2xl text-gunsmoke-400 font-semibold">FOOD</h3>
            <h1 className="take-headline text-4xl text-white font-semibold">Does Pineapple belong on pizza?</h1>
        </title>
        <tags className="flex-row justify-end space-x-8">
            <Tag tagname="Trending" />
            <Tag tagname="Food" />
            <Tag tagname="Culture" />
        </tags>
      </div>
      <hr className="divider-line w-full h-px mt-12 bg-white"/>
      <div className="flex-row justify-between space-x-36 mx-36 mt-16 mb-40">
        <MainTake />
        <OppTake />
      </div>
    </div>
  );
}