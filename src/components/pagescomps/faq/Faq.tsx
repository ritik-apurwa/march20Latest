import { useState } from "react";
import { faq } from "../../../assets/data/coursedata/appdata";
import { CgChevronDoubleDown } from "react-icons/cg";
import { BsChevronDoubleRight } from "react-icons/bs";

interface FAQItem {
  title: string;
  desc: string;
}

const Faq = () => {
  const [click, setClick] = useState<number | null>(null); //
  const toggle = (index: number) => {
    if (click === index) {
      return setClick(null);
    }
    setClick(index);
  };

  return (
    <section id="faq" className="faq py-20">
      <div className="container  mx-auto">
        {faq.map((val: FAQItem, index: number) => (
          <div className="box bg-white rounded-md shadow-md" key={index}>
            <button
              className="accordion flex justify-between items-center p-5"
              onClick={() => toggle(index)}
            >
              <h2 className="font-semibold">{val.title}</h2>
              <span>
                {click === index ? (
                  <CgChevronDoubleDown />
                ) : (
                  <BsChevronDoubleRight />
                )}
              </span>
            </button>
            {click === index ? (
              <div className="text p-5">
                <p>{val.desc}</p>
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;