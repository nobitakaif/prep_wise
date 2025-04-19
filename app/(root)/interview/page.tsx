import { getCurrentUser } from "@/lib/actions/auth.action"
import Agent from "@/components/Agent";


export default async function Page(){

    const user = await getCurrentUser()
    
    return <div>
        <h3>Interview Generation</h3>
        <Agent userName={user?.name} userId={user?.id} type={"generate"} />
    </div>
}