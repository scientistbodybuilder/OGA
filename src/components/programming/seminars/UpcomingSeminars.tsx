import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import SeminarCard from './SeminarCard'
import isparc2024 from '../../../assets/images/isparc-2024.png'
import isparc2026 from '../../../assets/images/isparc-2026.png'

const upcomingSeminars = [
	{
		date: 'JAN 18',
		title: 'The Epistemology of Light',
		description: 'A deep dive into the intersection of optics, philosophy, and spiritual perception in the work of Ibn al-Haytham.',
		action: 'Register',
		category: 'Upcoming seminar',
		image: isparc2024,
	},
	{
		date: 'FEB 05',
		title: 'Urbanism & The Ummah',
		description: 'Reimagining modern city planning through the lens of traditional Islamic community structures and sustainability.',
		action: 'Register',
		category: 'Upcoming seminar',
		image: isparc2026,
	},
	{
		date: 'MAR 12',
		title: 'Bioethics in Medicine',
		description: 'Navigating contemporary medical dilemmas with the Maqasid al-Shariah framework for healthcare professionals.',
		action: 'Register',
		category: 'Upcoming seminar',
		image: isparc2024,
	},
]

const UpcomingSeminars = () => {
	const [page, setPage] = useState(1)

	return (
		<section id="upcoming-seminars" className="w-full max-w-[900px] scroll-mt-20 pb-12">
			<div className="mb-10 flex flex-col items-center">
				<h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Upcoming Seminars</h3>
				<div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
				<h4 className="mt-3 max-w-[300px] text-center font-body text-[11px] leading-[1.45] text-[#5f554f]">Preview our future curriculum and secure your place in our upcoming scholarly intensives.</h4>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{upcomingSeminars.map((seminar) => <SeminarCard key={seminar.title} {...seminar} />)}
			</div>

			<div className="mt-6 flex items-center justify-center gap-4 font-body text-[10px] text-black">
				<button aria-label="Previous page" disabled={page === 1} onClick={() => setPage((current) => current - 1)} className="p-1 text-(--accent-color) disabled:opacity-40"><ChevronLeft className="h-3 w-3" /></button>
				<button aria-current="page" className="h-5 w-5 bg-(--accent-color) text-white">1</button>
				<button onClick={() => setPage(2)} className="h-5 w-5 hover:bg-[#f3ede7]">2</button>
				<button aria-label="Next page" onClick={() => setPage((current) => current + 1)} className="p-1 text-(--accent-color)"><ChevronRight className="h-3 w-3" /></button>
			</div>
		</section>
	)
}

export default UpcomingSeminars
