import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const OrgStructure = () => {

    return (
        <section id="organizational-structure" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Organizational Structure</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">All levels of operation within Our Golden Age.</h4>
            </div>

            <p className="text-left text-xs sm:text-sm font-medium text-muted-foreground">Alhamdulillah, from the OGA Membership, we have our organization split into separate categories with unique functions in seeking Allah’s Pleasure and Our Golden Age:</p>

            <Accordion defaultValue={["shipping"]} className="w-full">
                <AccordionItem value="shipping">
                    <AccordionTrigger className="font-semibold text-(--accent-color) text-lg sm:text-xl">OGA GLOBAL Ameership (8 Leaders)</AccordionTrigger>
                    <AccordionContent>
                    <ul className="text-md sm:text-lg text-muted-foreground">
                        <li>Ameer, Global President</li>
                        <li>Associate Ameer, Islamic Excellence</li>
                        <li>Associate Ameer, Professional Insights</li>
                        <li>Associate Ameer, Intellectual Plasticity</li>
                        <li>Associate Ameer, Communications and Marketing</li>
                        <li>Associate Ameer, Outreach and Connections</li>
                        <li>Associate Ameer, Event Logistics</li>
                        <li>Associate Ameer, Financing</li>
                    </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="returns">
                    <AccordionTrigger className="font-semibold text-(--accent-color) text-lg sm:text-xl">OGA Chapter Directorship (7 Executives)</AccordionTrigger>
                    <AccordionContent>
                    <ul className="text-md sm:text-lg text-muted-foreground">
                        <li>Chapter President</li>
                        <li>Director, Islamic Awareness</li>
                        <li>Director, Professionalism</li>
                        <li>Director, Intellectualism</li>
                        <li>Director, Communications</li>
                        <li>Director, Outreach</li>
                        <li>Director, Accounting</li>
                    </ul>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="support">
                    <AccordionTrigger className="font-semibold text-(--accent-color) text-lg sm:text-xl">ISPARC Organizing Committee (6 Members)</AccordionTrigger>
                    <AccordionContent>
                    <ul className="text-md sm:text-lg text-muted-foreground">
                        <li>ISPARC Chair</li>
                        <li>Director, i5 Assurance</li>
                        <li>Director, Accounting</li>
                        <li>Director, Coordinations</li>
                        <li>Director, Publishing</li>
                        <li>Director, Outreach</li>
                    </ul>
                    </AccordionContent>
                </AccordionItem>
            </Accordion>

            <p className="text-xs sm:text-sm text-left font-medium text-muted-foreground">As you may see, some roles overlap with each other in responsibilities and some toles may be transitioned to throughout the term (ex: from OGA to ISPARC Accounting). But, it is key that each role is taken seriously and responsibly to reach Allah’s Ridhaa!</p>

        </section>
    )
}

export default OrgStructure