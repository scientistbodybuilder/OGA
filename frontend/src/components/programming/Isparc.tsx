import { ArrowDownRight, BookOpen, Compass, Users } from "lucide-react"
import isparc2024 from "@/assets/images/isparc-2024.png"
import isparc2026 from "@/assets/images/isparc-2026.png"
import { HashLink } from "react-router-hash-link"

const Isparc = () => {
    return (
        <section id="isparc" className="w-full max-w-[1100px] scroll-mt-20">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">ISPARC</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">Learn about our annual symposium.</h4>
            </div>
            <div className="relative overflow-hidden rounded-[2px] bg-[#092d4b] text-white shadow-[0_18px_50px_rgba(9,45,75,0.16)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_18%,rgba(70,220,224,0.3),transparent_32%),linear-gradient(115deg,#092d4b_0%,#075b87_55%,#14b8c4_100%)]" />
                <div className="relative grid items-stretch lg:grid-cols-[1.05fr_0.95fr]">
                    <div className="flex flex-col justify-center px-7 py-10 sm:px-12 sm:py-14 lg:px-16 lg:py-16">
                        <p className="mb-5 flex items-center gap-3 font-body text-[10px] font-bold uppercase tracking-[0.24em] text-[#8ce9e7]"><span className="h-px w-8 bg-[#8ce9e7]" /> Our Golden Age presents</p>
                        <h3 className="max-w-[560px] font-heading text-4xl leading-[0.98] sm:text-6xl">ISPARC<span className="text-[#8ce9e7]">.</span></h3>
                        <p className="mt-5 max-w-[500px] font-body text-sm leading-7 text-[#d6f3f3] sm:text-base">The Islamic Symposium of Professionals in Academia, Research, and Across Careers.</p>
                        <p className="mt-5 max-w-[480px] font-heading text-xl italic leading-snug text-white sm:text-2xl">The next wave to Our Golden Age, rooted in Islam and rising one SPARC at a time.</p>
                        <div className="mt-9 flex flex-wrap gap-3">
                            {/* <HashLink smooth to="/programming#seminar-library" className="inline-flex items-center gap-2 bg-white px-4 py-3 font-body text-xs font-bold uppercase tracking-[0.12em] text-[#075b87] transition-colors hover:bg-[#d6f3f3]">Explore seminars <ArrowDownRight className="h-4 w-4" /></HashLink>
                            <HashLink smooth to="/programming#gallery" className="inline-flex items-center gap-2 border border-[#8ce9e7]/60 px-4 py-3 font-body text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-white/10">View the archive</HashLink> */}
                            <a href="https://www.zeffy.com/en-CA/ticketing/isparc-2026-the-next-wave" target="_blank" className="inline-flex items-center gap-2 bg-white px-4 py-3 font-body text-xs font-bold uppercase tracking-[0.12em] text-[#075b87] transition-colors hover:bg-[#d6f3f3]">
                                Register Now
                            </a>
                        </div>
                    </div>
                    <div className="relative min-h-[330px] overflow-hidden border-t border-white/15 lg:min-h-0 lg:border-l lg:border-t-0">
                        <img src={isparc2026} alt="Introducing ISPARC 2026" className="h-full w-full object-cover object-center" />
                        <div className="absolute inset-0 bg-[#063b60]/10 mix-blend-multiply" />
                        {/* <div className="absolute bottom-5 left-5 bg-[#092d4b]/90 px-4 py-3 backdrop-blur-sm"><p className="font-body text-[10px] font-bold uppercase tracking-[0.2em] text-[#8ce9e7]">ISPARC 2026</p><p className="mt-1 font-heading text-lg text-white">A space for the next wave</p></div> */}
                    </div>
                </div>
            </div>

            <div className="grid gap-8 py-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16 lg:py-16">
                <div>
                    <p className="font-body text-[10px] font-bold uppercase tracking-[0.22em] text-(--accent-color)">Why ISPARC</p>
                    <h4 className="mt-3 max-w-[420px] font-heading text-3xl leading-tight text-[#182b35] sm:text-4xl">Where knowledge becomes direction.</h4>
                    <p className="mt-5 max-w-[470px] font-body text-sm leading-7 text-[#5f554f]">ISPARC brings thoughtful Muslims together across disciplines to learn, question, and build with purpose. It is a meeting point for ideas that serve both excellence and community.</p>
                    <div className="mt-7 flex items-center gap-4"><img src={isparc2024} alt="A professional presenting at an ISPARC event" className="h-16 w-24 object-cover" /><p className="max-w-[220px] font-body text-xs leading-5 text-[#5f554f]">Conversations, presentations, and connections that carry forward.</p></div>
                </div>
                <div className="grid gap-3 sm:grid-cols-3">
                    <article className="border-t-2 border-[#0a82a5] bg-white/60 p-5"><BookOpen className="h-5 w-5 text-[#0a82a5]" /><h5 className="mt-8 font-heading text-xl text-[#182b35]">Learn</h5><p className="mt-2 font-body text-xs leading-5 text-[#5f554f]">Go deeper through focused scholarly and professional intensives.</p></article>
                    <article className="border-t-2 border-[#13b8bd] bg-white/60 p-5"><Compass className="h-5 w-5 text-[#13b8bd]" /><h5 className="mt-8 font-heading text-xl text-[#182b35]">Lead</h5><p className="mt-2 font-body text-xs leading-5 text-[#5f554f]">Turn insight into principled action across your field.</p></article>
                    <article className="border-t-2 border-[#8b6753] bg-white/60 p-5"><Users className="h-5 w-5 text-(--accent-color)" /><h5 className="mt-8 font-heading text-xl text-[#182b35]">Connect</h5><p className="mt-2 font-body text-xs leading-5 text-[#5f554f]">Find people who are building a more meaningful future.</p></article>
                </div>
            </div>
        </section>
    )
}

export default Isparc