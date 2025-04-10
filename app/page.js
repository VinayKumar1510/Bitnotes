"use client";
import Typed from "typed.js";
import React, { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {


  
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Notes.", "todo-lists.", "Record Audio."],
      typeSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <main>
      <section className="px-6 py-20 mx-auto lg:space-x-8 lg:flex lg:items-center flex-col lg:flex-row">
        <div className="w-full text-center lg:text-left lg:w-1/2 lg:-mt-8">
          <h1 className="text-3xl leading-snug text-gray-800 dark:text-gray-200 md:text-4xl">
            A{" "}
            <span className="font-semibold text-blue-500">free application</span>{" "}
            for you <br className="hidden lg:block" />
            to make{" "}
            <span className="underline decoration-primary text-pink-600">
              <span ref={el} />
            </span>
          </h1>
          <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
            This is a free application in which you can make/store <br className="hidden lg:block" />
            your important{" "}
            <span className="underline decoration-primary text-fuchsia-500 text-2xl">
              Notes and Todos
            </span>
          </p>
          <div className="mt-6 bg-transparent lg:w-2/3 focus-within:border-primary justify-center">
            <Link href="/makenow">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Make a Note
                </span>
              </button>
            </Link>
            <Link href="/record">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
                <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-transparent group-hover:dark:bg-transparent">
                  Record Now
                </span>
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full mt-4 lg:mt-0 lg:w-1/2">
          <Image
          width={100}
          height={100}
            src="/main.png"
            alt="an image for main page"
            className="w-full h-full max-w-md mx-auto"
          />
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="px-4 mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-semibold text-gray-800 dark:text-gray-200">
              Our Features
            </h2>
            <p className="mt-4 text-lg text-gray-500 dark:text-gray-300">
              Choose Features you want to use
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
            <div className="relative w-full max-w-sm p-6 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-lg text-center transition-all duration-300 mx-auto before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:rounded-xl before:bg-blue-800 before:opacity-0 before:transition-all before:duration-500 before:blur-md hover:before:h-full hover:before:opacity-100 before:pointer-events-none">

              <h3 className="relative text-2xl font-semibold text-white">
                Notes
              </h3>
              <p className="relative mt-4 text-gray-300">
                Make your notes
              </p>
              <ul className="relative mt-6 mb-6 space-y-4">
                <li className="text-gray-200">Make the first note</li>
                <li className="text-gray-200">Basic Support</li>
                <li className="text-gray-200">Single User</li>
                <li className="text-gray-200">Community Access</li>
                <li className="text-gray-200">Weekly Updates</li>
              </ul>

              <Link href="/makenow">
                <button className="relative w-[50%] px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline focus:bg-blue-500">
                  Try Now
                </button>
              </Link>

            </div>

            <div className="relative w-full max-w-sm p-6 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-lg text-center transition-all duration-300 mx-auto before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:rounded-xl before:bg-purple-800 before:opacity-0 before:transition-all before:duration-500 before:blur-md hover:before:h-full hover:before:opacity-100 before:pointer-events-none">
              <h3 className="relative text-2xl font-semibold text-white dark:text-gray-200">
                Todos
              </h3>
              <p className="relative mt-4 text-white">Make you Todos</p>
              <ul className="relative mt-6 mb-6 space-y-4">
                <li className="text-white">Make your schedule</li>
                <li className="text-white">Priority Support</li>
                <li className="text-white">Remove after use</li>
                <li className="text-white">Community Access</li>
                <li className="text-white">Daily Updates</li>
              </ul>
              <Link href="/makenow">
                <button className="relative w-[50%] px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline focus:bg-blue-500">
                  Try Now
                </button>
              </Link>
            </div>

            <div className="relative w-full max-w-sm p-6 bg-gray-800 dark:bg-gray-900 rounded-xl shadow-lg text-center transition-all duration-300 mx-auto before:absolute before:left-0 before:bottom-0 before:w-full before:h-0 before:rounded-xl before:bg-blue-800 before:opacity-0 before:transition-all before:duration-500 before:blur-md hover:before:h-full hover:before:opacity-100 before:pointer-events-none">
              <h3 className="relative text-2xl font-semibold text-gray-800 dark:text-gray-200">
                Record Audio
              </h3>
              <p className="relative mt-4 text-white dark:text-gray-300">Record Your voice</p>
              <ul className="relative mt-6 mb-6 space-y-4">
                <li className="text-white">20GB Storage</li>
                <li className="text-white">24/7 Support</li>
                <li className="text-white">Best Audio Quality</li>
                <li className="text-white">Community Access</li>
                <li className="text-white">Real-time Updates</li>
              </ul>
              <Link href="/record">
                <button className="relative w-[50%] px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline focus:bg-blue-500">
                  Record Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}