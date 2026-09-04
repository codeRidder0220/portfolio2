import React from "react";
import { Link } from "react-router-dom";
import job from "../assets/jobb.png"
import pro from "../assets/pro2.png"
import Reveal from "./Reveal";
import RightReveal from "./RightReveal";


const Pro = () => {
    return (
        <section className="min-h-screen bg-black text-gray-200 px-4 py-16">

            <div className="max-w-4xl mx-auto">

                {/* ================= HEADER ================= */}
                <Reveal>
                <div className="mb-14">

                    <p className="text-xs uppercase tracking-[0.3em] text-gray-600 font-mono mb-4">
                        Selected Work
                    </p>

                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-main font-bold tracking-tight text-gray-200">
                        Things I've Built.
                    </h1>

                    <p className="mt-5 text-gray-500 max-w-xl leading-relaxed">
                        A few things I've built while learning, experimenting,
                        breaking things, and figuring out how to build them better.
                    </p>

                </div>
                </Reveal>


                {/* ================= PROJECT CARD ================= */}
                <Reveal>
                <div className="
                    relative
                    rounded-2xl
                    border
                    border-gray-800
                    bg-[#080808]
                    overflow-hidden
                    shadow-[0_8px_30px_rgba(156,163,175,0.08)]
                    mb-20
                ">

                    {/* Project Type */}

                    <div className="
                        absolute
                        top-80
                        sm:top-4
                        right-4
                        z-10
                        px-3
                        py-1.5
                        rounded-full
                        border
                        border-[#b6780c]
                        bg-[#b6780c]/20
                        backdrop-blur-md
                        text-[11px]
                        uppercase
                        tracking-wider
                        text-[#fdb435]
                    ">
                        Frontend
                    </div>


                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* ================= IMAGE ================= */}

                        <div className="
                            min-h-75
                            md:min-h-90
                            bg-[#0d0d0d]
                            overflow-hidden
            
                        ">

                            <img
                                src={job}
                                alt="Job Finder Project"
                                className="
                                    w-full
                                    h-full
                                    min-h-75
                                    md:min-h-90
                                    object-cover
                                    
                                "
                            />


                        </div>


                        {/* ================= DETAILS ================= */}

                        <div className="
                            p-7
                            sm:p-9
                            flex
                            flex-col
                            justify-between
                            min-h-75
                            md:min-h-90
                        ">

                            <div>

                                <p className="text-xs text-gray-600 font-mono mb-5">
                                    01
                                </p>

                                <h2 className="
                                    text-2xl
                                    sm:text-3xl
                                    font-main
                                    font-bold
                                    text-gray-200
                                ">
                                    Job <span className="text-[#D97706]">Finder</span>
                                </h2>

                                <p className="
                                    mt-4
                                    text-sm
                                    sm:text-base
                                    text-gray-400
                                    leading-relaxed
                                ">
                                    A modern job searching platform where users
                                    can explore jobs, filter opportunities,
                                    browse companies and discover different
                                    career categories.
                                </p>


                                {/* Technologies */}

                                <div className="flex flex-wrap gap-2 mt-6">

                                    <span className="tech-pill">
                                        React
                                    </span>

                                    <span className="tech-pill">
                                        JavaScript
                                    </span>

                                    <span className="tech-pill">
                                        Tailwind CSS
                                    </span>

                                    <span className="tech-pill">
                                        React Router
                                    </span>

                                </div>

                            </div>


                            {/* Arrow */}

                            <div className="flex justify-end mt-8">

                                <Link
                                    to="/projects/job-finder"
                                    className="
                                        group
                                        w-12
                                        h-12
                                        rounded-full
                                        border
                                        border-gray-700
                                        flex
                                        items-center
                                        justify-center
                                        text-gray-400
                                        hover:text-[#D97706]
                                        hover:border-gray-500
                                        transition-all
                                    "
                                >

                                    <span className="
                                        text-xl
                                        transition-transform
                                        group-hover:translate-x-1
                                    ">
                                        →
                                    </span>

                                </Link>

                            </div>

                        </div>

                    </div>

                </div>
                </Reveal>
                {/* ================= PROJECT CARD -2 ================= */}
                <Reveal>
                <div className="
                
                    relative
                    rounded-2xl
                    border
                    border-gray-800
                    bg-[#080808]
                    overflow-hidden
                    shadow-[0_8px_30px_rgba(156,163,175,0.08)]
                ">

                    {/* Project Type */}

                    {/* <div className="
                        absolute
                        top-4
                        right-4
                        z-10
                        px-3
                        py-1.5
                        rounded-full
                        border
                        border-[#b6780c]
                        bg-[#b6780c]/20
                        backdrop-blur-md
                        text-[11px]
                        uppercase
                        tracking-wider
                        text-[#fdb435]
                    ">
                        Frontend
                    </div> */}


                    <div className="grid grid-cols-1 md:grid-cols-2">

                        {/* ================= IMAGE ================= */}

                        <div className="
                            min-h-75
                            md:min-h-90
                            bg-[#0d0d0d]
                            overflow-hidden
            
                        ">

                            <img
                                src={pro}
                                alt="Job Finder Project"
                                className="
                                    w-full
                                    h-full
                                    min-h-75
                                    md:min-h-90
                                    object-cover
                                    
                                "
                            />


                        </div>


                        {/* ================= DETAILS ================= */}

                        <div className="
                            p-7
                            sm:p-9
                            flex
                            items-center
                            justify-center
                            min-h-75
                            md:min-h-90
                        ">

                            <div>

                                <p className="text-xs text-gray-600 font-mono mb-5">
                                    02
                                </p>
                                <div className="flex items-center justify-center">
                                    <h1 className="text-4xl text-gray-500 md:text-6xl font-nav font-bold tracking-[4px]">In Progress...</h1>
                                </div>

                                {/* <h2 className="
                                    text-2xl
                                    sm:text-3xl
                                    font-main
                                    font-bold
                                    text-gray-200
                                ">
                                    Job <span className="text-[#D97706]">Finder</span>
                                </h2> */}

                                {/* <p className="
                                    mt-4
                                    text-sm
                                    sm:text-base
                                    text-gray-400
                                    leading-relaxed
                                ">
                                    A modern job searching platform where users
                                    can explore jobs, filter opportunities,
                                    browse companies and discover different
                                    career categories.
                                </p> */}


                                {/* Technologies */}

                                {/* <div className="flex flex-wrap gap-2 mt-6">

                                    <span className="tech-pill">
                                        React
                                    </span>

                                    <span className="tech-pill">
                                        JavaScript
                                    </span>

                                    <span className="tech-pill">
                                        Tailwind CSS
                                    </span>

                                    <span className="tech-pill">
                                        React Router
                                    </span>

                                </div> */}

                            </div>


                            {/* Arrow */}

                            {/* <div className="flex justify-end mt-8">

                                <Link
                                    to="/projects/job-finder"
                                    className="
                                        group
                                        w-12
                                        h-12
                                        rounded-full
                                        border
                                        border-gray-700
                                        flex
                                        items-center
                                        justify-center
                                        text-gray-400
                                        hover:text-[#D97706]
                                        hover:border-gray-500
                                        transition-all
                                    "
                                >

                                    <span className="
                                        text-xl
                                        transition-transform
                                        group-hover:translate-x-1
                                    ">
                                        →
                                    </span>

                                </Link>

                            </div> */}

                        </div>

                    </div>

                </div>
                </Reveal>

            </div>

        </section>
    );
};

export default Pro;