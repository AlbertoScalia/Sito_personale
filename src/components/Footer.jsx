import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { BehanceLogo, GithubLogo, LinkedinLogo } from '@phosphor-icons/react';

export default function Footer() {
    return (
        <footer className="relative bg-[#050505] pt-24 pb-12 rounded-t-[4rem] mt-24 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row justify-between gap-12">
                <div className="max-w-sm">
                    <h3 className="font-sans font-bold text-2xl tracking-tighter mb-4">alberto scalia</h3>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Art Director | Graphic & UX/UI Designer | Growth Specialist
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                        </div>
                        <span className="font-mono text-xs text-zinc-400 uppercase tracking-wider">System Operational</span>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-12">
                    <div>
                        <h4 className="text-white text-sm font-bold mb-6 tracking-wide">Esplora</h4>
                        <ul className="flex flex-col gap-3">
                            <li><Link to="/" className="text-zinc-500 hover:text-white transition-colors text-sm">Home</Link></li>
                            <li><Link to="/works" className="text-zinc-500 hover:text-white transition-colors text-sm">Works</Link></li>
                            <li><Link to="/bio" className="text-zinc-500 hover:text-white transition-colors text-sm">Bio</Link></li>
                            <li><Link to="/contact" className="text-zinc-500 hover:text-white transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white text-sm font-bold mb-6 tracking-wide">Social</h4>
                        <div className="flex gap-4">
                            <motion.a
                                whileHover={{ y: -3 }}
                                href="https://www.behance.net/albescalia"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <BehanceLogo size={20} weight="fill" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -3 }}
                                href="https://github.com/AlbertoScalia"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <GithubLogo size={20} weight="fill" />
                            </motion.a>
                            <motion.a
                                whileHover={{ y: -3 }}
                                href="https://www.linkedin.com/in/alberto-scalia/"
                                target="_blank"
                                rel="noreferrer"
                                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
                            >
                                <LinkedinLogo size={20} weight="fill" />
                            </motion.a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between text-xs text-zinc-600 font-mono">
                <p>&copy; {new Date().getFullYear()} Alberto Scalia. Tutti i diritti riservati.</p>
                <p>Designed with High Agency</p>
            </div>
        </footer>
    );
}
