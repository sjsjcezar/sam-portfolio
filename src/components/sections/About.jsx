import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {

    const frontendSkills = [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Tailwind CSS",
    ];

    const backendSkills = [
        "Unity",
        "C#",
        "C++",
        "Roblox Studio",
        "Luau",
        "Java",
        "Python",
    ];

    return (
        <RevealOnScroll>
        <section id="about" className="min-h-screen flex items-center justify-center py-20">
            <div className="max-w-3xl mx-auto px-4 w-full">
                <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                    About Me
                </h2>

                <div className="glass rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <p className="text-gray-300 mb-8">
                    I’m a Computer Science student with a broad tech stack—but my real passion is Unity game development. I leverage my CS foundation to write clean C# code, build 2D/3D prototypes, optimize performance, and create scalable, engaging experiences. 
                    I also create 2D art, play instruments, and write stories.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {frontendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                                
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Backend Skills</h3>
                            <div className="flex flex-wrap gap-2">
                                {backendSkills.map((tech, key) => (
                                    <span 
                                        key={key}
                                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                            hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">  
                        <h3 className="text-xl font-bold mb-4">Education</h3>
                        <ul className="list-disc list-inside text-gray-300 space-y-2">
                            <li>
                                <strong>Bachelor of Science in Computer Science</strong> - Ateneo de Naga University 
                                (2022–Ongoing)
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">  
                        <h3 className="text-xl font-bold mb-4">Game Development Experience</h3>
                        <div className="space-y-4 text-gray-300">
                            <div>
                                <h4 className="font-semibold text-yellow-500">Lead Developer <strong className="text-white">of Friedrich</strong></h4>
                                <p>
                                    Handled <strong className="text-red-500">95%</strong> of the entire game logic and development process.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-yellow-500">Solo Developer <strong className="text-white">&</strong> <strong className="text-purple-500">2D Artist</strong> 
                                <strong className="text-white"> of Math Warriors</strong></h4>
                                <p>
                                    Currently working on a turn-based strategy game from scratch (mechanics and art), where players solve order-of-operations math problems to advance.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-yellow-500">Lead Developer <strong className="text-white">&</strong> <strong className="text-purple-500">2D Artist</strong> of <strong className="text-white">TikTik</strong></h4>
                                <p>
                                    Spearheaded core features—game logic, UI, and mechanics—for a horror title inspired by “No, I’m Not a Human” as part of a 2D Game Development class.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-yellow-500">Solo Developer <strong className="text-white">&</strong> <strong className="text-purple-500">2D Artist</strong> 
                                <strong className="text-white"> of Vote Me Not (Demo)</strong></h4>
                                <p>
                                    Created a satirical 2D political game solo—designing core gameplay, UI, and art—where players choose moral arbiter roles to select candidates.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-yellow-500">Lead Programmer <strong className="text-white">of</strong> <strong className="text-white">Insurekyson</strong></h4>
                                <p>
                                    Navmesh, AI base-building, quest/dialogue systems, minimap with fog of war, and polished UI—overseeing most core RTS features in this 3D steampunk strategy game.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
        </RevealOnScroll>
    );
};
