import React from "react";
import { useForm } from "react-hook-form";
import PageOverlay from "../../PageOverlay";

const FifthSegment: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  const bgc = "#0F172A";

  return (
    <PageOverlay bgc={bgc}>
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h2 className="text-5xl text-indigo-400 font-semibold">Get In Touch!</h2>
        <p className="text-lg text-gray-300 mt-2">
          Got a project in mind? Just send me a message!
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="w-full max-w-xl mt-8 bg-gray-800 p-8 rounded-lg shadow-lg"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col">
              <label className="text-gray-300 font-semibold">Your Name</label>
              <input
                {...register("name", { required: "Name is required" })}
                className="px-6 py-4 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.name.message?.toString()}
                </p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="text-gray-300 font-semibold">Email</label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email",
                  },
                })}
                className="px-6 py-4 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message?.toString()}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col mt-6">
            <label className="text-gray-300 font-semibold">Your Message</label>
            <textarea
              {...register("message", { required: "Message is required" })}
              className="px-6 py-4 rounded-md bg-gray-900 text-white focus:outline-none focus:ring-2 focus:ring-indigo-400"
              rows={6}
              placeholder="Write your message"
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">
                {errors.message.message?.toString()}
              </p>
            )}
          </div>

          <div className="mt-8 flex justify-center">
            <button
              type="submit"
              className="px-16 py-3 bg-indigo-500 hover:bg-indigo-400 text-white rounded-md font-semibold transition duration-300 ease-in-out transform hover:scale-105"
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
