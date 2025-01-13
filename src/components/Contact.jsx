import React from "react";

const Contact = () => {
  return (
    <section id="contact" className="px-14 pr-10 py-10">
      <div className="flex gap-[40px]">
        <span className="font-medium text-[40px] bg-primary rounded-[7px] px-7">
          Contact Us
        </span>
        <span className="text-[18px] max-w-[28rem]">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </span>
      </div>

      <div
        className="w-full flex items-center justify-around
       h-[44rem] my-10"
      >
        <div className="flex-[0.7] pt-8 flex flex-col items-start justify-start gap-10 h-full pl-32 w-full">
          <div className="flex items-center justify-center gap-5">
            <div className="flex items-center justify-center gap-2">
              <input
                className="size-6 p-2 rounded-full border-2 border-black appearance-none checked:bg-primary"
                type="radio"
                id="say-hi"
                name="options"
              />
              <label className="text-[18px]" for="say-hi">
                Say Hi
              </label>
            </div>

            <div className="flex items-center justify-center gap-2">
              <input
                className="size-6 p-2 rounded-full border-2 border-black appearance-none checked:bg-primary"
                type="radio"
                id="get-quote"
                name="options"
              />
              <label className="text-[18px]" for="get-quote">
                Get a Quote
              </label>
            </div>
          </div>

          <div className="flex flex-col w-[36rem] items-start justify-center gap-8">
            <div className="flex w-full flex-col items-start justify-center gap-2">
              <label htmlFor="name">
                Name<sup>*</sup>
              </label>
              <input
                autoComplete="off"
                className="bg-transparent border-2 border-darkColor rounded-[7px] px-4 py-2 w-full"
                type="text"
                placeholder="Name"
                name="name"
                id="name"
                required
              />
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-2">
              <label htmlFor="email">
                Email<sup>*</sup>
              </label>
              <input
                autoComplete="off"
                className="bg-transparent border-2 border-darkColor rounded-[7px] px-4 py-2 w-full"
                type="email"
                placeholder="Email"
                name="email"
                id="email"
                required
              />
            </div>

            <div className="flex w-full flex-col items-start justify-center gap-2">
              <label htmlFor="message">
                Message<sup>*</sup>
              </label>
              <textarea
                autoComplete="off"
                className="bg-transparent border-2 border-darkColor rounded-[7px] px-4 py-2 w-full resize-none min-h-32"
                placeholder="Type your message"
                name="message"
                id="message"
                maxLength={250}
              />
            </div>

            <button className="w-full py-5 bg-darkColor text-white rounded-[14px] border-2 hover:bg-transparent hover:border-darkColor hover:text-darkColor transition-all duration-200">
              Send Message
            </button>
          </div>
        </div>

        <div className="flex-[0.3]">
          <img src="/contact/bg.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
