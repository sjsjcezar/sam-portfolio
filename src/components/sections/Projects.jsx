import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
    return <section id="projects" 
    className="min-h-screen flex items-center justify-center py-20"
    >
        <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                Featured Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl text-yellow-500 font-bold mb-2">
                        Friedrich
                    </h3>

                    <p className="text-gray-300 mb-4">
                    Friedrich is a 2D turn-based RPG where players embark on an epic journey to explore the world of Altus, battle formidable enemies, and complete quests. 
                    You take on the role of a hero, mysteriously transported to this realm, tasked with saving it from the scourge of the Demon Lord that threatens to consume the land.
                    </p>

                    <div>
                        {["Unity", "C#"].map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>
                    <div className="flex justify-between items-center">
                    <a href="https://github.com/sjsjcezar/Friedrich-SE2" className="text-gray-500 hover:underline transition-colors hover:text-blue-500 my-4">
                       - Under Development -
                    </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl text-yellow-500 font-bold mb-2">
                        TikTik
                    </h3>

                    <p className="text-gray-300 mb-4">
                        TikTik is a 2D Filipino Horror Game inspired by the game <strong> "No, I'm not a Human" </strong> 
                        where players choose to let in a human or an entity into their house.
                    </p>

                    <div>
                        {["Unity", "C#"].map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>
                    <div className="flex justify-between items-center">
                    <a href="https://github.com/sjsjcezar/TikTik-GameDev2" className="text-blue-500 hover:underline transition-colors hover:text-blue-500 my-4">
                       - View Project -
                    </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl text-yellow-500 font-bold mb-2">
                        Math Warriors
                    </h3>

                    <p className="text-gray-300 mb-4">
                        Math Warriors is a BEED Thesis Project about a 2D Turn-Based Strategy Mobile Game where players 
                        solve math problems <strong>(the order of operations)</strong> to progress through three levels.
                    </p>

                    <div>
                        {["Unity", "C#"].map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>
                    <div className="flex justify-between items-center">
                    <a href="https://github.com/sjsjcezar/PemdasPrototype" className="text-gray-500 hover:underline transition-colors hover:text-blue-500 my-4">
                       - Under Development -
                    </a>
                    </div>
                </div>
                
                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl text-yellow-500 font-bold mb-2">
                        Vote Me Not! [Demo]
                    </h3>

                    <p className="text-gray-300 mb-4">
                        Vote Me Not! is a 2D Satirical Political Mobile Game where players assumes the role of a moral arbiter and choose which politicians to run for office. 
        
                    </p>

                    <div>
                        {["Unity", "C#"].map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>
                    <div className="flex justify-between items-center">
                    <a href="https://github.com/sjsjcezar/Vote-Me-Not" className="text-blue-500 hover:underline transition-colors hover:text-blue-500 my-4">
                       - View Project -
                    </a>
                    </div>
                </div>

                <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-pink-500/30 hover:shadow-[0_0_15px_rgba(59,130,246,0.1)] transition-all">
                    <h3 className="text-xl text-yellow-500 font-bold mb-2">
                    Insurekyson
                    </h3>

                    <p className="text-gray-300 mb-4">
                    Insurekyson is a Filipino-inspired, Warcraft-like 3D steampunk real-time strategy game where players
                    build bases, gather resources, expand their armies, and
                    defeat enemies across a three-part story campaign. 

                    </p>

                    <div>
                        {["Unity", "C#"].map((tech, key) => (
                            <span 
                                key={key}
                                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
                            >
                                {tech}
                            </span>
                        ))}

                    </div>
                    <div className="flex justify-between items-center">
                    <a href="https://dacagames.itch.io/insureksyon" className="text-blue-500 hover:underline transition-colors hover:text-blue-500 my-4">
                       - View Project -
                    </a>
                    </div>
                </div>
            </div>
        </div>
        </RevealOnScroll>
    </section>
};