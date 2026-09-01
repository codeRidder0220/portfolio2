import React from "react";
import { Link } from "react-router-dom";
import vid from "../assets/job.mp4"

const ProjectDetails = () => {
    return (
        <section className="min-h-screen bg-black text-gray-200 px-4 py-10">

            <div className="max-w-4xl mx-auto">

                {/* ================= BACK ================= */}

                <Link
                    to="/projects"
                    className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-500
                        hover:text-white
                        transition-colors
                        mb-10
                    "
                >
                    <span>←</span>
                    Back to Projects
                </Link>


                {/* ================= PROJECT HEADER ================= */}

                <div className="mb-8">

                    <div className="flex items-center justify-between gap-4">

                        <div>

                            <p className="
                                text-xs
                                uppercase
                                tracking-[0.3em]
                                text-gray-600
                                font-mono
                                mb-4
                            ">
                                Project / 01
                            </p>

                            <h1 className="
                                text-4xl
                                sm:text-5xl
                                md:text-6xl
                                font-main
                                font-bold
                                text-white
                            ">
                                Job Finder
                            </h1>

                        </div>


                        {/* Project Type */}

                        <span className="
                            hidden
                            sm:block
                            px-4
                            py-2
                            rounded-full
                            border
                            border-gray-700
                            text-xs
                            uppercase
                            tracking-wider
                            text-gray-400
                        ">
                            Frontend
                        </span>

                    </div>

                </div>


                {/* ================= VIDEO / PREVIEW ================= */}

                <div className="
                    relative
                    rounded-2xl
                    border
                    border-gray-800
                    overflow-hidden
                    bg-[#080808]
                    shadow-[0_10px_40px_rgba(156,163,175,0.08)]
                ">

                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full aspect-video object-cover"
                    >
                        <source
                            src={vid}
                            type="video/mp4"
                        />
                    </video>

                </div>


                {/* ================= DESCRIPTION ================= */}

                <div className="
                    mt-12
                    grid
                    grid-cols-1
                    md:grid-cols-[1fr_220px]
                    gap-10
                ">

                    <div>

                        <p className="
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-gray-600
                            font-mono
                            mb-4
                        ">
                            About the project
                        </p>

                        <h2 className="
                            text-2xl
                            sm:text-3xl
                            font-bold
                            text-white
                            mb-5
                        ">
                            Finding jobs without making it feel like work.
                        </h2>

                        <div className="
                            text-gray-400
                            leading-relaxed
                            space-y-4
                        ">

                            <p>
                                Job Finder is a modern job searching platform
                                designed to make exploring career opportunities
                                simple and intuitive.
                            </p>

                            <p>
                                Users can search through available jobs, filter
                                them based on different requirements, explore
                                companies and browse jobs through categories.
                            </p>

                            <p>
                                I built the project mainly to improve my
                                understanding of React, component-based
                                architecture, routing, state management and
                                responsive UI development.
                            </p>

                            <p>
                                The goal was not just to make another job
                                listing website, but to understand how different
                                parts of a real-world frontend application fit
                                together.
                            </p>

                        </div>

                    </div>


                    {/* ================= LINKS ================= */}

                    <div>

                        <p className="
                            text-xs
                            uppercase
                            tracking-[0.25em]
                            text-gray-600
                            font-mono
                            mb-4
                        ">
                            Links
                        </p>


                        <div className="space-y-3">

                            <a
                                href="https://github.com/"
                                target="_blank"
                                rel="noreferrer"
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    px-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-800
                                    text-sm
                                    text-gray-400
                                    hover:text-white
                                    hover:border-gray-600
                                    transition-all
                                "
                            >
                                GitHub
                                <span>↗</span>
                            </a>


                            <a
                                href="#"
                                className="
                                    flex
                                    items-center
                                    justify-between
                                    px-4
                                    py-3
                                    rounded-xl
                                    border
                                    border-gray-800
                                    text-sm
                                    text-gray-400
                                    hover:text-white
                                    hover:border-gray-600
                                    transition-all
                                "
                            >
                                Live Preview
                                <span>↗</span>
                            </a>

                        </div>

                    </div>

                </div>


                {/* ================= TECH USED ================= */}

                <div className="
                    mt-14
                    pt-10
                    border-t
                    border-gray-800
                ">

                    <p className="
                        text-xs
                        uppercase
                        tracking-[0.25em]
                        text-gray-600
                        font-mono
                        mb-5
                    ">
                        Built With
                    </p>


                    <div className="flex flex-wrap gap-3">

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
                            React Router DOM
                        </span>

                        <span className="tech-pill">
                            Context API
                        </span>

                        <span className="tech-pill">
                            Vite
                        </span>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default ProjectDetails;