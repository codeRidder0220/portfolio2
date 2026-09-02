import React from "react";
import cover from "../assets/chat.png";
import profile from "../assets/hero.png";
import { FaGithub, FaLinkedin, FaRegFilePdf } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";
import { FaLocationDot, FaSquareXTwitter } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";

const Hero = () => {
  return (
    <section id="home" className="w-full px-4 pb-16">
      <div className="max-w-4xl mx-auto">

        {/* Cover Image */}
        <div className="relative">

          <div className="h-48 sm:h-60 md:h-64 w-full overflow-hidden rounded-2xl border border-gray-700">
            <img
              src={cover}
              alt="Cover"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Profile Image */}
          <div className="absolute left-6 sm:left-10 md:left-14 -bottom-20 sm:-bottom-24">
            <div className="w-40 h-40 sm:w-48 sm:h-48 rounded-full border-4 border-black bg-black overflow-hidden">
              <img
                src={profile}
                alt="Karthik"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

        </div>

        {/* Main Content */}
        <div className="pt-24 sm:pt-28">

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">

            {/* Left Side - Profile Details */}
            <div className="text-center md:text-left">

              <h2 className="text-xl sm:text-2xl font-semibold text-white">
                &lt; AS /&gt;
              </h2>


              <div className="mt-5 space-y-2 text-sm text-gray-400">

                                
                <p className="flex gap-1 items-center justify-center sm:justify-start">
                  
                <FaLocationDot className="text-md text-green-500 animate-pulse" /> India 
                
                </p>

                <a
                href="mailto:coderidder0202@gmail.com"
                 className="break-all">
                  📩 karthik@example.com
                </a>

                <p className="break-all mt-2">
                  📞 +91-9140071261
                </p>

              </div>

            </div>

            {/* Right Side - Introduction */}
            <div className="md:col-span-2 text-center md:text-left">


              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-main text-gray-200 ">
                Ankit Singh
              </h1>

              <p className="text-gray-300 text-sm sm:text-lg font-special font-bold mt-2">
                <Typewriter words={[
                  "Full Stack Developer",
                  "DSA Enthusiast(c++)",
                  "Competetive programming",
                  "Aspiring GenAi"
                ]}
                  loop={0}
                  cursor
                  typeSpeed={70}
                  deleteSpeed={60}
                  delaySpeed={1500}
                >

                </Typewriter>
              </p>

              <p className="text-gray-400 mt-5 leading-relaxed max-w-xl">
                I love turning ideas into real projects — from clean and interactive frontend experiences to powerful backend systems. When I'm not building something, you'll probably find me solving DSA problems or sharpening my competitive programming skills.
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap justify-center md:justify-start gap-9 mt-7">

                <a
                  href="https://github.com/codeRidder0220"
                  className=" text-xl font-semibold text-gray-200 hover:text-gray-400"
                >
                  <div className="flex gap-2 justify-center items-center">
                    <FaGithub className="" />
                    <h2 className="font-special text-[22px] font-light">GitHub</h2>
                  </div>
                </a>

                <a
                  href="#"
                  className="text-xl  text-gray-200 hover:text-gray-400"
                >
                  <div className="flex gap-1 items-center justify-center">
                    <BsTwitterX className="text-md" />

                    <h2 className="font-special text-[22px] font-light ">twitter</h2>
                  </div>

                </a>

                <a
                  href="https://www.linkedin.com/feed/"
                  className=" text-xl font-semibold text-gray-200 hover:text-blue-500 transition-colors"
                >
                  <div className="flex items-center justify-center gap-1">
                    <FaLinkedin className="text-blue-500 text-xl" />
                    <h2 className="font-special text-[22px] font-light">Linkedin</h2>
                  </div>
                </a>

                <a
                  href="#"
                  className="text-xl font-semibold text-gray-200 hover:text-gray-400 "
                >
                  <div className="flex items-center justify-center gap-1">
                    <FaRegFilePdf />

                    <h2 className="font-special text-[22px] font-light">Resume</h2>
                  </div>
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;