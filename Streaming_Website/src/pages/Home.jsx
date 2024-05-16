import React from "react";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center mt-14">
        <div className="font-extrabold text-5xl font-mono text-center font-Protest">
          The easiest way to live stream and record
        </div>

        <div className="mt-5 font-Anta font-thin text-gray-600 text-xl text-center">
          StreamyFy is a professional live streaming and recording studio in
          your
          <div>
            browser. Record your content, or stream live to Facebook, YouTube,
            and other platforms.
          </div>
        </div>
      </div>
    </>
  );
}
