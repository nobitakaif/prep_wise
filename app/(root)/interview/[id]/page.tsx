import Agent from "@/components/Agent"
import DisplayTechstack from "@/components/DisplayTechstack"
import { getCurrentUser } from "@/lib/actions/auth.action"
import { getInterviewById } from "@/lib/actions/general.action"
import { getRandomInterviewCover } from "@/lib/utils"
import Image from "next/image"
import { redirect } from "next/navigation"


export default async function({params}:RouteParams){

    const { id } = await params
    const user = await getCurrentUser()
    const interview = await getInterviewById(id)
    if(!user){
        alert("user is empty")
        return 
    }

    if(!interview){
        redirect('/')
    }

    return <>
        <div className="flex flex-row gap-4 justify-between">
            <div className="flex flex-row gap-4 items-center max-sm:flex-col">
               <div className="flex flex-row gap-4 items-center">
                    <Image src={getRandomInterviewCover()} alt="cover interview"  width={40} height={40} className="rounded-full object-cover size-[40px]"/>
                    <h3 className="capitalize">{interview.role} Interview</h3>
               </div>
               <DisplayTechstack techStack={interview.techstack}/>
            </div>
            <p className="bg-dark-200 px-4 py-2 rounded-lg h-fit capitalize">{interview.type}</p>
        </div>

        <Agent userName={user?.name || ''} type="interview" interviewId={id} userId={user?.id} questions={interview.questions}/>
    </>
}