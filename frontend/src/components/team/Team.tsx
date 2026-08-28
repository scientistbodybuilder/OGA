import OrgStructure from "./OrgStructure"
import PastMembers from "./PastMembers"


const Team = () => {
    return (
        <section className='w-full space-y-16 h-full min-h-screen flex flex-col overflow-y-auto bg-(--background-color) pt-20 pb-10 px-4 sm:px-8 lg:px-10 items-center justify-start'>
            <OrgStructure />
            <PastMembers />
        </section>
    )
}


export default Team