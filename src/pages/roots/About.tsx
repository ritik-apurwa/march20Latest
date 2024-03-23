import { FaBookDead } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import { ReactElement, JSXElementConstructor } from "react";
import aboutImg from "../../assets/images/course/about.jpg";
import aboutImgBanner from "../../assets/images/course/about-banner.jpg";
import imgs from "../../assets/images/course/join1.png";

export const About = () => {
  return (
    <>
      <section className="about py-16">
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              Why Choose An Scholercity Out Of The Ordinary
            </h1>
            <p className="text-sm mt-2">
              You don't have to struggle alone; you've got our assistance and
              help.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <AboutCard
              color="bg-[#2D69F0]"
              icon={<FaBookDead size={50} />}
              title="4,000 Online courses"
              desc="You don't have to struggle alone; you've got our assistance and help."
            />
            <AboutCard
              color="bg-[#DD246E]"
              icon={<FaBookDead size={50} />}
              title="4,000 Online courses"
              desc="You don't have to struggle alone; you've got our assistance and help."
            />
            <AboutCard
              color="bg-[#8007E6]"
              icon={<FaBookDead size={50} />}
              title="4,000 Online courses"
              desc="You don't have to struggle alone; you've got our assistance and help."
            />
            <AboutCard
              color="bg-[#0CAE74]"
              icon={<FaBookDead size={50} />}
              title="4,000 Online courses"
              desc="You don't have to struggle alone; you've got our assistance and help."
            />
          </div>
        </div>
      </section>
      <AboutContent />
    </>
  );
};

interface AboutCardProps {
  color: string;
  icon: ReactElement<any, string | JSXElementConstructor<any>> | null;
  title: string;
  desc: string;
}

const AboutCard = (props: AboutCardProps) => {
  return (
    <div
      className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color}`}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

const AboutContent = () => {
  return (
    <section className="mb-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="relative">
            <img src={aboutImg} alt="aboutImg" className="rounded-xl" />
            <img
              src={aboutImgBanner}
              alt="aboutImgBanner"
              className="absolute bottom-0 left-0 w-1/2 h-auto rounded-xl"
            />
            <div className="img-group absolute bottom-0 left-1/2 transform -translate-x-1/2 -mb-6">
              <img src={imgs} alt="imgs" className="w-20 h-auto" />
              <span className="text-sm text-black">
                Join over <strong>4,000+</strong> students
              </span>
            </div>
          </div>
          <div>
            <div className="heading mb-6">
              <h1 className="text-3xl font-semibold text-black">
                Achieve Your Goals With Educal
              </h1>
              <p className="text-sm mt-2 leading-relaxed">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam
                officia, reiciendis sapiente adipisci nulla non consequuntur eos
                repellendus laborum veritatis obcaecati neque est id porro
                voluptatum.
              </p>
            </div>
            <ul className="mb-6">
              <li className="text-sm flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" /> Upskill your
                organization.
              </li>
              <li className="text-sm flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" /> Access more than
                100K online courses.
              </li>
              <li className="text-sm flex items-center gap-2">
                <AiOutlineCheck className="text-green-500" /> Learn the latest
                skills.
              </li>
            </ul>
            <button className="px-5 py-2 border border-gray-300 rounded-md text-sm">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
