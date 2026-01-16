'use client';

import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const TOTAL_FRAMES = 40;

export default function Hero() {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"],
    });

    // Map scroll progress to frame index
    const frameIndex = useTransform(scrollYProgress, [0, 1], [0, TOTAL_FRAMES - 1]);

    useEffect(() => {
        // Preload images
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= TOTAL_FRAMES; i++) {
            const img = new Image();
            const frameStr = String(i).padStart(3, '0');
            img.src = `/assets/hero-sequence/ezgif-frame-${frameStr}.jpg`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === TOTAL_FRAMES) {
                    setImages(loadedImages);
                }
            };
            loadedImages.push(img);
        }
    }, []);

    useEffect(() => {
        const render = (index: number) => {
            if (images[index] && canvasRef.current) {
                const ctx = canvasRef.current.getContext('2d');
                if (ctx) {
                    canvasRef.current.width = window.innerWidth;
                    canvasRef.current.height = window.innerHeight;

                    const img = images[index];
                    const canvasAspect = canvasRef.current.width / canvasRef.current.height;
                    const imgAspect = img.width / img.height;

                    let drawWidth, drawHeight, offsetX, offsetY;

                    if (canvasAspect > imgAspect) {
                        drawWidth = canvasRef.current.width;
                        drawHeight = drawWidth / imgAspect;
                        offsetX = 0;
                        offsetY = (canvasRef.current.height - drawHeight) / 2;
                    } else {
                        drawHeight = canvasRef.current.height;
                        drawWidth = drawHeight * imgAspect;
                        offsetX = (canvasRef.current.width - drawWidth) / 2;
                        offsetY = 0;
                    }

                    ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
                    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
                }
            }
        };

        return frameIndex.on('change', (v) => {
            render(Math.round(v));
        });
    }, [images, frameIndex]);

    // Initial render when images are loaded
    useEffect(() => {
        if (images.length > 0) {
            const ctx = canvasRef.current?.getContext('2d');
            if (ctx && canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                ctx.drawImage(images[0], 0, 0, canvasRef.current.width, canvasRef.current.height);
            }
        }
    }, [images]);

    return (
        <div ref={containerRef} className="relative h-[400vh] bg-primary">
            <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full object-cover opacity-60"
                />

                <div className="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/40 to-primary pointer-events-none" />

                <motion.div
                    className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 text-center pt-24"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                >
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan/10 border border-cyan/20 text-cyan text-xs font-industrial mb-6 uppercase tracking-widest">
                        The #1 Snow Removal Software for Commercial Contractors
                    </div>
                    <h1 className="text-5xl md:text-8xl mb-6 max-w-6xl leading-tight">
                        Command the Storm with the Industry’s Fastest <br />
                        <span className="text-emergency">Snow Removal Software.</span>
                    </h1>
                    <p className="text-xl md:text-3xl text-white/90 max-w-4xl mb-10 font-sans font-medium">
                        From site maps to instant invoicing, manage the madness of the winter season with Nektyd Demo.
                        Stop losing 2 hours a night to manual dispatch and weeks to billing.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 mb-20">
                        <button className="px-10 py-5 bg-emergency text-white font-industrial text-xl rounded-none hover:bg-emergency/80 transition-colors shadow-2xl shadow-emergency/20">
                            Claim Your Free 2 Hours
                        </button>
                        <button className="px-10 py-5 bg-transparent border-2 border-cyan text-cyan font-industrial text-xl rounded-none hover:bg-cyan hover:text-primary transition-all">
                            Watch Product Demo
                        </button>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-left max-w-4xl w-full border-t border-white/10 pt-10">
                        <div className="space-y-1">
                            <div className="text-xs font-industrial text-cyan">01. PROMOTION</div>
                            <div className="text-sm font-sans opacity-60">Save 15% on Liability Prem.</div>
                        </div>
                        <div className="space-y-1">
                            <div className="text-xs font-industrial text-cyan">02. GUARANTEE</div>
                            <div className="text-sm font-sans opacity-60">Paid in &lt; 24 Hours.</div>
                        </div>
                        <div className="hidden md:block space-y-1">
                            <div className="text-xs font-industrial text-cyan">03. EVIDENCE</div>
                            <div className="text-sm font-sans opacity-60">ASCA-Certified Data.</div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating elements */}
                <motion.div
                    style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, -100]), opacity: useTransform(scrollYProgress, [0, 0.1], [1, 0]) }}
                    className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center"
                >
                    <span className="text-xs uppercase tracking-[0.3em] mb-2 font-industrial">Scroll to Reveal</span>
                    <div className="w-px h-12 bg-gradient-to-b from-cyan to-transparent" />
                </motion.div>
            </div>
        </div>
    );
}
