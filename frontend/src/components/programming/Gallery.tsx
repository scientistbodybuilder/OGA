import { useMemo, useState } from "react";
import AlbumCard from "./gallery/AlbumCard";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

interface Album {
    title: string
    albumCover: string
    id: string
}

const albumData: Record<string, Album[]> = {
    "2025/2026": [
        { title: "Event Photo 1", albumCover: "", id: "1" },
        { title: "Event Photo 2", albumCover: "", id: "2" },
        { title: "Event Photo 3", albumCover: "", id: "3" },
        { title: "Event Photo 4", albumCover: "", id: "4" },
        { title: "Event Photo 5", albumCover: "", id: "5" }
    ],
    "2024/2025": [
        { title: "Event Photo 3", albumCover: "", id: "3" },
        { title: "Event Photo 4", albumCover: "", id: "4" }
    ]
}

const Gallery = () => {
    const years = Object.keys(albumData);
    const [selectedYear, setSelectedYear] = useState(years[0]);
    const selectedAlbums = albumData[selectedYear];
    const albumsPerPage = 3;
    const [albumPage, setAlbumPage] = useState(1);
    const pageCount = Math.ceil(selectedAlbums.length / albumsPerPage);
    const visibleAlbums = useMemo(() => {
        const albumStart = (albumPage - 1) * albumsPerPage;
        return selectedAlbums.slice(albumStart, albumStart + albumsPerPage);
    }, [albumPage, selectedAlbums]);


    return (
        <section id="gallery" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start" >
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Gallery</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">Choose an album to view photos.</h4>
            </div>

            <div className="mb-10 flex items-center gap-3">
                <label htmlFor="past-member-year" className="font-body text-sm font-medium text-[#5f554f]">Academic year</label>
                <select
                    id="past-member-year"
                    value={selectedYear}
                    onChange={(event) => {
                        setSelectedYear(event.target.value);
                        setAlbumPage(1);
                    }}
                    className="min-w-32 rounded-md border border-(--accent-color) bg-transparent px-3 py-2 font-body text-sm text-black outline-none focus:ring-2 focus:ring-(--accent-color)/30"
                >
                    {years.map((year) => <option key={year} value={year}>{year}</option>)}
                </select>
            </div>

            <div className="grid w-full grid-cols-1 auto-rows-[minmax(220px,1fr)] gap-6 sm:grid-cols-2 md:grid-cols-3">
                {visibleAlbums.map((album, index) =>{
                    if (index === 0) {
                        return (<div className="w-full h-full sm:col-span-2 sm:row-span-2">
                                <AlbumCard title={album.title} albumCover={album.albumCover ?? ''} id={album.id} />
                            </div>)
                    } else {
                        return (<div className="w-full h-full">
                            <AlbumCard title={album.title} albumCover={album.albumCover ?? ''} id={album.id} />
                        </div>)
                    }
                })}
            </div>

            {pageCount > 1 && (
                <Pagination className="mt-8">
                    <PaginationContent>
                        <PaginationItem>
                            <PaginationPrevious
                                href="#gallery"
                                aria-disabled={albumPage === 1}
                                className={albumPage === 1 ? "pointer-events-none opacity-50" : undefined}
                                onClick={(event) => {
                                    event.preventDefault();
                                    if (albumPage > 1) setAlbumPage(albumPage - 1);
                                }}
                            />
                        </PaginationItem>
                        {Array.from({ length: pageCount }, (_, index) => {
                            const page = index + 1;
                            return (
                                <PaginationItem key={page}>
                                    <PaginationLink
                                        href="#gallery"
                                        isActive={albumPage === page}
                                        onClick={(event) => {
                                            event.preventDefault();
                                            setAlbumPage(page);
                                        }}
                                    >
                                        {page}
                                    </PaginationLink>
                                </PaginationItem>
                            );
                        })}
                        <PaginationItem>
                            <PaginationNext
                                href="#gallery"
                                aria-disabled={albumPage === pageCount}
                                className={albumPage === pageCount ? "pointer-events-none opacity-50" : undefined}
                                onClick={(event) => {
                                    event.preventDefault();
                                    if (albumPage < pageCount) setAlbumPage(albumPage + 1);
                                }}
                            />
                        </PaginationItem>
                    </PaginationContent>
                </Pagination>
            )}

        </section>
    )
}

export default Gallery