import { motion } from 'framer-motion';
import { BookOpen, RocketLaunch, CursorClick } from '@phosphor-icons/react';
import LiquidCard from './ui/LiquidCard';

export default function ServicesBento() {
    const staggerContainer = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const itemFade = {
        hidden: { opacity: 0, y: 40 },
        show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 20 } }
    };

    return (
        <section id="filosofia" className="relative py-32 px-6 lg:px-12 w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24 items-center">
                <div>
                    <h2 className="text-4xl md:text-6xl font-sans font-bold tracking-tighter text-balance">
                        "Il design è l'ascolto <br />
                        <span className="text-accent">reso visibile</span>"
                    </h2>
                </div>
                <div>
                    <p className="text-xl text-zinc-400 leading-relaxed font-sans max-w-prose">
                        Ovvero, traduco i tuoi "non so bene cosa voglio, ma lo capisco quando lo vedo" in qualcosa che non faccia piangere i grafici. Scavo in profondità per trovare i valori dei miei clienti, sperando di non trovarci anche dei Comic Sans nascosti.
                    </p>
                </div>
            </div>

            <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
            >
                <motion.div variants={itemFade}>
                    <LiquidCard className="p-8 h-full flex flex-col justify-between group">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                            <BookOpen size={28} weight="duotone" className="text-zinc-400 group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-sans tracking-tight mb-4">Art Direction <br /> & Strategia</h3>
                            <p className="text-zinc-500 font-sans leading-relaxed">
                                Faccio da balia a riviste e collane editoriali, cercando di convincerle che possono essere belle senza perdere la bussola.
                            </p>
                        </div>
                    </LiquidCard>
                </motion.div>

                <motion.div variants={itemFade}>
                    <LiquidCard className="p-8 h-full flex flex-col justify-between group">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                            <RocketLaunch size={28} weight="duotone" className="text-zinc-400 group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-sans tracking-tight mb-4">Brand Identity <br /> & Growth</h3>
                            <p className="text-zinc-500 font-sans leading-relaxed">
                                Progetto marchi (o loghi, chiamali come vuoi) che dovrebbero sopravvivere ai prossimi tre governi e a tutte le mode di TikTok.
                            </p>
                        </div>
                    </LiquidCard>
                </motion.div>

                <motion.div variants={itemFade}>
                    <LiquidCard className="p-8 h-full flex flex-col justify-between group">
                        <div className="w-14 h-14 rounded-2xl bg-zinc-900 border border-zinc-800 flex items-center justify-center mb-8 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors">
                            <CursorClick size={28} weight="duotone" className="text-zinc-400 group-hover:text-accent transition-colors" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold font-sans tracking-tight mb-4">UX/UI <br /> & Conversion</h3>
                            <p className="text-zinc-500 font-sans leading-relaxed">
                                Progetto percorsi digitali così fluidi che l'utente finisce per comprare qualcosa senza nemmeno accorgersene, distratto dalla bellezza dei font.
                            </p>
                        </div>
                    </LiquidCard>
                </motion.div>
            </motion.div>
        </section>
    );
}
