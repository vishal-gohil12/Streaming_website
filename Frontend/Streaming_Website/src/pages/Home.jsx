import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-screen">
        <div className="flex flex-col items-center mt-14">
          <div className="font-extrabold text-5xl font-mono text-center font-Protest">
            The easiest way to live stream and record
          </div>

          <div className="mt-5 font-Anta font-thin text-gray-600 text-xl text-center max-w-2xl">
            <p className="mb-4">
              StreamyFy is a professional live streaming and recording studio in
              your browser.
            </p>
            <p>
              Record your content, or stream live to Facebook, YouTube, and
              other platforms.
            </p>
          </div>

          <div className="mt-10">
            <button className="bg-purple-500 text-white px-6 py-3 rounded-md shadow-md hover:bg-purple-600 transition-colors duration-300">
              Get Started
            </button>
          </div>

          <div className="mt-20">
            {/* <img
            src="/hero-image.png"
            alt="Hero Image"
            className="rounded-lg shadow-lg"
          /> */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
