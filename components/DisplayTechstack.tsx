import { cn, getTechLogos } from "@/lib/utils"
import Image from "next/image"


// This is function basicaly get the actuall icon from the internet, we will give the icons name like react.js, next.js, HTML-CSS and then it will remove the extra qoumas and space kind of thing then it search on the, check in @lib/utils.ts file
export default async function DisplayTechstack({techStack}:TechIconProps){
    const techIcon = await getTechLogos(techStack)
    return <div className="flex flex-row">
        {techIcon.slice(0,3).map(({tech,url },index)=>(
            <div key={tech} className={cn("relative group  bg-dark-300 rounded-full p-2 flex-center",index>=1 && "-ml-3")}>
                <span className="tech-tooltip">{tech}</span>
                <Image src={url} alt={tech} width={100} height={100} className="size-5"/>
            </div>
        ))}
    </div>
}