import TopBar from "@/components/TopBar";
import TopicCategories from "@/components/TopicCategories";
import TopicCard from "@/components/TopicCard";
import TodaysTopic from "@/components/TodaysTopic";
import AddTopic from "@/components/AddTopic";

export default function Feed() {
    return (
      <feed className="flex-column">
        <TopBar />
        <section className="category-swiper flex-row justify-center space-x-42">
          <TopicCategories 
            categoryname="For You"
          />
          <TopicCategories 
            categoryname="Following"
          />
          <TopicCategories 
            categoryname="Global"
          />
          <TopicCategories 
            categoryname="Politics"
          />
          <TopicCategories 
            categoryname="Ethics"
          />
          <TopicCategories 
            categoryname="Food"
          />
        </section>
        <hr className="divider-line w-full h-px mt-16 mb-42 bg-white"/>
        <div className="feed-content flex-row justify-between mx-36">
          <div className="feed-topics flex-row justify-between space-x-24">
            <div className="first-column flex-column justify-start space-y-30">
              <TopicCard
                featureimage="/images/pets.png"
                title="Are cats or dogs 
                the better pet?"
                takecount="1251"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/hotdog.png"
                title="Are hot dogs, 
                sandwiches?"
                takecount="328"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/fox.png"
                title="What does the 
                fox say?"
                takecount="1309"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/coffeeortea.png"
                title="Coffee or tea, 
                which is the 
                better drink?"
                takecount="142"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/pizza.png"
                title="Does Pineapple 
                belong on pizza?"
                takecount="6899"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/water.png"
                title="Is water 
                considered wet?"
                takecount="5219"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/genz.png"
                title="Gen Z vs. Gen 
                alpha, who wins?"
                takecount="7884"
              />
            </div>
            <div className="second-column flex-column justify-start space-y-30">
              <TopicCard
                featureimage="/images/ghost.png"
                title="Are ghosts real?"
                takecount="2453"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/earth.png"
                title="Is the earth flat?"
                takecount="9897"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/moon.png"
                title="Moon landing: 
                real or fake?"
                takecount="7645"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/homework.png"
                title="Should schools 
                eliminate 
                homework?"
                takecount="4278"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/bill.png"
                title="Illuminati: 
                real or fake?"
                takecount="634"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/uniform.png"
                title="School uniforms 
                yay or nay?"
                takecount="487"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/pottery.png"
                title="Jack of all trades 
                or master of one?"
                takecount="199"
              />
            </div>
            <div className="third-column flex-column justify-start space-y-30">
              <TopicCard
                featureimage="/images/robot.png"
                title="Can humans fall 
                in love with AI?"
                takecount="1623"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/protest.png"
                title="Should we 
                abolish the death 
                penalty?"
                takecount="876"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/socialmedia.png"
                title="Social media: 
                good or bad?"
                takecount="231"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/human.png"
                title="Is humankind 
                good or evil?"
                takecount="378"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/heaven.png"
                title="Does god exist?"
                takecount="3769"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/paint.png"
                title="Should we 
                separate the art 
                from the artist?"
                takecount="266"
              />
              <hr className="divider-line-short w-[311px] h-px bg-white"/>
              <TopicCard
                featureimage="/images/ufo.png"
                title="Does extraterrestrial life exist?"
                takecount="5997"
              />
            </div>
          </div>
          <div className="side-bar flex-column justify-between space-y-24 w-1/4">
            <TodaysTopic />
            <AddTopic />
          </div>
        </div>
      </feed>
    );
  }