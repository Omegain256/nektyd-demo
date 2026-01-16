import { Plus } from "lucide-react";

const faqs = [
    {
        question: "What is Winter Service Management software?",
        answer: "Winter Service Management software, like Nektyd Demo, is a specialized platform that automates snow removal operations, including Snow Plow Dispatch, salt tracking, and GPS-verified documentation to reduce liability and speed up invoicing."
    },
    {
        question: "How does Salt Tracking work in Nektyd Demo?",
        answer: "Our Salt Tracking engine uses precise GPS data and operator inputs to record every pound of material dropped. This data is time-stamped and attached to the job record, providing indisputable proof for slip-and-fall defense."
    },
    {
        question: "Can I use 'Automated Invoicing' with any customer?",
        answer: "Yes. Our Automated Invoicing engine is built to handle residential, commercial, and industrial contracts. You can set custom triggers so invoices are sent either immediately upon completion or bundled weekly/monthly."
    },
    {
        question: "Does the Fleet GPS work in low-signal areas?",
        answer: "Absolutely. Nektyd Demo is built on an offline-first architecture. If your drivers enter a zero-signal zone during a storm, the app caches the GPS logs and photo proof locally and syncs them automatically the second signal returns."
    },
    {
        question: "How does Route Optimization save 2 hours a night?",
        answer: "By analyzing real-time traffic, snow accumulation rates, and live vehicle locations, our dispatch engine calculates the most efficient sequence for your fleet. This eliminates backtracking and 'dead miles,' getting your crew home faster."
    },
    {
        question: "Is Nektyd Demo optimized for heavy-snow regions like Chicago or Toronto?",
        answer: "Yes. Our platform is specifically battle-tested for the 'Nor'easters' and 'Alberta Clippers' that hit North America’s snow belts. We provide hyper-localized support and data compliance for contractors in all major snow markets including Chicago, Buffalo, Minneapolis, and Canada."
    }
];

export default function FAQ() {
    return (
        <section className="py-32 px-6 max-w-4xl mx-auto">
            <div className="text-center mb-20 space-y-4">
                <h2 className="text-4xl md:text-6xl uppercase tracking-tighter">Everything You <br />Need to Know.</h2>
                <p className="font-sans text-white/50 text-xl">The technical details behind the world's most aggressive snow software.</p>
            </div>

            <div className="space-y-4">
                {faqs.map((faq, i) => (
                    <details key={i} className="group border border-white/5 bg-white/[0.02] rounded-xl overflow-hidden transition-all duration-300">
                        <summary className="flex items-center justify-between p-6 md:p-8 cursor-pointer list-none">
                            <span className="font-industrial text-lg md:text-xl tracking-tight leading-none pt-1">{faq.question}</span>
                            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
                                <Plus className="w-4 h-4" />
                            </div>
                        </summary>
                        <div className="px-6 md:px-8 pb-8 font-sans text-white/60 leading-relaxed text-lg">
                            {faq.answer}
                        </div>
                    </details>
                ))}
            </div>
        </section>
    );
}
