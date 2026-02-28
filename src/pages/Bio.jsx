import { motion } from 'framer-motion';
import LiquidCard from '../components/ui/LiquidCard';
import { Briefcase, GraduationCap, PenNib } from '@phosphor-icons/react';

export default function Bio() {
    const containerVariants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } }
    };

    return (
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen">
            <header className="mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-6"
                >
                    Ti parlo un po' di <span className="text-accent">me!</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-zinc-400 text-xl font-sans max-w-2xl mx-auto"
                >
                    Ovvero: come ho imparato a non preoccuparmi dello spazio bianco e ad amare la sintesi.
                </motion.p>
            </header>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                {/* Sidebar: Skills */}
                <aside className="lg:col-span-4">
                    <LiquidCard className="p-8 sticky top-32">
                        <h2 className="text-sm font-mono text-zinc-500 tracking-widest uppercase mb-8 flex items-center gap-2">
                            <PenNib size={18} weight="duotone" className="text-accent" /> Competenze
                        </h2>

                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xs text-white uppercase font-bold tracking-widest mb-4">Design & Creative</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Adobe InDesign", "Adobe Illustrator", "Photoshop", "Figma", "Affinity"].map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs text-white uppercase font-bold tracking-widest mb-4">UX/UI & AI</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["User Research", "UX Writing", "Wireframing", "UI Design", "Usability Testing"].map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs text-white uppercase font-bold tracking-widest mb-4">Strategy & Growth</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["AI Business Strategy", "Growth Marketing", "Funnel Marketing", "Meta Ads", "Google Ads", "SEO", "Email Marketing", "Prompt Engineering"].map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">{skill}</span>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 className="text-xs text-white uppercase font-bold tracking-widest mb-4">Tech & Data</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["HTML5 & CSS3", "Excel", "SQL", "GA4", "GTM", "Looker Studio", "SAP Business One"].map(skill => (
                                        <span key={skill} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-zinc-300">{skill}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </LiquidCard>
                </aside>

                {/* Main Content: Experience & Education */}
                <div className="lg:col-span-8 flex flex-col gap-16">

                    <motion.section variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-sans font-bold mb-10 flex items-center gap-4">
                            <Briefcase size={28} weight="duotone" className="text-accent" /> Esperienza Professionale
                        </h2>

                        <div className="flex flex-col gap-8 border-l border-white/10 pl-8 ml-4">
                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2022 - Presente</span>
                                <h3 className="text-xl font-bold font-sans text-white mb-1">Art Director</h3>
                                <span className="text-sm font-medium text-accent block mb-3">lay0ut magazine, Forward</span>
                                <p className="text-zinc-400 leading-relaxed">Cerco di bilanciare il rigore editoriale con una visione contemporanea, curando l'identità visiva di testate che spaziano dalla cultura underground all'innovazione scientifica.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2025 - 2026</span>
                                <h3 className="text-xl font-bold font-sans text-white mb-1">Graphic Designer</h3>
                                <span className="text-sm font-medium text-zinc-300 block mb-3">Life Electronics SpA</span>
                                <p className="text-zinc-400 leading-relaxed">Vesto prodotti tech senza dimenticare i codici a barre. Gestisco l'intero ciclo del packaging integrando la creatività con sistemi gestionali complessi come SAP ed EKR KIT.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2021 - Presente</span>
                                <h3 className="text-xl font-bold font-sans text-white mb-1">Freelance Editorial Designer</h3>
                                <span className="text-sm font-medium text-zinc-300 block mb-3">Vari Editori Indipendenti</span>
                                <p className="text-zinc-400 leading-relaxed">Mi prendo cura dell’identità visiva di progetti editoriali che profumano di carta buona e nicchia culturale, curando layout e produzione.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2021 - 2023</span>
                                <h3 className="text-xl font-bold font-sans text-white mb-1">Graphic Design Intern</h3>
                                <span className="text-sm font-medium text-zinc-300 block mb-3">LetteraVentidue Edizioni</span>
                                <p className="text-zinc-400 leading-relaxed">Un'immersione totale nel mondo del libro: dalla scelta della carta alla precisione millimetrica delle griglie tipografiche.</p>
                            </motion.div>
                        </div>
                    </motion.section>

                    <motion.section variants={containerVariants} initial="hidden" whileInView="show" viewport={{ once: true }}>
                        <h2 className="text-2xl font-sans font-bold mb-10 flex items-center gap-4">
                            <GraduationCap size={28} weight="duotone" className="text-accent" /> Formazione
                        </h2>

                        <div className="flex flex-col gap-8 border-l border-white/10 pl-8 ml-4">
                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-accent ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2025 - Presente</span>
                                <h3 className="text-xl font-bold font-sans text-white mb-1">Master in Growth Marketing & Agenti AI</h3>
                                <span className="text-sm font-medium text-accent block mb-3">start2impact</span>
                                <p className="text-zinc-400 leading-relaxed">Un percorso multidisciplinare che unisce marketing strategico, UX/UI design e data analysis con un forte focus sull'intelligenza artificiale. Puoi dare un'occhiata al mio profilo e ai miei progetti  <a href="https://account.start2impact.it/profile/alberto-scalia
" className="text-sm font-medium text-accent block mb-3" >qui.</a></p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2024</span>
                                <h3 className="text-xl font-bold font-sans text-white mb-1">Corso UX Design Completo</h3>
                                <span className="text-sm font-medium text-zinc-300 block mb-3">corsoux.it</span>
                                <p className="text-zinc-400 leading-relaxed">Dove ho capito che un test con un utente vero vale più di mille ore di brainstorming in agenzia.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2023</span>
                                <h3 className="text-xl font-bold font-sans text-white mb-1">Master in Full Stack Web Developer</h3>
                                <span className="text-sm font-medium text-zinc-300 block mb-3">Boolean</span>
                                <p className="text-zinc-400 leading-relaxed">Dove ho smesso di chiedere agli sviluppatori se un design fosse realizzabile e ho iniziato a scrivermi il codice da solo.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2021</span>
                                <h3 className="text-xl font-bold font-sans text-white mb-1">Master in Editoria</h3>
                                <span className="text-sm font-medium text-zinc-300 block mb-3">Scuola del Libro</span>
                                <p className="text-zinc-400 leading-relaxed">Praticamente un master di sopravvivenza per chi vuole stampare cose belle senza farsi venire un esaurimento nervoso tra una bozza e l'altra.</p>
                            </motion.div>

                            <motion.div variants={itemVariants} className="relative">
                                <span className="absolute -left-[45px] top-1 w-3 h-3 rounded-full bg-zinc-700 ring-4 ring-background"></span>
                                <span className="font-mono text-xs text-zinc-500 mb-2 block">2017 - 2020</span>
                                <h3 className="text-xl font-bold font-sans text-white mb-1">Laurea Triennale Design della Comunicazione Visiva</h3>
                                <span className="text-sm font-medium text-zinc-300 block mb-3">Accademia di Belle Arti di Catania</span>
                                <p className="text-zinc-400 leading-relaxed">Le fondamenta di tutto quello che rompo e ricostruisco oggi. Dalla teoria del colore alla tipografia rigida.</p>
                            </motion.div>
                        </div>
                    </motion.section>

                </div>
            </div>
        </main>
    );
}
