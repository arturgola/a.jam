import React from "react";

const ComingSoon = () => {
  return (
    <section
      className="h-screen bg-cover"
      style={{
        backgroundImage:
          //   "url('https://images.unsplash.com/photo-1619364726002-dfd4fdaee5f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')",
          "url('https://demo-source.imgix.net/mountains.jpg')",
      }}
    >
      <div className="flex h-full w-full items-center justify-center container mx-auto px-8">
        <div className="max-w-2xl text-center">
          <h1
            className="text-3xl sm:text-5xl lg:text-7xl font-semibold text-white tracking-wide leading-tight transform-gpu transition-transform duration-300 hover:scale-105 hover:rotate-3 hover:opacity-80"
            style={{
              textShadow: "2px 0 5px rgba(0, 0, 0, 0.7)",
            }}
          >
            Coming Soon
          </h1>

          {/* <p className="mt-6 lg:text-lg text-white">
            You can subscribe to our newsletter, and let you know when we are
            back
          </p> */}

          <p className="mt-6 lg:text-lg text-white">Last updated: 2/2025</p>

          {/*           <div className="mt-8 flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
            <input
              id="email"
              type="text"
              className="rounded-md border border-transparent bg-white/20 px-4 py-2 text-white placeholder-white backdrop-blur-sm focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2"
              placeholder="Email Address"
            />

            <button className="transform rounded-md bg-blue-700 px-8 py-2 text-sm font-medium capitalize tracking-wide text-white transition-colors duration-200 hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
              Notify Me
            </button>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
