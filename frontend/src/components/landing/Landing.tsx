import UpcomingEvents from './UpcomingEvents';
import ActionSection from './ActionSection';
import Partners from './Partners';
import Support from './Support'
import Impact from './Impact';
import About from './About';
import History from './History'
import bismillah from '../../assets/images/bismillah2.png'

const LandingPage = () => {


    return (
        <section className='w-full space-y-16 h-full min-h-screen flex flex-col overflow-y-auto bg-(--background-color) pt-14 pb-10 items-center justify-start'>
            <div id="banner1" className="text-center w-full h-80 border px-4 sm:px-8 lg:px-10" style={{background: 'linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.5)), url(https://landezine-award.com/wp-content/uploads/2020/04/UTSC-20.jpg) no-repeat center center / cover fixed'}}>
                <div className="mb-4 mt-12 flex flex-col justify-center items-center gap-4">
                    <img
                        className="h-auto w-[300px] md:w-full max-w-[400px] mx-auto"
                        src={bismillah}
                        alt="Bismillah Image"
                    />
                    <p className="text-white font-medium font-heading text-base md:text-xl m-0"> Our Golden Age</p>
                </div>
            </div>
            
            <div className="w-full space-y-16 h-full flex flex-col px-4 sm:px-8 lg:px-10 items-center justify-start">
                <ActionSection />

                <About />

                <History />

                <Impact />

                <UpcomingEvents />

                <Support />

                <Partners />
            </div>

            

        </section>
    )
}

export default LandingPage