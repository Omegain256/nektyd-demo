'use client';

import { useState } from "react";
import { motion } from "framer-motion";
import { ShieldAlert, Zap, DollarSign, ArrowRight, Check } from "lucide-react";

export default function ConversionEngine() {
    return (
        <section className="py-24 px-6 max-w-7xl mx-auto space-y-32">
            <LiabilityCalculator id="liability" />
            <AntiChaos id="chaos" />
            <CashFlow id="cashflow" />
        </section>
    );
}

function LiabilityCalculator({ id }: { id: string }) {
    const [sites, setSites] = useState(10);
    const estimatedRisk = sites * 12500; // Arbitrary calculation for effect

    return (
        <div id={id} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-emergency/10 border border-emergency/20 text-emergency text-xs font-industrial uppercase tracking-widest">
                    Long-Tail Target: How to stop getting sued for slip and falls
                </div>
                <h2 className="text-4xl md:text-6xl uppercase leading-tight">Instant Slip-and-Fall <br />Liability Protection.</h2>
                <p className="font-sans text-lg text-white/70">
                    Our Snow Removal Software generates GPS-stamped "Service Records" that act as your first line of defense in slip-and-fall litigation.
                    Stop guessing and start proving. Every salt log and site photo is recorded with court-ready precision.
                </p>

                <div className="space-y-4 pt-4">
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center border border-cyan/40">
                            <Check className="w-4 h-4 text-cyan" />
                        </div>
                        <span className="font-sans">GPS-Verified Stamped Photos (Zero-Tolerance Ready)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center border border-cyan/40">
                            <Check className="w-4 h-4 text-cyan" />
                        </div>
                        <span className="font-sans">Real-Time Salt & Material Tracking</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-6 h-6 rounded-full bg-cyan/20 flex items-center justify-center border border-cyan/40">
                            <Check className="w-4 h-4 text-cyan" />
                        </div>
                        <span className="font-sans">LSI Keyword: Site-Clearing Logs & Salt Usage</span>
                    </div>
                </div>
            </div>

            <div className="bg-white/5 border border-white/10 p-8 md:p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-emergency/10 blur-[60px] group-hover:bg-emergency/20 transition-all" />

                <h3 className="text-xl mb-8">Calculate Your Exposure</h3>

                <div className="space-y-8">
                    <div>
                        <label className="block text-sm font-industrial mb-4 opacity-60">Number of Properties</label>
                        <input
                            type="range"
                            min="1"
                            max="100"
                            value={sites}
                            onChange={(e) => setSites(parseInt(e.target.value))}
                            className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emergency"
                        />
                        <div className="flex justify-between mt-2 text-2xl font-industrial">
                            <span>{sites}</span>
                            <span className="text-xs opacity-50 self-end mb-1">PROPERTIES</span>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-white/10">
                        <div className="text-sm font-industrial opacity-60 mb-2">POTENTIAL LIABILITY RISK</div>
                        <div className="text-5xl md:text-7xl font-industrial text-emergency">
                            ${estimatedRisk.toLocaleString()}
                        </div>
                        <p className="text-xs text-white/40 mt-4 font-sans italic">
                            *Strategic SEO Note: Built for the "Zero-Tolerance" Contractor.
                        </p>
                    </div>

                    <button className="w-full py-4 bg-white text-primary font-industrial flex items-center justify-center gap-2 hover:bg-cyan transition-colors">
                        Guarantee My Protection <ArrowRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}

function AntiChaos({ id }: { id: string }) {
    return (
        <div id={id} className="grid md:grid-cols-2 gap-16 items-center">
            <div className="order-2 md:order-1 relative">
                <div className="aspect-square bg-gradient-to-br from-white/5 to-transparent border border-white/10 flex items-center justify-center p-8 overflow-hidden rounded-2xl">
                    <div className="relative w-full h-full bg-primary/40 border border-white/5 rounded-xl shadow-2xl p-4 overflow-hidden">
                        {/* Simulating a dashboard */}
                        <div className="flex justify-between items-center mb-6">
                            <div className="w-1/3 h-2 bg-white/20 rounded-full" />
                            <div className="flex gap-2">
                                <div className="w-2 h-2 rounded-full bg-cyan animate-pulse" />
                                <div className="w-8 h-2 bg-cyan/20 rounded-full" />
                            </div>
                        </div>

                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="flex gap-4 mb-4 items-center">
                                <div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center">
                                    <Zap className="w-4 h-4 text-white/40" />
                                </div>
                                <div className="flex-1 space-y-2">
                                    <div className="w-1/2 h-2 bg-white/20 rounded-full" />
                                    <div className="w-3/4 h-1.5 bg-white/10 rounded-full" />
                                </div>
                            </div>
                        ))}

                        <div className="absolute bottom-4 left-4 right-4 h-24 bg-emergency/10 border border-emergency/20 rounded-lg p-3 flex flex-col justify-between">
                            <div className="text-[10px] font-industrial text-emergency">URGENT: DISPATCH OPTIMIZED</div>
                            <div className="w-3/4 h-4 bg-white/10 rounded flex items-center px-2">
                                <div className="w-full h-1 bg-emergency/40 rounded-full" />
                            </div>
                        </div>
                    </div>

                    <div className="absolute -top-10 -right-10 w-40 h-40 bg-cyan/5 blur-3xl" />
                </div>
            </div>

            <div className="order-1 md:order-2 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan/10 border border-cyan/20 text-cyan text-xs font-industrial tracking-widest uppercase">
                    Problem Target: Snow plow dispatching app
                </div>
                <h2 className="text-4xl md:text-6xl uppercase leading-tight">Automated Snow Plow <br />Route Optimization.</h2>
                <p className="font-sans text-lg text-white/70">
                    Eliminate the 2:00 AM phone tree. Dispatch entire crews to high-priority sites with one tap.
                    Our Real-Time Route Optimization identifies the fastest path through every storm, saving you an average of 2 hours per route.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-6">
                    <div className="p-4 bg-white/5 border border-white/5 space-y-1">
                        <div className="text-2xl font-industrial text-cyan">Cloud-Based</div>
                        <div className="text-[10px] uppercase font-industrial opacity-50">SERVICE MANAGEMENT</div>
                    </div>
                    <div className="p-4 bg-white/5 border border-white/5 space-y-1">
                        <div className="text-2xl font-industrial text-cyan">Enterprise</div>
                        <div className="text-[10px] uppercase font-industrial opacity-50">DISPATCH CONTROL</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

