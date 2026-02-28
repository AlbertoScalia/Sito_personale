import { motion } from 'framer-motion';
import LiquidCard from '../components/ui/LiquidCard';
import MagneticButton from '../components/ui/MagneticButton';

const allProjects = [
    {
        title: "Le chitarre del Pedrollo",
        subtitle: "Progetto editoriale focalizzato sulla liuteria per il Conservatorio di Vicenza.",
        image: "/Sito_personale/assets/images/project1.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://www.industriaeletteratura.it/prodotto/le-chitarre-del-pedrollo/"
    },
    {
        title: "Rivista Forward",
        subtitle: "Art direction e design per un progetto di horizon scanning sanitario e multimediale.",
        image: "/Sito_personale/assets/images/project2.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://forward.recentiprogressi.it/it/"
    },
    {
        title: "lay0ut magazine – senza scheletro",
        subtitle: "Lavoro di art direction e impaginazione sperimentale per lay0ut magazine.",
        image: "/Sito_personale/assets/images/project3.webp",
        badges: ["Art Direction", "Editorial Design", "Layout"],
        link: "https://www.layoutmagazine.it/senza-scheletro-il-nuovo-cartaceo-di-leiaut-megasin/"
    },
    {
        title: "Cassandra – Poster",
        subtitle: "Comunicazione visiva basata su tipografia audace e forti contrasti cromatici.",
        image: "/Sito_personale/assets/images/project4.webp",
        badges: ["Graphic Design", "Poster Art"],
        link: "https://www.behance.net/gallery/210458155/Cassandra-Poster-promozionale"
    },
    {
        title: "Libri Flaco Edizioni Group",
        subtitle: "Progettazione layout interno per manualistica tecnica (SEO, Web Marketing).",
        image: "/Sito_personale/assets/images/project5.webp",
        badges: ["Editorial Design", "Layout"],
        link: "https://www.flacoedizioni.com"
    },
    {
        title: "Glacier – Prototype app",
        subtitle: "Progettazione UX/UI per un'applicazione di viaggi nei Paesi Nordici.",
        image: "/Sito_personale/assets/images/project6.webp",
        badges: ["UX/UI Design", "App Design"],
        link: "https://www.behance.net/gallery/210705375/Glacier"
    },
    {
        title: "Eclecta — Marchio e Norme",
        subtitle: "Sviluppo di brand identity e manuale d'uso editoriale coerente tra stampa e web.",
        image: "/Sito_personale/assets/images/project7.webp",
        badges: ["Brand Identity", "Typography"],
        link: "https://www.behance.net/gallery/122876217/Eclecta-marchio-e-norme-editoriali-"
    },
    {
        title: "Social Identity Socrates",
        subtitle: "Visual identity e creative strategy per la narrazione culturale attraverso lo sport.",
        image: "/Sito_personale/assets/images/project8.webp",
        badges: ["Social Media", "Branding"],
        link: "https://www.behance.net/gallery/210490221/Socrates-Sport-Storie-Societa"
    },
    {
        title: "Evaporato in una nuvola rossa",
        subtitle: "Identità visiva per una mostra in ricordo di Fabrizio De André.",
        image: "/Sito_personale/assets/images/project9.webp",
        badges: ["Visual Art", "Photography"],
        link: "https://www.behance.net/gallery/117560683/EVAPORATO-in-una-NUVOLA-ROSSA"
    }
];

export default function Works() {
    return (
        <main className="pt-40 pb-20 px-6 lg:px-12 w-full mx-auto max-w-7xl min-h-screen">
            <header className="mb-24 text-center">
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className="text-5xl md:text-7xl font-sans font-bold tracking-tighter mb-6"
                >
                    La mia esperienza <br />
                    <span className="text-accent text-4xl md:text-6xl">(e le mie occhiaie)</span>
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.1 }}
                    className="text-zinc-400 text-xl font-sans max-w-2xl mx-auto"
                >
                    Pochi fronzoli, molta sintesi: ecco gli ultimi lavori che ce l'hanno fatta.
                </motion.p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {allProjects.map((project, idx) => (
                    <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        key={idx}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ delay: (idx % 3) * 0.1, type: "spring", stiffness: 100, damping: 20 }}
                        className="group block"
                    >
                        <LiquidCard className="p-2 h-full flex flex-col rounded-[2rem]">
                            <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden bg-zinc-900 mb-6">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            <div className="px-4 pb-6 mt-auto">
                                <h3 className="text-xl font-bold font-sans tracking-tight mb-2 group-hover:text-accent transition-colors">{project.title}</h3>
                                <p className="text-zinc-400 text-sm mb-6 leading-relaxed">{project.subtitle}</p>

                                <div className="flex flex-wrap gap-2">
                                    {project.badges.map((badge, bIdx) => (
                                        <span key={bIdx} className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-zinc-300 font-mono">
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </LiquidCard>
                    </motion.a>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="mt-24 text-center"
            >
                <a href="https://www.behance.net/gallery/244847487/Personal-Portfolio-2021-2026" target="_blank" rel="noopener noreferrer">
                    <MagneticButton className="bg-white text-black hover:bg-zinc-200">
                        Guarda il portfolio completo su Behance
                    </MagneticButton>
                </a>
            </motion.div>
        </main>
    );
}
