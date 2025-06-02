// src/components/sections/Home.jsx
import React from 'react';
import { RevealOnScroll } from '../RevealOnScroll';

export const Home = () => {
    return (
        <section 
            id="home" 
            className="min-h-screen flex items-center justify-center relative px-4"
        >

            <RevealOnScroll>
            <div className="text-center z-10 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-200 to-purple-300 bg-clip-text text-transparent">
                    Hello, I'm Samuel Joseph Cezar!
                </h1>

                <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-lg mx-auto">
                    I am an 
                    <strong className="text-blue-500/100"> indie game developer</strong> specializing in Unity 2D/3D experiences. 
            
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a 
                        href="#projects" 
                        className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
                    >
                        View Projects
                    </a>

                    <a 
                        href="#contact" 
                        className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)] hover:bg-blue-500/10"
                    >
                        Contact Me
                    </a>
                </div>
            </div>
            </RevealOnScroll>
        </section>
    );
};
