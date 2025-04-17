import Agent from "@/components/Agent";


export default function Page(){
    return <div>
        <h3>Interview Generation</h3>
        <Agent userName={"you"} userId={"user1"} type={"generate"} />
    </div>
}