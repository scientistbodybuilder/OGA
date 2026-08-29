

const markers = [
    {
        title:"Scarborough",
        subHeading:"Scarborough, Ontario, Canada",
        coordinates: [] //lat lon
    }
]

const Impact = () => {
    return (
        <section id="impact" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Impact</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">OGA's impact around the world.</h4>
            </div>

            
        </section>
    )
}

export default Impact