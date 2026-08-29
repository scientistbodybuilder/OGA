import { useEffect, useState } from 'react'
import HistoryCard from './HistoryCard'

const events = [
    {
        date:"Dec 2 20022",
        summary: "Mohammed travels to Washington D.C. to attend the American Society for Cell Biology 2022 Cell Bio Conference! "
    },
    {
        date: "Dec 6 2022",
        summary: "From 1000s of scientists in practice & training, Mohammed notices <10 visible Muslims, meeting Br. Fadil Iqbal (PhD at IUPUI in Indianapolis), and together giving Da’wah to Convention Centre Staff worker ٱلْحَمْدُ لِلَّٰهِ"
    },
    {
        date: "Dec 7 2022",
        summary: "Mohammed returns back to Toronto, Canada; worried about the growing gap of Muslims in higher-level STEM research."
    },
    {
        date: "Dec 10 2022",
        summary: "Mohammed starts “Muslims in STEM & Beyond” as a WhatsApp group connecting 100s of Muslims across fields!"
    },
    {
        date: "Jan 2 2023",
        summary: "Mohammed gains analytical insights into the goals, needs & ideas for supporting the Community! "
    },
    {
        date: "Jan 15 2023",
        summary: "Mohammed starts his first Community seminar; with the Project is renamed to Our Golden Age! "
    },
    {
        date: "Jan 28 2023",
        summary: "Mohammed completes the 1st edition of Our Golden Age (OGA)’s Constitution!"
    },
    {
        date: "Jan-Aug 2023",
        summary: "OGA continues hosting monthly seminars (as Our-ginal 10) oscillating from Islamically to professionally-enriching topics with 8 guest speakers!"
    },
    {
        date: "Feb 2 2023",
        summary: "Mohammed launches formal team of 3: with Sr. Abrar Medani and Br. Awais Aziz as Directors!"
    },
    {
        date: "March 2023",
        summary: "OGA goes on Facebook, reaching >9k followers globally!"
    },
    {
        date: "Sept 24 2023",
        summary: "Mohammed hosts first Town Hall after completing 10 seminars!"
    },
    {
        date: "Oct 4 2023",
        summary: "OGA starts posting Islamic & professional reminders across socials!"
    },
    {
        date: "Nov 15 2023",
        summary: "OGA partners with UTSC MSA to host monthly career seminars for students post-undergrad!"
    },
    {
        date: "Dec 2023",
        summary: "OGA publishes a linktr.ee, connecting YOU to our socials, seminars & more!"
    },
    {
        date: "Dec 2023",
        summary: "OGA turns 1 year - reaching >2,000 followers!"
    },
    {
        date: "Dec 2023",
        summary: "Mohammed travels back to the US with ASCB Travel Grant to Boston, MA; connecting with Muslims and marketing OGA at ASCB, Harvard & MIT Prayer Spaces + Islamic Society of Boston."
    },
    {
        date: "Dec 2023",
        summary: "OGA starts to plan ISPARC: Islamic Symposium of Professionals in Academia, Research & across Careers, in collaboration with UTSC MSA."
    },
    {
        date: "August 2024",
        summary: "Alhamdulillah, Mohammed successfully defends scaling biology research, completing 3 thesis editions (MSc PhD MSc/PhD) - 600 pages, 200 figures and 1M characters - in 2 years!"
    },
    {
        date: "Sept 27 2024",
        summary: "Mohammed incorporates weekly Surah Al-Kahf recitations as new series called ResoNation in OGA."
    },
    {
        date: "Oct 17 2024",
        summary: "Mohammed develops the i5 Approach; launches the Integrative Intellect series with #1: Islam."
    },
    {
        date: "Oct 30 2024",
        summary: "Mohammed restarts the miSTEMUP series in OGA, with Sr. Mohinur Khamzaaliyeva (Plant Biology)."
    },
    {
        date: "Nov 13 2024",
        summary: "Mohammed continues miSTEMUP in TAing BIOB50 (Ecology) Review; marketing OGA and giving 300 students opportunity to win $25 Cineplex Gift card!"
    },
    {
        date: "Nov 23 2024",
        summary: "OGA & MSA host ISPARC at UTSC Highland Hall - bringing >80 Muslim students, scholars & specialists across the GTA!"
    },
    {
        date: "Jan 2025",
        summary: "Mohammed starts Our Golden Lab - an intense, 40-part laboratory series on Introductory Biology + 3rd year Microbiology at UTSC!"
    },
    {
        date: "Jan 2025",
        summary: "OGA shares 2-year Highlights to the Community!"
    },
    {
        date: "Jan 26 2025",
        summary: "OGA reaches 50 Seminars in the Community!"
    },
    {
        date: "Jan 27 2025",
        summary: "Mohammed prints and presents 3D Model of Masjid Qubra As-Sakhra (Dome of the Rock) at UTSC MSA's OSP Auction Gala!"
    },
    {
        date: "Feb 2025",
        summary: "Mohammed brings Our Golden Lab classes to Toronto Zoo to explore the roles of thermoregulation on animals across 3 habitats!"
    },
    {
        date: "March 2025",
        summary: "Mohammed launches Our Golden Quran series during Ramadhan 1446 to promote daily revisions and reflections on the Noble Quran, one Juz at a time!"
    },
    {
        date: "March 2025",
        summary: "Mohammed shares authentic advice to BIPOC students aspiring in research to the Community of Support at the Temerty Faculty of Medicine at U of T!"
    },
    {
        date: "March 2025",
        summary: "Mohammed leads Taraweeh Salat + Witr at UTSC for the 2nd year!"
    },
    {
        date: "April 2025",
        summary: "Mohammed assesses student reports and exams from Our Golden Lab."
    },
    {
        date: "April 2025",
        summary: "Mohammed continues Our Golden Quran II as Insightful Increments to continue to explore Quran recitation + translation + tafseer post-Ramadhan!"
    },
    {
        date: "May 2025",
        summary: "Mohammed introduces OGA GLOBAL to help distinguish OGA initiatives at the local, regional & international levels!"
    },
    {
        date: "June 2025",
        summary: "OGA launches 1st Chapter at UTSC with team of 5 Directors!"
    },
    {
        date: "August 2025",
        summary: "Mohammed represents OGA at NCCM Summer Summit at TMU Sears Arena, discussing & piloting advocacy projects for Canada + the entire Ummah!"
    },
    {
        date: "August 2025",
        summary: "OGA starts planning ISPARC 2026 at Sam Ibrahim, with UTSC MSA."
    },
    {
        date: "October 2025",
        summary: "OGA collabs with Yaqeen in promoting Because You Believed Canada Tour with discounted tickets for OGA members!"
    },
    {
        date: "November 2025",
        summary: "OGA's ISPARC Coordinator Fatima Varayuri completes ISPARC 2024 Program Booklet here!"
    },
    {
        date: "Dec 2025",
        summary: "OGA partners with International Students in Islamic Psychology (ISIP) in promoting Radiance in Pain & Resilience with Gazan Dr. Samah Jabr - Researcher & Psychiatrist in Mississauga!"
    },
    {
        date: "December 2025",
        summary: "Mohammed completes OGA Chapter Handbook, Tipsheet & Guide to Building Your OGA Chapter."
    },
    {
        date: "December 2025",
        summary: "OGA plans 4th Highlights to Community!"
    }
]

