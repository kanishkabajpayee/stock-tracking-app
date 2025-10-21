'use client'

import FooterLinks from '@/components/forms/FooterLinks'
import { Button } from '@/components/ui/button'
import {useForm} from 'react-hook-form'
import InputFields from '@/components/forms/InputFields'
import {toast} from "sonner";
import {signIn} from "@/lib/actions/auth.actions";
import {useRouter} from "next/navigation";


const SignIn = () => {
    const router = useRouter()
    const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors , isSubmitting},
  } = useForm<SignInFormData>({
    defaultValues:{
      email:'',
      password:'',
    },
    mode:'onBlur'
  })
  
  const onSubmit = async (data:SignInFormData, e?: React.BaseSyntheticEvent)=> {
    try {
        e?.preventDefault();
        console.log("signin in ")
        const result= await signIn(data)
        if (result.success){
            console.log("success")
            console.log('router object:', router)

            router.push('/')
        }
        else{
            toast.error("Cannot Sign In")
        }
    } catch (e) {
      console.error(e)
        toast.error("Sign In failed",{
            description: e instanceof Error ? e.message:"Failed to login"
        })
    }
  }

  
  return (
    <>
      <h1 className='form-title'> Log In Your Account
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='"space-y-5'>
        

        <InputFields
        name='email'
        label="Email"
        placeholder="Enter your email"
        register={register}
        error={errors.email}
        validation={{required :"Email is required", pattern:/^\w+@\w+\.\w+$/,message:"Incorrect Email"}}
        />

        <InputFields
        name='password'
        label="Password"
        type={"password"}
        placeholder="Enter password"
        register={register}
        error={errors.password}
        validation={{required :"Password is required", minLength:8}}
        
        />
        
        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting?"Logging In":"Log In"}
        </Button>
        <FooterLinks text="Don't Have have an account?" linkText="Sign Up" href="/sign-up" />
      </form>
    </>
  )
}

export default SignIn