
import msa_logo from '../../assets/images/msa-logo.png'

const partners = [
        msa_logo
    ]

const Partners = () => {
    return (
        <section id="partners" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Our Partners</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">We are proud to collaborate with these esteemed organizations.</h4>
            </div>

            <div className='font-body w-full h-auto flex flex-col md:flex-row items-center justify-evenly gap-4 flex-wrap'>
                {partners.map((partner, index) => (
                    <div key={index} className='font-body w-20 lg:w-24 h-auto flex items-center justify-center'>
                        <img className='font-body h-full object-contain rounded-full' src={partner} alt={`Partner ${index + 1}`} />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Partners