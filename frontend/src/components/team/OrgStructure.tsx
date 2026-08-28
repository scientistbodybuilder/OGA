import TeamCard from "./TeamCard"

const globalStructure = [
    {
        name: 'John Doe',
        position:'Ameer, Global President'
    },
    {
        name: 'Jane Smith',
        position: 'Associate Ameer, Islamic Excellence'
    },
    {
        name:'Bob Johnson',
        position: 'Associate Ameer, Professional Insights'
    },
    {
        name:'Alice Williams',
        position: 'Associate Ameer, Intellectual Plasticity'
    },
    {
        name:'Charlie Brown',
        position: 'Associate Ameer, Communications and Marketing'
    },
    {
        name:'Diana Davis',
        position: 'Associate Ameer, Outreach and Connections'
    },
    {
        name:'Eve Wilson',
        position: 'Associate Ameer, Event Logistics'
    },
    {
        name:'Frank Miller',
        position: 'Associate Ameer, Financing'
    }
]

const ogaChapterDirectorStructure = [
    {
        name:'Abdul',
        position:'Chapter President'
    },
    {
        name:'Walid',
        position:'Director, Islamic Awareness'
    },
    {
        name:'Mohammed',
        position:'Director, Professionalism'
    },
    {
        name:'Fatima',
        position:'Director, Intellectualism'
    },
    {
        name:'Zainab',
        position:'Director, Communications'
    },
    {
        name:'Hassan',
        position:'Director, Outreach'
    },
    {
        name:'Khalid',
        position:'Director, Accounting'
    }
]

const isparcOrganizingCommittee = [
    {
        name:'Yusuf',
        position:'ISPARC Chair'
    },
    {
        name:'Rashid',
        position:'Director, Assurance'
    },
    {
        name:'Layla',
        position:'Director, Accounting'
    },
    {
        name:'Ahmed',
        position:'Director, Coordinations'
    },
    {
        name:'Moses',
        position:'Director, Publishing'
    },
    {
        name:'Sarah',
        position:'Director, Outreach'
    }
]

const OrgStructure = () => {
    return (
        <section id="organizational-structure" className="w-full max-w-[1100px] scroll-mt-20 flex flex-col items-center justify-start">
            <div className="mt-2 mb-11 flex flex-col items-center">
                <h3 className="font-heading text-3xl font-medium text-black md:text-[34px]">Organizational Structure</h3>
                <div className="mt-2 h-0.5 w-44 bg-(--accent-color)" />
                <h4 className="mt-4 max-w-[330px] text-center font-body text-sm leading-[1.4] text-[#5f554f]">All levels of operation within Our Golden Age.</h4>
            </div>

            <div className="w-full flex flex-col items-center justify-start gap-6 mb-8">
                <h3 className="font-heading text-xl font-medium text-(--accent-color) md:text-2xl">OGA GLOBAL Ameership (8 Leaders)</h3>

                <div className="w-full grid grid-cols-1 auto-rows-[minmax(220px,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {globalStructure.map((member) => (<TeamCard name={member.name} position={member.position} />))}
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-start gap-6 mb-8">
                <h3 className="font-heading text-xl font-medium text-(--accent-color) md:text-2xl">Chapter Directorship (7 Executives)</h3>

                <div className="w-full grid grid-cols-1 auto-rows-[minmax(220px,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {ogaChapterDirectorStructure.map((member) => (<TeamCard name={member.name} position={member.position} />))}
                </div>
            </div>

            <div className="w-full flex flex-col items-center justify-start gap-6 mb-8">
                <h3 className="font-heading text-xl font-medium text-(--accent-color) md:text-2xl">ISPARC Organizing Committee (6 Members)</h3>

                <div className="w-full grid grid-cols-1 auto-rows-[minmax(220px,1fr)] sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {isparcOrganizingCommittee.map((member) => (<TeamCard name={member.name} position={member.position} />))}
                </div>
            </div>


        </section>
    )
}

export default OrgStructure