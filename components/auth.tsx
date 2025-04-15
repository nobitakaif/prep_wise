"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form } from "@/components/ui/form"
import Image from "next/image"
import Link from "next/link"
import { toast } from "sonner"
import FormField from "./FormField"


const authFormSchema = (type:FormType)=>{
    return z.object({
        name : type === 'sign-up' ? z.string().min(3).max(40) : z.string().optional(),
        email : z.string().email(),
        password : z.string().min(8).max(40)
    })
}


export default function AuthForm({type}:{type:FormType}){
    const formSchema = authFormSchema(type)
     // 1. Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email:"",
      password:""
    },
  })
 
  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    try{
        if(type === 'sign-in'){
            console.log('Signin ', values)
        }
        else{
            console.log('Signup',values)
        }
    }catch(e){
        console.log(e)
        toast.error(`There was an error ${e}`)
    }
  }

    const isSignIn = type === "sign-in"
    
    return <div className="card-border lg:min-w-[566px]">

            <div className="flex flex-col gap-6 card py-14 px-10">
                <div className="flex flex-row gap-2 justify-center">
                    <Image src={'/logo.svg'} alt="logo" height={32} width={38} />
                    <h3 className="text-primary-100">PrepWise</h3>
                </div>
                <h3> Practice Job Interview with AI</h3>
        
            
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 w-full mt-4 form ">
                        {!isSignIn && (
                            <FormField
                                control={form.control}
                                name="name"
                                label="Name"
                                placeholder="Enter your Name"
                                type="text"
                            />
                            )}

                            <FormField
                            control={form.control}
                            name="email"
                            label="Email"
                            placeholder="Enter your email"
                            type="email"
                            />

                            <FormField
                            control={form.control}
                            name="password"
                            label="Password"
                            placeholder="Enter your password"
                            type="password"
                            />
                        <Button className="btn" type="submit">{isSignIn ? 'Sign in': 'Create an Account'}</Button>
                    </form>
                </Form>
            <p className="text-center"> 
                {isSignIn ? 'NO account yet':'Have an account already?'}
                <Link href={!isSignIn?'/signin':'/signup'} className="font-bold text-user-primary ml-1">
                    {isSignIn? 'Sign Up' : 'Sign In'}
                </Link>
            </p>
     </div>
    </div>
}