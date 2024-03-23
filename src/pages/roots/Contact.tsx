const Contact: React.FC = () => {
    return (
      <>
        <div className="Vist Our Place ">
          <div className="py-4">
            <h1 className="flex w-full justify-center text-2xl font-bold">
              Visit Our Place{" "}
            </h1>
          </div>
          <div
            className="w-full p-2  h-[250px] md:h-[400px]
            border-off-white       
          
          lg:h-[500px] dark:border-off-dark  border-2
           rounded-md items-center  max-w-screen-xl flex max-h-[600px] justify-center "
          >
            <iframe
              className="border-0 h-full w-full  md:px-10  "
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3543.3092889423006!2d75.0994182!3d27.366054600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396c9bb1052f5cbd%3A0x2690622e3c599aeb!2sApurwa%20Clothing%20Works!5e0!3m2!1sen!2sin!4v1709013848383!5m2!1sen!2sin"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
  
          <div className="contacts">
            <div className=" p-12">
              <h1 className="text-2xl font-medium">Contact Us</h1>
              <p className="text-gray-500">Feel free to get in touch with us.</p>
              <div className="items mt-8">
                <div className="box">
                  <p className="text-lg">Address:</p>
                  <p>123 Main Street, City, Country</p>
                </div>
                <div className="box mt-4">
                  <p className="text-lg">Email:</p>
                  <p>example@example.com</p>
                </div>
                <div className="box mt-4">
                  <p className="text-lg">Phone:</p>
                  <p>+123 456 789</p>
                </div>
              </div>
              <form>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-first-name"
                    >
                      First Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="John"
                    />
                  </div>
                  <div className="w-full md:w-1/2 px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-last-name"
                    >
                      Last Name
                    </label>
                    <input
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                      id="grid-last-name"
                      type="text"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap -mx-3 mb-6">
                  <div className="w-full px-3">
                    <label
                      className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Message
                    </label>
                    <textarea
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500 h-48 resize-none"
                      id="message"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                </div>
                <div className="md:flex md:items-center">
                  <div className="md:w-1/3">
                    <button
                      className="shadow bg-teal-400 hover:bg-teal-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                      type="button"
                    >
                      Send
                    </button>
                  </div>
                  <div className="md:w-2/3"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Contact;