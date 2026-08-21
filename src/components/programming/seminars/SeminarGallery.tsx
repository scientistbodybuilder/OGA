import { useMemo, useState } from 'react'
import SeminarCard from './SeminarCard'
import { Button } from "@/components/ui/button"
import { ArrowDownUp, ChevronLeft, ChevronRight, Search, SlidersHorizontal } from 'lucide-react'

const seminars = [
    { date: 'OCT 15', title: 'Ethics in Artificial Intelligence', description: 'Exploring Islamic frameworks for algorithmic bias and data sovereignty in the modern age.', action: 'Register now', category: 'Technology & Ethics', icon: 'sparkles' as const },
    { date: 'NOV 02', title: 'The Al-Andalus Project', description: 'A historical analysis of cross-cultural innovation and the blueprint for future creative ecosystems.', action: 'View details', category: 'History & Culture', icon: 'scale' as const },
    { date: 'DEC 12', title: 'Sustainable Finance Models', description: 'Practical applications of Riba-free investing for the modern high-net-worth professional.', action: 'Notify me', category: 'Finance & Leadership', icon: 'finance' as const },
    { date: 'JAN 18', title: 'The Art of Deep Work', description: 'Building a focused practice and meaningful rhythm for high-impact professional work.', action: 'Register now', category: 'Professional Growth', icon: 'sprout' as const },
    { date: 'FEB 08', title: 'Faith, Science & Discovery', description: 'A thoughtful conversation about curiosity, inquiry, and the responsibility of knowledge.', action: 'View details', category: 'Science & Thought', icon: 'leaf' as const },
    { date: 'MAR 21', title: 'Leading With Ihsan', description: 'Developing principled leadership habits for teams, communities, and the next generation.', action: 'Notify me', category: 'Leadership', icon: 'calendar' as const },
]

const SeminarGallery = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [sortAscending, setSortAscending] = useState(true)
    const [page, setPage] = useState(1)
    const pageSize = 6

    const filteredSeminars = useMemo(() => seminars
        .filter((seminar) => `${seminar.title} ${seminar.description} ${seminar.category}`.toLowerCase().includes(searchTerm.toLowerCase()))
        .sort((first, second) => sortAscending ? first.date.localeCompare(second.date) : second.date.localeCompare(first.date)), [searchTerm, sortAscending])
    const visibleSeminars = filteredSeminars.slice((page - 1) * pageSize, page * pageSize)

    return (
        <section id="seminar-library" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Seminar Library</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-[11px] leading-[1.4] text-[#5f554f]">Focused intensives designed for deep technical and ethical development in your professional field.</h4>
            </div>

            <div className="mb-7 flex w-full flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                <label className="relative w-full sm:max-w-[400px]">
                    <Search aria-hidden="true" className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#c6b8ae]" />
                    <input value={searchTerm} onChange={(event) => { setSearchTerm(event.target.value); setPage(1) }} placeholder="Search seminars..." className="h-8 w-full border border-[#e5ddd7] bg-[#fffaf7] pl-9 pr-3 font-body text-[10px] outline-none placeholder:text-[#b9aaa0] focus:border-(--accent)" />
                </label>
                <div className="flex gap-2 self-end sm:self-auto">
                    <Button variant="outline" onClick={() => setSortAscending((current) => !current)} className="h-8 rounded-none border-[#e5ddd7] bg-transparent px-3 font-body text-[10px] font-normal uppercase text-(--accent-color) hover:bg-[#f3ede7]">
                        <SlidersHorizontal className="h-3 w-3" /> Filter
                    </Button>
                    <Button variant="outline" onClick={() => setSortAscending((current) => !current)} className="h-8 rounded-none border-[#e5ddd7] bg-transparent px-3 font-body text-[10px] font-normal uppercase text-(--accent-color) hover:bg-[#f3ede7]">
                        <ArrowDownUp className="h-3 w-3" /> Sort
                    </Button>
                </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {visibleSeminars.map((seminar) => <SeminarCard key={seminar.title} {...seminar} />)}
            </div>

            <div className="mt-7 flex items-center gap-4 font-body text-[10px] text-black">
                <button aria-label="Previous page" className="p-1 text-(--accent-color) disabled:opacity-40" disabled={page === 1} onClick={() => setPage((current) => current - 1)}><ChevronLeft className="h-3 w-3" /></button>
                <button className="h-6 w-6 bg-(--accent-color) text-white">1</button>
                <button className="h-6 w-6 hover:bg-[#f3ede7]" onClick={() => setPage(2)}>2</button>
                <button className="h-6 w-6 hover:bg-[#f3ede7]" onClick={() => setPage(3)}>3</button>
                <button aria-label="Next page" className="p-1 text-(--accent-color)" onClick={() => setPage((current) => current + 1)}><ChevronRight className="h-3 w-3" /></button>
            </div>
        </section>
    )
}

export default SeminarGallery