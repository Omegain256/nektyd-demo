'use client';

import { motion, useScroll, useTransform } from "framer-motion";
import { Snowflake, LayoutGrid, PhoneCall } from "lucide-react";

export default function Header() {
    const { scrollY } = useScroll();
    const backgroundColor = useTransform(
        scrollY,
        [0, 100],
        ["rgba(10, 15, 30, 0)", "rgba(10, 15, 30, 0.9)"]
    );
    const backdropBlur = useTransform(
        scrollY,
        [0, 100],
        ["blur(0px)", "blur(12px)"]
    );
    const borderOpacity = useTransform(
        scrollY,
        [0, 100],
        ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"]
    );

    return (
        <motion.header
            style={{ backgroundColor, backdropFilter: backdropBlur, borderBottom: `1px solid ${borderOpacity}` }}
            className="fixed top-0 left-0 w-full z-50 py-4 px-6 md:px-12 flex items-center justify-between transition-all"
        >
            <div className="font-industrial text-3xl tracking-tighter flex items-center gap-2">
                <Snowflake className="w-8 h-8 text-cyan" />
                NEKTYD DEMO.
            </div>

            <nav className="hidden md:flex items-center gap-8">
                <a href="#liability" className="text-sm font-industrial hover:text-cyan transition-colors">Liability</a>
                <a href="#chaos" className="text-sm font-industrial hover:text-cyan transition-colors">Anti-Chaos</a>
                <a href="#cashflow" className="text-sm font-industrial hover:text-cyan transition-colors">Cash Flow</a>
            </nav>

            <div className="flex items-center gap-4">
                <button className="hidden sm:flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-industrial text-sm border border-white/10 transition-all">
                    <LayoutGrid className="w-4 h-4" />
                    Login
                </button>
                <button className="flex items-center gap-2 px-6 py-3 bg-emergency text-white font-industrial text-sm hover:translate-y-[-2px] transition-all shadow-lg shadow-emergency/20">
                    <PhoneCall className="w-4 h-4" />
                    Get Demo
                </button>
            </div>
        </motion.header>
    );
}
