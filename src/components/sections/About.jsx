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
                        I am a passionate game developer with expertise in C# and Unity.
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Frontend</h3>
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
                            <h3 className="text-xl font-bold mb-4">Backend</h3>
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
                                            <strong> Bachelor of Science in Computer Science </strong> - Ateneo de Naga University 
                                                (2022-Ongoing)
                                        </li>
                                    </ul>
                                </div>

                                <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">  
                                    <h3 className="text-xl font-bold mb-4"> Game Development Experience</h3>
                                    <div className="space-y-4 text-gray-300">
                                        <div>
                                            <h4 className="font-semibold"> Solo Indie Game Developer</h4>
                                            <p>
                                                Developed 2D and 3D Games using Unity in my free time.
                                            </p>
                                        </div>  

                                        <div>
                                            <h4 className="font-semibold"> Lead Developer and Solo 2D Artist of Friedrich </h4>
                                            <p>
                                                A student-led indie RPG created as part of my final coursework. 
                                                It features a 2D turn-based combat system inspired by classic JRPGs.
                                                
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold"> Solo Developer and Solo 2D Artist of Math Warriors </h4>
                                            <p>
                                                Currently working on Math Warriors, a BEED Thesis Project about a 2D turn-based strategy game where players 
                                                solve math the order of operation math problems to progress through levels.
                                            </p>
                                        </div>  

                                        <div>
                                            <h4 className="font-semibold">Solo Developer of TikTik </h4>
                                            <p>
                                                TikTik is 2D Horror Game inspired by the game <strong> "No, I'm not a Human" </strong> 
                                                where players choose to let in a human or an entity into their house.
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold">Solo Developer and 2D Artist of Vote Me Not [Demo] </h4>
                                            <p>
                                                Vote Me Not is a 2D Satirical Political Game where players assumes the role of a moral arbiter choose which politicians to run for office. 
                                            </p>
                                        </div>

                                        <div>
                                            <h4 className="font-semibold"> Lead Programmer of Insurekyson </h4>
                                            <p>
                                                Insureksyon is a Filipino-inspired, Warcraft-like 3D steampunk real-time strategy game where players
                                                build bases, gather resources, expand their armies, and
                                                defeat enemies across a three-part story campaign.
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