const History = () => {
    const [visibleEvents, setVisibleEvents] = useState<Set<number>>(new Set())

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                setVisibleEvents((currentVisibleEvents) => {
                    const nextVisibleEvents = new Set(currentVisibleEvents)

                    entries.forEach((entry) => {
                        const eventIndex = Number(entry.target.getAttribute('data-event-index'))

                        if (entry.isIntersecting) {
                            nextVisibleEvents.add(eventIndex)
                        }
                    })

                    return nextVisibleEvents
                })
            },
            { threshold: 0.2, rootMargin: '0px 0px -8% 0px' },
        )

        const eventElements = document.querySelectorAll<HTMLElement>('[data-history-event]')
        eventElements.forEach((eventElement) => observer.observe(eventElement))

        return () => observer.disconnect()
    }, [])

    return (
        <section id="history" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">History</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">Discover the journey and milestones that have shaped our organization.</h4>
            </div>

            <ol className="relative w-full px-2 pb-8 md:px-5">
                <div className="absolute bottom-0 left-[1rem] top-0 w-px bg-(--accent-hover) md:left-1/2" aria-hidden="true" />
                {events.map((event, index) => {
                    const isLeft = index % 2 === 0
                    const isVisible = visibleEvents.has(index)

                    return (
                        <li
                            key={`${event.date}-${index}`}
                            data-history-event
                            data-event-index={index}
                            className={`relative mb-8 grid grid-cols-[2rem_1fr] items-start gap-3 last:mb-0 md:grid-cols-[1fr_2rem_1fr] md:gap-8 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'} transition-all duration-700 ease-out`}
                        >
                            <div className="col-start-1 row-start-1 flex justify-center pt-6 md:col-start-2">
                                <span className="relative z-10 size-3 rounded-full border-2 border-(--accent-color) bg-white shadow-[0_0_0_5px_white]" />
                            </div>
                            <div className={`col-start-2 row-start-1 ${isLeft ? 'md:col-start-1' : 'md:col-start-3'}`}>
                                <HistoryCard date={event.date} summary={event.summary} />
                            </div>
                        </li>
                    )
                })}
            </ol>
        </section>
    )
}

export default History