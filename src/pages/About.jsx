import React, { useState } from "react";
import knit from '../assets/knit-logo.png'
import front from '../assets/front.png'
import frame from '../assets/frame.png'
import back from '../assets/back.png'
import tool from '../assets/tool.png'
import db from '../assets/mongo-db.png'
import lang from '../assets/coding-folder.png'

const About = () => {

    const [activeCard, setActiveCard] = useState(null);
    const [showMore, setShowMore] = useState(false);

    const techStack = {
        Languages: {
            image: lang,
            technologies: [
                "C++",
                "Python",
                "C",
                "JavaScript",
                "SQL",
            ],
        },

        Frontend: {
            image: front,
            technologies: [
                "HTML 5",
                "CSS",
                "JavaScript",
                "React JS",
                "Tailwind CSS",
                "Next JS",
            ],
        },

        Backend: {
            image: back,
            technologies: [
                "Node.js",
                "Express.js",
                "REST APIs",
                "JWT",
            ],
        },

        Databases: {
            image: db,
            technologies: [
                "MongoDB",
                "PostgreSQL",
                "MySQL",
                "Prisma",
            ],
        },

        Tools: {
            image: tool,
            technologies: [
                "Git",
                "GitHub",
                "VS Code",
                "Postman",
                "Docker",
                "Vercel",
                "Linux",
            ],
        },

        Frameworks: {
            image: frame,
            technologies: [
                "React",
                "Next.js",
                "Express.js",
                "Tailwind CSS",
            ],
        },
    };

    return (
        <section id="about" className="w-full px-4 py-20">

            <div className="max-w-4xl mx-auto">

                {/* ================= HEADER ================= */}

                <div className="border-b border-gray-800 pb-9">


                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-main tracking-tight text-gray-200">
                        Okay, A Little About Me
                    </h1>

                    <div className="mt-7 max-w-3xl space-y-4 text-gray-400 leading-relaxed text-base">

                        <p>
                            Hey, I'm Karthik : ) I'm the kind of person who gets
                            curious about how things actually work.
                        </p>

                        <p className={`${showMore ? "" : "line-clamp-2"}`}>
                            I like learning things from scratch and understanding
                            what's happening behind the scenes. Even when I see
                            something simple, I often end up wondering how it
                            works under the hood.
                            These days, vibe coding is everywhere, but I still
                            enjoy building things myself. And honestly, getting
                            stuck isn't that bad either - I actually enjoy
                            debugging, finding what went wrong, and finally
                            figuring out the solution.
                            This curiosity is what got me more interested in
                            software engineering. I enjoy understanding how
                            things work, solving problems, and building things
                            on my own.
                        </p>

                        <button
                            onClick={() => setShowMore(!showMore)}
                            className="text-gray-300 font-semibold hover:text-gray-400 transition-colors cursor-pointer "
                        >
                            {showMore ? "← Less" : "Show more →"}
                        </button>

                    </div>

                </div>


                {/* ================= WHAT I LIKE BUILDING ================= */}

                <div className="py-13 border-b border-gray-800">

                    <h2 className="text-3xl sm:text-4xl font-main font-bold text-gray-200">
                        What I Like Building
                    </h2>


                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">

                        {/* Frontend */}

                        <div className="group border border-gray-800 rounded-2xl p-4 bg-gray-500/10 hover:-translate-y-1 transition-all  hover:shadow-[0_5px_9px_rgba(156,163,175,0.25)]">

                

                            <h3 className="text-xl font-semibold font-main text-white mt-4">
                                Frontend Development
                            </h3>

                            <p className="text-gray-400 mt-3 leading-tight sm:leading-relaxed">
                                Clean, responsive interfaces with a focus on
                                good structure, usability and a smooth
                                experience across devices.
                            </p>

                        </div>


                        {/* Backend */}

                        <div className="group border border-gray-800 rounded-2xl p-4 bg-gray-500/10 hover:-translate-y-1 transition-all hover:shadow-[0_5px_9px_rgba(156,163,175,0.25)]">

                            

                            <h3 className="text-xl font-semibold font-main text-white mt-4">
                                Backend Development
                            </h3>

                            <p className="text-gray-400 mt-3 leading-tight sm:leading-relaxed">
                                APIs, authentication, databases and server-side
                                logic that power applications behind the
                                scenes.
                            </p>

                        </div>


                        {/* DSA */}

                        <div className="group border border-gray-800 rounded-2xl p-4 bg-gray-500/10 hover:-translate-y-1 transition-all hover:shadow-[0_5px_9px_rgba(156,163,175,0.25)]">

                           

                            <h3 className="text-xl font-semibold font-main text-white mt-4">
                                DSA & Problem Solving
                            </h3>

                            <p className="text-gray-400 mt-3 leading-tight sm:leading-relaxed">
                                Breaking down problems, finding patterns and
                                writing efficient solutions using data
                                structures and algorithms.
                            </p>

                        </div>


                        {/* Competitive Programming */}

                        <div className="group border border-gray-800 rounded-2xl p-4 bg-gray-500/10 hover:-translate-y-1 transition-all hover:shadow-[0_5px_9px_rgba(156,163,175,0.25)]">

                            

                            <h3 className="text-xl font-semibold font-main text-white mt-4">
                                Competitive Programming
                            </h3>

                            <p className="text-gray-400 mt-3 leading-tight sm:leading-relaxed">
                                Practicing under constraints, improving speed
                                and sharpening the problem-solving side of
                                programming.
                            </p>

                        </div>

                    </div>

                </div>


                {/* ================= TECH STACK ================= */}

                <div className="py-10 border-b border-gray-800">

                    {/* Heading */}
                    <h2 className="text-3xl sm:text-4xl font-main font-bold text-gray-200">
                        What I Build With
                    </h2>

                    <p className="mt-3 text-gray-400 max-w-xl">
                        A collection of technologies I use while building,
                        experimenting, and solving problems.
                    </p>


                    {/* Cards */}
                    <div className="mt-9 overflow-x-auto pb-5 scrollbar-hide">

                        <div className="flex gap-4 min-w-max">

                            {Object.entries(techStack).map(
                                ([category, data], index) => {

                                    const isActive = activeCard === index;

                                    return (
                                        <div
                                            key={category}
                                            onClick={() =>
                                                setActiveCard(
                                                    isActive ? null : index
                                                )
                                            }
                                            className={`
                                                tech-card
                                                ${isActive ? "tech-card-active" : ""}

                                                cursor-pointer
                                                rounded-xl
                                                shrink-0

                                                border
                                                border-gray-800

                                                bg-[#080808]

                                                overflow-hidden

                                                shadow-[4px_4px_12px_rgba(156,163,175,0.10)]

                                                hover:border-gray-600
                                            `}
                                        >


                                            {/* Image */}
                                            <div className="flex justify-center items-center mt-3 px-5">

                                                <img
                                                    src={data.image}
                                                    alt={category}
                                                    className="
                                                        w-28
                                                        h-28
                                                        sm:w-32
                                                        sm:h-32

                                                        object-contain

                                                        select-none
                                                        pointer-events-none
                                                    "
                                                />

                                            </div>


                                            {/* Category */}
                                            <div className="px-5 pb-5">

                                                <h3 className="
                                                    text-md
                                                    sm:text-lg
                                                    font-medium
                                                    font-special
                                                    text-gray-200
                                                    text-center
                                                    whitespace-nowrap
                                                ">
                                                    {category}
                                                </h3>


                                                {/* Expanded Content */}
                                                {isActive && (

                                                    <div className="tech-card-content mt-6">

                                                        <div className="
                                                            flex
                                                            flex-wrap
                                                            justify-center
                                                            gap-2
                                                        ">

                                                            {data.technologies.map(
                                                                (tech) => (

                                                                    <span
                                                                        key={tech}
                                                                        className="
                                                                            px-3
                                                                            py-1.5

                                                                            rounded-2xl

                                                                            border
                                                                            border-gray-800

                                                                            bg-black

                                                                            text-sm
                                                                            text-gray-400

                                                                            shadow-[0_2px_6px_rgba(156,163,175,0.20)]

                                                                            hover:text-gray-200
                                                                        "
                                                                    >
                                                                        {tech}
                                                                    </span>

                                                                )
                                                            )}

                                                        </div>

                                                    </div>

                                                )}

                                            </div>

                                        </div>
                                    );
                                }
                            )}

                        </div>

                    </div>


                    {/* Hint */}
                    <div className="flex justify-between items-center">

                        <p className="
                            text-[10px]
                            sm:text-[13px]
                            mr-2
                            text-gray-300
                            mt-1
                            animate-pulse
                        ">
                            Click a card to expand
                        </p>

                    </div>

                </div>


                {/* ================= EDUCATION & EXPLORING ================= */}

                <div className="py-16 border-b border-gray-800">

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                        {/* ================= EDUCATION ================= */}

                        <div className="border border-gray-900 rounded-md hover:-translate-y-1 p-6 bg-gray-500/10 min-h-75 transition-all hover:shadow-[0_4px_10px_rgba(156,163,175,0.2)]">

                            <div className="flex items-center gap-3 mb-8">

                                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                                    Education
                                </span>

                            </div>


                            <h2 className="text-2xl font-bold font-main text-gray-200 mb-8">
                                Where I'm Learning
                            </h2>


                            {/* College */}

                            <div className="flex items-center gap-5">

                                {/* College Logo */}

                                <div className="w-16 h-16 rounded-xl  bg-black flex items-center justify-center overflow-hidden shrink-0">
                                    <a href="https://knit.ac.in/en">
                                        <img
                                            src={knit}
                                            alt="College Logo"
                                            className="w-20 h-20 object-contain"
                                        />
                                    </a>

                                </div>


                                {/* College Details */}

                                <div>

                                    <a href="https://knit.ac.in/en" className=" cursor-pointer text-lg font-semibold font-special text-gray-200">
                                        Kamla Nehru Institute of technology , sultanpur
                                    </a>

                                    <p className="text-sm text-gray-500 mt-1">
                                        B.Tech • Computer Science & Engineering
                                    </p>

                                    <p className="text-sm text-gray-600 mt-1">
                                        2024 — 2028
                                    </p>

                                </div>

                            </div>

                        </div>


                        {/* ================= EXPLORING ================= */}

                        <div className="border border-gray-900 rounded-md hover:-translate-y-1 p-6 bg-gray-500/10 min-h-75 transition-all  hover:shadow-[0_4px_10px_rgba(156,163,175,0.2)]">

                            <div className="flex items-center gap-3 mb-8">


                                <span className="text-xs uppercase tracking-[0.25em] text-gray-500">
                                    Exploring
                                </span>

                            </div>


                            <h2 className="text-2xl font-bold font-main text-gray-200 mb-7">
                                What I'm Exploring
                            </h2>


                            <div className="space-y-4 font-special">

                                <div className="flex items-center justify-between border-b border-gray-800 pb-4">

                                    <span className="text-gray-400 hover:text-gray-300 cursor-context-menu">
                                        Backend Development
                                    </span>
                                </div>


                                <div className="flex items-center justify-between border-b border-gray-800 pb-4">

                                    <span className="text-gray-400 hover:text-gray-300 cursor-context-menu">
                                        Database Design
                                    </span>

                                </div>


                                <div className="flex items-center justify-between border-b border-gray-800 pb-4">

                                    <span className="text-gray-400 hover:text-gray-300 cursor-context-menu">
                                        System Design
                                    </span>

                                </div>


                                <div className="flex items-center justify-between">

                                    <span className="text-gray-400 hover:text-gray-300 cursor-context-menu ">
                                        GenAI
                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>


                {/* ================= CONNECT ================= */}

                <div className="py-13">


                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-main text-gray-200">
                        Got an Idea? Let's Talk.
                    </h2>


                    <p className="text-gray-400 mt-5 max-w-xl leading-relaxed">
                        Have an interesting project, want to collaborate, or
                        simply want to talk about tech? I'm always open to a
                        good conversation.
                    </p>


                    <div className="flex flex-wrap gap-3 mt-8">

                        <a
                            href="#"
                            className="px-5 py-2.5 rounded-full border border-gray-700 text-sm text-gray-300 hover:text-white hover:border-gray-500"
                        >
                            GitHub
                        </a>

                        <a
                            href="#"
                            className="px-5 py-2.5 rounded-full border border-gray-700 text-sm text-gray-300 hover:text-white hover:border-gray-500"
                        >
                            LinkedIn
                        </a>

                        <a
                            href="#"
                            className="px-5 py-2.5 rounded-full border border-gray-700 text-sm text-gray-300 hover:text-white hover:border-gray-500"
                        >
                            Email
                        </a>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default About;