function CashFlow({ id }: { id: string }) {
    return (
        <div id={id} className="grid md:grid-cols-2 gap-16 items-center bg-white/[0.02] border border-white/5 p-8 md:p-20 rounded-[40px]">
            <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-500/10 border border-green-500/20 text-green-500 text-xs font-industrial tracking-widest uppercase">
                    Topical Authority: Winter Service Management
                </div>
                <h2 className="text-4xl md:text-6xl text-white uppercase leading-tight">Cloud-Based Winter <br />Service Management.</h2>
                <p className="font-sans text-lg text-white/70">
                    Generic field service apps don't understand "Per-Inch" billing or "Push-and-Pile" logic. We do.
                    Manage site-clearing logs, salt usage tracking, and sub-contractor portals in one unified interface.
                </p>

                <div className="bg-primary/60 border border-white/10 p-6 rounded-xl flex items-center gap-6 group">
                    <div className="w-16 h-16 rounded-full bg-emergency flex items-center justify-center shadow-lg shadow-emergency/40 group-hover:scale-110 transition-transform">
                        <Check className="w-8 h-8 text-white" />
                    </div>
                    <div>
                        <div className="text-sm font-industrial opacity-50 mb-1">PRO BEYOND JOBBER</div>
                        <div className="text-xl font-industrial">98% FASTER COLLECTIONS</div>
                    </div>
                </div>
            </div>

            <div className="relative">
                <div className="text-center space-y-8">
                    <div className="inline-block px-8 py-4 bg-green-500/10 border border-green-500/20 rounded-full text-green-500 font-industrial text-3xl">
                        +$4,250.00
                    </div>
                    <div className="flex justify-center items-center gap-4">
                        <div className="w-12 h-px bg-white/10" />
                        <div className="font-sans text-white/40 italic">INSTANT INVOICE DELIVERED</div>
                        <div className="w-12 h-px bg-white/10" />
                    </div>
                    <div className="flex flex-col gap-2 max-w-xs mx-auto text-left">
                        {[1, 2, 3].map(i => (
                            <div key={i} className="h-12 bg-white/5 border border-white/5 rounded flex bg-center px-4 items-center justify-between">
                                <div className="w-24 h-2 bg-white/10 rounded-full" />
                                <div className="w-12 h-2 bg-green-500/20 rounded-full" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-green-500/5 blur-[100px] pointer-events-none" />
            </div>
        </div>
    );
}
