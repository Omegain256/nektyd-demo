import { MapPin, ArrowUpRight } from "lucide-react";

const regionalHubs = [
    { city: "Chicago", state: "IL", note: "Lake-effect blizzard management." },
    { city: "Buffalo", state: "NY", note: "Optimized for the 2023 77-inch storm." },
    { city: "Toronto", state: "ON", note: "Full-scale provincial fleet tracking." },
    { city: "Minneapolis", state: "MN", note: "Zero-tolerance industrial sites." },
    { city: "Denver", state: "CO", note: "High-altitude route optimization." },
];

export default function GeoSilo() {
    return (
        <section className="py-32 px-6 bg-white/[0.01] border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-2 gap-20 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cyan/10 border border-cyan/20 text-cyan text-xs font-industrial uppercase mb-6">
                            Regional Dominance
                        </div>
                        <h2 className="text-4xl md:text-7xl uppercase leading-none mb-8">Trusted by Contractors in North America’s <br /><span className="text-emergency">Snow Belts.</span></h2>
                        <p className="font-sans text-xl text-white/50 mb-10">
                            Our software is battle-tested in the harshest environments. From the "Nor'easters" of New England to the "Alberta Clippers" of the Midwest,
                            Nektyd Demo provides the GPS tracking and liability proof needed for extreme winter service.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {["Lake-effect snow", "Nor'easters", "Alberta Clippers", "Zero-Tolerance Sites"].map((tag) => (
                                <span key={tag} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-xs font-industrial opacity-60">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>

                    <div className="space-y-4">
                        {regionalHubs.map((hub) => (
                            <div key={hub.city} className="group p-6 bg-white/5 border border-white/5 hover:border-cyan/40 transition-all flex items-center justify-between">
                                <div className="flex items-center gap-6">
                                    <div className="w-12 h-12 bg-primary flex items-center justify-center border border-white/10 group-hover:bg-cyan group-hover:text-primary transition-all">
                                        <MapPin className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <div className="font-industrial text-xl uppercase tracking-tighter">{hub.city}, {hub.state}</div>
                                        <div className="font-sans text-sm text-white/40">{hub.note}</div>
                                    </div>
                                </div>
                                <ArrowUpRight className="w-6 h-6 opacity-0 group-hover:opacity-100 transition-all text-cyan" />
                            </div>
                        ))}

                        <div className="pt-6">
                            <div className="p-8 bg-emergency/10 border border-emergency/20 rounded-2xl relative overflow-hidden">
                                <div className="relative z-10">
                                    <div className="text-xs font-industrial text-emergency mb-2">CASE STUDY</div>
                                    <div className="text-2xl font-industrial uppercase">How one Chicago team saved $420k in liability using our salt tracking logs.</div>
                                </div>
                                <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emergency blur-3xl opacity-20" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
