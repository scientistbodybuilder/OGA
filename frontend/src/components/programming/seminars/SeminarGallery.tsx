import { useMemo, useState } from 'react'
import SeminarCard from './SeminarCard'
import { Button } from "@/components/ui/button"
import { ArrowDownUp, Search, SlidersHorizontal } from 'lucide-react'
import { useQuery } from "@tanstack/react-query"
import { fetchSeminars, normalizeQuery } from '../../../services/seminarServices'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"

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
    const [tempSearchTerm, setTempSearchTerm] = useState('')
    const [sortAscending, setSortAscending] = useState(true)
    const [page, setPage] = useState(1)
    const pageSize = 6

    const { data, isPending } = useQuery({
            queryKey: [normalizeQuery(searchTerm)],
            queryFn: () => fetchSeminars(searchTerm)
    })
    console.log('data', data)

    // const getSeminars = async (query: string) => {

    //     const { data, isPending } = useQuery({
    //         queryKey: [normalizeQuery(query)],
    //         queryFn: fetchSeminars(query)
    //     })

    // }

    const filteredSeminars = useMemo(() => {
        if (!data) return []
        // .filter((seminar) => `${seminar.title} ${seminar.description} ${seminar.category}`.toLowerCase().includes(searchTerm.toLowerCase()))
        return data.data.sort((first, second) => sortAscending ? first.date.localeCompare(second.date) : second.date.localeCompare(first.date))
    }, [searchTerm, sortAscending,data])
    const visibleSeminars = useMemo(() => filteredSeminars.slice((page - 1) * pageSize, page * pageSize), [filteredSeminars, page, pageSize])
    const pageCount = Math.ceil((data?.count ?? filteredSeminars.length) / pageSize)

    return (
        <section id="seminar-library" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Seminar Library</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">Focused intensives designed for deep technical and ethical development in your professional field.</h4>
            </div>

            <div className="mb-7 flex w-full flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
                <label className="relative w-full sm:max-w-[400px]">
                    <Search aria-hidden="true" className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[#c6b8ae]" />
                    <input 
                        value={tempSearchTerm} 
                        onChange={(event) => { setTempSearchTerm(event.target.value) }} placeholder="Search seminars..." 
                        onKeyDown={(event) => {
                            if (event.key === 'Enter') {
                                setSearchTerm(tempSearchTerm);
                                setPage(1);
                            }
                        }}
                        className="h-8 w-full border rounded-xl border-[#e5ddd7] bg-[#fffaf7] pl-9 pr-3 font-body text-[10px] outline-none placeholder:text-[#b9aaa0] focus:border-(--accent-color)" />
                </label>
                <div className="flex gap-2 self-end sm:self-auto">
                    <Button variant="outline" onClick={() => setSortAscending((current) => !current)} className="h-8 rounded-md cursor-pointer border-[#e5ddd7] bg-transparent px-3 font-body text-[10px] font-normal uppercase text-(--accent-color) hover:bg-[#f3ede7]">
                        <SlidersHorizontal className="h-3 w-3" /> Filter
                    </Button>
                    <Button variant="outline" onClick={() => setSortAscending((current) => !current)} className="h-8 rounded-md cursor-pointer border-[#e5ddd7] bg-transparent px-3 font-body text-[10px] font-normal uppercase text-(--accent-color) hover:bg-[#f3ede7]">
                        <ArrowDownUp className="h-3 w-3" /> Sort
                    </Button>
                </div>
            </div>

            {isPending ? (
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {[...Array(6)].map((_, index) => (
                        <div key={index} className="h-full min-h-[280px] rounded-sm border border-[#e5ddd7] bg-white py-0 shadow-none" />
                    ))}
                </div>
            ) : (
                <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {visibleSeminars?.map((seminar) => <SeminarCard key={seminar.title} url={seminar.youtube_url} {...seminar} />)}
                </div>
            )}

            {pageCount > 1 && (
                <Pagination className="mt-7">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#seminar-library"
                                aria-disabled={page === 1}
                                className={page === 1 ? "pointer-events-none opacity-40" : undefined}
                                onClick={(event) => {
                                    event.preventDefault();
                                    if (page > 1) setPage((current) => current - 1);
                                }}
                            />
                        </PaginationItem>
                        {Array.from({ length: pageCount }, (_, index) => {
                            const pageNumber = index + 1;
                            return (
                                <PaginationItem key={pageNumber}>
                                    <PaginationLink
                                        href="#seminar-library"
                                        isActive={page === pageNumber}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setPage(pageNumber);
                                        }}
                                    >
                                        {pageNumber}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}
                        <PaginationItem>
                            <PaginationNext
                                href="#seminar-library"
                                aria-disabled={page === pageCount}
                                className={page === pageCount ? "pointer-events-none opacity-40" : undefined}
                                onClick={(event) => {
                                    event.preventDefault();
                                    if (page < pageCount) setPage((current) => current + 1);
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}
            
        </section>
    )
}

export default SeminarGallery