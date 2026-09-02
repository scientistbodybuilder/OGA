import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BiDonateHeart } from "react-icons/bi";
import { IoShareSocialOutline } from "react-icons/io5";
import { PiHandsPraying } from "react-icons/pi";
// import { Button } from '@/components/ui/button'

const support = [
    {
        title: "Become a Member",
        desc:"By joining our Membership ($10/year) OR donating any amount to support our community’s ongoing Programming through this link/our email below!",
        icon: <BiDonateHeart className="text-(--accent-color) h-8 w-8" />
    },
    {
        title:"Engage Socials",
        desc:"By following, engaging and sharing our socials and posts across your feed on Facebook, Instagram, LinkedIn and WhatsApp via our Linktr.ee here!",
        icon: <IoShareSocialOutline className="text-(--accent-color) h-8 w-8" />
    },
    {
        title:"Join a Chapter",
        desc:"By starting or joining an OGA Chapter in your Community to amplify OGA’s Vision through ongoing programming in your locality through the link here!",
        icon: <PiHandsPraying className="text-(--accent-color) h-8 w-8" />
    }
]

const Support = () => {

    return (
        <section id="support" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Support</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">How you can support us.</h4>
            </div>

            <div className="w-full grid md:grid-cols-3 gap-3 place-items-center">
                {support.map((item,index) => (
                    <Card key={index} className="h-full min-h-[280px] max-w-[350px] rounded-sm border border-[#e5ddd7] bg-white py-0 shadow-none transition-transform duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(96,68,24,0.08)]">
                        <CardHeader className="flex flex-row items-center justify-between px-5 pt-5 pb-0">
                            <CardTitle className="max-w-[220px] font-heading text-xl sm:text-lg md:text-xl leading-[1.12] font-medium text-black truncate">{item.title}</CardTitle>
                            {item.icon}
                        </CardHeader>
                        <CardContent className="flex h-full flex-col px-5 pb-5">
                            <div>                                
                                <p className="mt-3 font-body text-sm xs:text-xs md:text-sm leading-[1.55] text-[#5f554f]">{item.desc}</p>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            <a target='_blank' href='https://docs.google.com/forms/d/e/1FAIpQLSdEJ3yzF5S11Vt49_4vlpMzN_Jhf9QiM-L3QZO1Bf92tZl5iA/closedform' className="bg-(--accent-color) mt-4 text-white text-sm md:text-base rounded-full font-body cursor-pointer py-3 px-4 transition duration-300 hover:bg-(--accent-hover)">
                Become a Member
            </a>

        </section>
    )
}

export default Support