"use client";

import { ArrowLeft, Download, Repeat } from "lucide-react";

const Home = () => {
  return (
    <div className="flex h-screen w-screen text-white font-mono">
      <div className="w-20 bg-black flex flex-col justify-between py-4 items-center">
        <div className="flex flex-col items-center space-y-6">
          <ArrowLeft className="text-white rotate-180" />
          <Download className="text-white" />
          <Repeat className="text-white" />
        </div>
        <div className="flex flex-col items-center space-y-4 text-xs text-white pb-6">
          <button className="hover:underline">настройки</button>
          <button className="hover:underline">донаты</button>
          <button className="bg-white text-black px-2 py-1 rounded">
            новости
          </button>
          <button className="hover:underline">инфа</button>
        </div>
      </div>

      <main className="flex-1 bg-black px-10 py-8 overflow-y-auto">
        <div className="flex justify-between text-sm text-white/60 mb-4">
          <span>← 4.3.2</span>
          <span>4.2 →</span>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <div className="text-sm text-white/60">4.3 November 12, 2022</div>
            <h1 className="text-2xl font-bold mt-1">
              developers, developers, developers, developers
            </h1>
          </div>

          <div className="rounded-xl overflow-hidden mb-6">
            <img
              src="https://media.giphy.com/media/M9Tfi8P9TBzptYbC4z/giphy.gif"
              alt="developers chant"
              className="w-full object-cover"
            />
          </div>

          <div className="space-y-4 text-sm">
            <p>this update features a TON of improvements.</p>
            <p>
              <span className="underline">developers</span>, you now can rely on
              cobalt for getting content from social media. the api has been
              revamped and <span className="underline">documentation</span> is
              now available. you can read more about API changes down below. go
              crazy, and have fun :D
            </p>
            <p>
              if you’re not a developer, here’s a list of changes that you
              probably care about:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>
                rate limit is now approximately 8 times bigger. no more waiting,
                even if you want to download entirety of your tiktok “for you”
                page.
              </li>
              <li>
                some updates will now have expressive banners, just like this
                one.
              </li>
              <li>
                fixed what was causing an error when a youtube video had no
                description.
              </li>
              <li>
                mp4 format button text should now be displayed properly, no
                matter if you touched the switcher or not.
              </li>
            </ul>
            <p>next, the star of this update – improved api!</p>
            <ul className="list-disc pl-6 space-y-1">
              <li>main endpoint now uses POST method instead of GET.</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
