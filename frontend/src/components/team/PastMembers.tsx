import { useState } from "react"
import TeamCard from "./TeamCard"

interface PastMember {
    name: string
    position: string
}

interface PastMemberGroups {
    global: PastMember[]
    chapter: PastMember[]
    isparc: PastMember[]
}

const pastMemberData: Record<string, PastMemberGroups> = {
    "2024/2025": {
        global: [
            { name: "Amina Yusuf", position: "Ameer, Global President" },
            { name: "Omar Hassan", position: "Associate Ameer, Islamic Excellence" },
            { name: "Mariam Ali", position: "Associate Ameer, Professional Insights" },
            { name: "Bilal Ahmed", position: "Associate Ameer, Communications and Marketing" },
        ],
        chapter: [
            { name: "Samira Khan", position: "Chapter President" },
            { name: "Ibrahim Noor", position: "Director, Islamic Awareness" },
            { name: "Huda Malik", position: "Director, Professionalism" },
            { name: "Yasir Rahman", position: "Director, Intellectualism" },
            { name: "Nadia Farooq", position: "Director, Communications" },
            { name: "Tariq Saeed", position: "Director, Outreach" },
        ],
        isparc: [
            { name: "Maryam Osman", position: "ISPARC Chair" },
            { name: "Hamza Idris", position: "Director, Assurance" },
            { name: "Safiya Bashir", position: "Director, Accounting" },
            { name: "Zayd Mahmoud", position: "Director, Coordinations" },
        ],
    },
    "2023/2024": {
        global: [
            { name: "Khadija Saleh", position: "Ameer, Global President" },
            { name: "Adam Kareem", position: "Associate Ameer, Islamic Excellence" },
            { name: "Leila Musa", position: "Associate Ameer, Professional Insights" },
            { name: "Younis Omar", position: "Associate Ameer, Event Logistics" },
        ],
        chapter: [
            { name: "Aisha Ibrahim", position: "Chapter President" },
            { name: "Mustafa Ali", position: "Director, Islamic Awareness" },
            { name: "Rania Saad", position: "Director, Professionalism" },
            { name: "Karim Nasser", position: "Director, Intellectualism" },
            { name: "Sara Hamid", position: "Director, Outreach" },
        ],
        isparc: [
            { name: "Nabil Hassan", position: "ISPARC Chair" },
            { name: "Noor Ahmed", position: "Director, Assurance" },
            { name: "Samiya Yusuf", position: "Director, Publishing" },
        ],
    },
}

const PastMembers = () => {
    const years = Object.keys(pastMemberData)
    const [selectedYear, setSelectedYear] = useState(years[0])
    const selectedMembers = pastMemberData[selectedYear]

    return (
        <section id="past-members" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Past Members</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">Here are the members who have contributed to Our Golden Age in the past.</h4>
            </div>

            <div className="mb-10 flex items-center gap-3">
                <label htmlFor="past-member-year" className="font-body text-sm font-medium text-[#5f554f]">Academic year</label>
                <select
                    id="past-member-year"
                    value={selectedYear}
                    onChange={(event) => setSelectedYear(event.target.value)}
                    className="min-w-32 rounded-md border border-(--accent-color) bg-transparent px-3 py-2 font-body text-sm text-black outline-none focus:ring-2 focus:ring-(--accent-color)/30"
                >
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                </select>
            </div>

            <div className="w-full flex flex-col items-center justify-start gap-6 mb-8">
                <h3 className="font-heading text-xl font-medium text-(--accent-color) md:text-2xl">OGA GLOBAL Ameership ({selectedMembers.global.length} Leaders)</h3>
                <div className="w-full grid grid-cols-1 auto-rows-[minmax(220px,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {selectedMembers.global.map((member) => <TeamCard key={member.name} name={member.name} position={member.position} />)}
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-start gap-6 mb-8">
                <h3 className="font-heading text-xl font-medium text-(--accent-color) md:text-2xl">Chapter Directorship ({selectedMembers.chapter.length} Executives)</h3>
                <div className="w-full grid grid-cols-1 auto-rows-[minmax(220px,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {selectedMembers.chapter.map((member) => <TeamCard key={member.name} name={member.name} position={member.position} />)}
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-start gap-6 mb-8">
                <h3 className="font-heading text-xl font-medium text-(--accent-color) md:text-2xl">ISPARC Organizing Committee ({selectedMembers.isparc.length} Members)</h3>
                <div className="w-full grid grid-cols-1 auto-rows-[minmax(220px,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {selectedMembers.isparc.map((member) => <TeamCard key={member.name} name={member.name} position={member.position} />)}
                </div>
            </div>
        </section>
    )
}

export default PastMembers