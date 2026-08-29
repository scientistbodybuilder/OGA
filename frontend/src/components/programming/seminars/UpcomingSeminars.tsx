import {
  Dialog,
  DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import InstagramCard from '../InstagramCard'
const upcomingSeminars = [
	'https://www.instagram.com/p/DaTEveugOB9/',
	'https://www.instagram.com/p/DV9fEHNjmDM/',
	'https://www.instagram.com/p/DZNd0cTldPf/?img_index=1',
	'https://www.instagram.com/p/DaYGKopE8pZ/?img_index=1',
	'https://www.instagram.com/p/DYK3VTyla9L/?img_index=1',
	'https://www.instagram.com/p/DXo0KLAFaFk/?img_index=1',
	'https://www.instagram.com/p/DXYHzXSuJFC/',
	'https://www.instagram.com/p/DWzBK1PESKS/',
	'https://www.instagram.com/p/DWg3u13GNN9/',
	'https://www.instagram.com/p/DU05RZ5jQKl/',
	'https://www.instagram.com/p/DOCt4V-jn5l/',
	'https://www.instagram.com/p/DKcVbWeT1jN/?img_index=1',
	'https://www.instagram.com/p/DI7FPRivPf9/?img_index=1',
	'https://www.instagram.com/p/DInOJvasFk3/',
	'https://www.instagram.com/p/DIkrv1WMQ2g/'
]

const getInstagramEmbedUrl = (postUrl: string) => {
	const url = new URL(postUrl)
	url.search = ''
	url.pathname = `${url.pathname.replace(/\/$/, '')}/embed`
	return url.toString()
}

// const getInstagramThumbnail = (postUrl: string) => {
//   const url = new URL(postUrl)
//   url.search = ''
//   url.pathname = `${url.pathname.replace(/\/$/, '')}/media/`
//   url.searchParams.set('size', 'l')
//   return url.toString()
// }

const UpcomingSeminars = () => {
	return (
		<section id="upcoming-seminars" className="w-full max-w-[1100px] scroll-mt-20 pb-12">
			<div className="mb-10 flex flex-col items-center">
				<h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Upcoming Seminars</h3>
				<div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
				<h4 className="mt-3 max-w-[300px] text-center font-body text-sm leading-[1.45] text-[#5f554f]">Preview our future curriculum and secure your place in our upcoming scholarly intensives.</h4>
			</div>

			<div className="grid grid-cols-1 auto-rows-[minmax(220px,1fr)] gap-3 sm:grid-cols-2 lg:grid-cols-4">
				{upcomingSeminars.map((postUrl, index) => (

					<article
						key={postUrl}
						className={`relative min-h-0 overflow-hidden rounded-lg bg-white shadow-[0_8px_24px_rgba(96,68,24,0.08)] ${index % 5 === 0 ? 'sm:col-span-2 sm:row-span-2' : ''}`}
					>
						<InstagramCard url={postUrl} />
					</article>
				))}
			</div>
		</section>
	)
}

export default UpcomingSeminars
