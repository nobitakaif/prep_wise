import InterviewCard from "@/components/InterviewCard";
import { Button } from "@/components/ui/button";
import { dummyInterviews } from "@/constants";
import { getCurrentUser, getInterviewsByUserId, getLatestInterviews } from "@/lib/actions/auth.action";
import Image from "next/image";
import Link from "next/link";


export default async function Home(){

  const user = await getCurrentUser()
  console.log('userId this is',user)
  

  // we can send the mulitple request at time rather than sending two seperate request, it will send the request at the same time  
  const [userInterview,latestInterviews] = await Promise.all([
    await getInterviewsByUserId("9ACQsVqEBcQddiqO8yVWD2VlwH53"),
    await getLatestInterviews()
  ])


  // this way the fetching the data take await for each request that means second request will go when the first request comeback but we can send multiple request at a time 
      // const userInterview = await getInterviewsByUserId(user?.id)
      // const latestInterview = await getLatestinteviews({userId:user?.id})
  
  const hasPastInterviews = userInterview?.length! > 0
  const hasUpcommingInterview = latestInterviews?.length! > 0
  // console.log(userInterview?.length)
  
  return (
      <>
        <section className="card-cta">
          <div className="flex flex-col gap-6 max-w-lg">
            <h2>Get Interview-Ready with AI-Powered Practice & Feedback</h2>
            <p> Practice on real interview question & get instant feedback </p>
            <Button asChild className="btn-primary max-sm:w-full">
              <Link href={"/interview"}>Start an interview</Link>
            </Button>
          </div>
          <Image src={"/robot.png"} alt="robot" width={400} height={400} className="max-sm:hidden"/>
        </section>  

        <section className="flex flex-col gap-6 mt-8">
          <h2> Your Interviews </h2>
          <div className="interviews-section ">
            { hasPastInterviews?(
              userInterview?.map((interview)=>(
                <InterviewCard key={interview.id}{... interview}/>
              ))) : (
                <p>You haven't taken any interviews yet</p>
              )}
          </div>
        </section>
        
        <section className="flex flex-col gap-6 mt-8">
          <h2>Take an Interviews</h2>
          <div className="interviews-section ">
          {hasUpcommingInterview ? (
            latestInterviews?.map((interview)=>(
              <InterviewCard key={interview.id} {... interview}/>
            ))
          ):(
            <p>There are no new interview available </p>
          )}
          </div>
        </section>
      </>
  )
}