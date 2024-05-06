export default function TodaysTopic() {
    return (
      <div className="todays-topic flex-column justify-start space-y-34 p-18 bg-transparent stroke-white stroke-1">
        <h5 className="text-white text-base font-semibold">Today's Topic</h5>
        <div className="flex-column justify-start space-y-28">
            <h1 className="text-white text-pretty w-[275px] text-4xl font-semibold">Does Pineapple belong on pizza?</h1>
            <a href="#" className="topic-pizza"> 
            <img className="thumbnail-pizza w-[275px] h-[207px]" src="/images/pizza.jpg" alt="Does Pineapple belong on pizza?" /> 
            </a>
        </div>
      </div>
    );
}