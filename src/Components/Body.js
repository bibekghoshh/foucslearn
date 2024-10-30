import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const Body = () => {
  return (
    <>
      <Header />

      <div className="mt-32">
        <div></div>
        <div className="flex items-center justify-center">
          <div>
            <input
              type="text"
              name=""
              id=""
              className="border-2 rounded-full px-4 py-2 w-[40vw] outline-none"
              placeholder="Paste your Link here....."
            />
          </div>
          <div>
            <button className="rounded-lg bg-blue-700 px-4 py-2 text-white font-medium" type="button">Add</button>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Body;
