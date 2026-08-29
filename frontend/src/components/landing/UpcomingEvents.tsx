import { HashLink } from 'react-router-hash-link'
import InstagramCard from '../programming/InstagramCard'

const upcomingEvents = [
    'https://www.instagram.com/p/DaTEveugOB9/',
	'https://www.instagram.com/p/DV9fEHNjmDM/',
	'https://www.instagram.com/p/DZNd0cTldPf/?img_index=1',
]


const UpcomingEvents = () => {

    return (
        <section id="upcoming-events" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Upcoming Events</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">Browse our upcoming events and join us!</h4>
            </div>

            <div className="w-full flex-col justify-start items-center gap-4">
                <div className="w-full flex items-center justify-end mb-4">
                    <HashLink smooth to="/programming#upcoming-seminars" className="text-(--accent-color) hover:text-(--accent-hover)">
                        Browse All Events
                    </HashLink>
                </div>
                
                <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-4">
                    {upcomingEvents.map((url, index) => (
                        <article key={index} className="w-full h-full relative min-h-84 overflow-hidden rounded-lg bg-white shadow-[0_8px_24px_rgba(96,68,24,0.08)]">
                            <InstagramCard url={url} />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default UpcomingEvents