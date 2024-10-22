import React, { useState, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import PageOverlay from "../../PageOverlay";
import emailjs from "@emailjs/browser";

const FifthSegment: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const form = useRef(null);

  const onSubmit = () => {
    emailjs
      .sendForm(
        "service_so9j1fv",
        "template_uiou1ph",
        form.current,
        "IGUMxkTHnzX0Ruo6j"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  const bgc = "#0A014F";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element = document.getElementById("fifth-segment");
      if (element) {
        const rect = element.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight && rect.bottom > 0;

        if (isInView) {
          setIsVisible(true);
        }
      }
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <PageOverlay bgc={bgc}>
      <div
        id="fifth-segment"
        className={`flex flex-col items-center justify-center h-full p-8 w-full transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <h2 className="text-6xl text-lime-400 font-bold mb-4">
          Send me a message!
        </h2>
        <p className="text-lg text-white mb-6">
          Got a question or proposal, or just want to say hello? Go ahead.
        </p>

        <form
          ref={form}
          onSubmit={handleSubmit(onSubmit)}
          className="w-2/4 bg-gray-800 p-10 rounded-lg shadow-lg space-y-8"
        >
          <div className="grid grid-cols-2 gap-10">
            <div className="flex flex-col">
              <label className="text-gray-300 font-semibold">Your Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                name="name"
                className="border-b border-white bg-transparent px-4 py-3 rounded-none focus:outline-none focus:ring-0 focus:border-white text-gray-300"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message?.toString()}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 font-semibold">Email Address</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
                name="email"
                className="border-b border-white bg-transparent px-4 py-3 rounded-none focus:outline-none focus:ring-0 focus:border-white text-gray-300"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col">
            <label className="text-gray-300 font-semibold">Your Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              name="message"
              className="border border-gray-500 bg-transparent px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-lime-400"
              rows={6}
              placeholder="Write your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message?.toString()}
              </p>
            )}
          </div>

          <div className="flex justify-center">
            <button
              type="submit"
              className="w-1/2 md:w-1/3 px-6 py-3 bg-[#4A68B0] text-white font-bold rounded-md shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </PageOverlay>
  );
};

export default FifthSegment;
