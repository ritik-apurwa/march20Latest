import heroImg from "../../assets/images/course/hero.png";
import heroImgback from "../../assets/images/course/hero-shape-purple.png";
import CourseCard from "../../components/pagescomps/cousecard/CourseCard";
import PriceCard from "../../components/pagescomps/pricecard/PriceCard";
import OnlineCourses from "../../components/pagescomps/onlinecourses/OnlineCourses";
import Blog from "../../components/pagescomps/blog/Blog";

const Home = () => {
  return (
    <>
      <section>
        <section
          id="home_page"
          className="bg-secondary-1 w-full flex flex-col h-full"
        >
          <div
            id="hero_div"
            className="flex flex-col-reverse md:items-center p-4 gap-y-8 md:gap-x-4 md:flex-row h-full w-full"
          >
            <div
              id="hero_header"
              className="h-1/4 md:h-full md:w-5/12 w-full flex justify-center flex-col items-center  "
            >
              <div
                className="flex items-start w-full flex-col"
              >
                <span className="font-bold text-[200%]">Launch</span> 
                <span className="font-bold text-[200%]">Your First Online </span> 
                <span className=" font-bold text-[200%]">Website</span>
                <span className="flex pt-6 text-slate-500 text-center justify-start text-[110%]"> Unlimited access to all 60+ instructors.</span>
                <span className="flex text-center text-slate-500 justify-start text-[110%]"> 2 passes (with access to all classes) for $240</span>
              </div>
            </div>

            <div
              id="hero_img_hero_imgback"
              className="h-1/4 md:h-full md:w-7/12 relative"
            >
              <div id="hero_back_img_div" className=" h-full ">
                <img
                  id="hero_back_img"
                  src={heroImgback}
                  alt=""
                  className="w-full h-1/4 z-50 object-cover"
                />
                <div
                  id="hero_img_div"
                  className="inset-0  absolute h-full w-full"
                >
                  <img
                    id="hero_img"
                    src={heroImg}
                    alt=""
                    className="w-full h-[95%]  absolute object-contain z-20 "
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="course_card">
          <hr />
          <h1 className="bg-secondary-1 flex items-center justify-center w-full text-5xl py-6 font-bold">Introducting our Courses</h1>
          <CourseCard />
        </section>

      <section>
        <PriceCard/>
      </section>


    <section className="   relative">
      <OnlineCourses/>
    </section>


    <section>
      <Blog/>
    </section>
      </section>
      {/* <section id="blog">
        <Blog />
      </section> */}
      {/* <section>
        <Faq />
      </section> */}
    </>
  );
};

export default Home;
