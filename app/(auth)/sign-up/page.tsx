'use client'

import { CountrySelectFields } from '@/components/forms/CountrySelectFields'
import FooterLinks from '@/components/forms/FooterLinks'
import InputFields from '@/components/forms/InputFields'
import SelectFields from '@/components/forms/SelectFields'
import { Button } from '@/components/ui/button'
import { INVESTMENT_GOALS } from '@/lib/constants'
<<<<<<< HEAD
import { useCallback } from 'react'
import {useForm} from 'react-hook-form'



const SignUp = () => {
  const {
=======
import {useForm} from 'react-hook-form'
import {useRouter} from "next/navigation";
import {signUpWithEmail} from "@/lib/actions/auth.actions";
import {toast} from "sonner";


const SignUp = () => {
    const router = useRouter()
    const {
>>>>>>> e9fe0f7 (auth logic with db and frontend logic)
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors , isSubmitting},
  } = useForm<SignUpFormData>({
    defaultValues:{
      fullName :'',
      email:'',
      password:'',
      country:'US',
      investmentGoals:'Growth',
      riskTolerance:'Medium',
      preferredIndustry:'Technology'
    },
    mode:'onBlur'
  })
  
<<<<<<< HEAD
  const onSubmit = async function name(data:SignUpFormData) {
    try {
      console.log(data)
    } catch (e) {
      
    }
  }
=======
  const onSubmit = async function name(data:SignUpFormData)
  {
      try {
          console.log(data);
          const result = await signUpWithEmail(data);
          if(result.success) router.push('/');
      } catch (e) {
          console.error(e);
          toast.error('Sign up failed', {
              description: e instanceof Error ? e.message : 'Failed to create an account.'
          })
      }
  };

>>>>>>> e9fe0f7 (auth logic with db and frontend logic)

  
  return (
    <>
      <h1 className='form-title'> Sign Up & Personalize
      </h1>
      <form onSubmit={handleSubmit(onSubmit)} className='"space-y-5'>
        <InputFields
        name='fullName'
        label="Full Name"
        placeholder="John Doe"
        register={register}
        error={errors.fullName}
        validation={{required :"Full name is required", minLength:2}}
        
        />

        <InputFields
<<<<<<< HEAD
        name='Email'
=======
        name='email'
>>>>>>> e9fe0f7 (auth logic with db and frontend logic)
        label="Email"
        placeholder="example@test.com"
        register={register}
        error={errors.email}
        validation={{required :"Email is required", pattern:/^\w+@\w+\.\w+$/,message:"Incorrect Email"}}
        />

        <InputFields
        name='password'
        label="Password"
<<<<<<< HEAD
=======
        type="password"
>>>>>>> e9fe0f7 (auth logic with db and frontend logic)
        placeholder="Enter a strong password"
        register={register}
        error={errors.password}
        validation={{required :"Password is required", minLength:8}}
        
        />
        <SelectFields 
        name="investmentGoals"
        label="Investment Goals"
        placeholder="Select your Investment goal,"
        options={INVESTMENT_GOALS}
        control={control}
        error={errors.investmentGoals}
        />
        <CountrySelectFields 
        name="country"
        control={control}
        label="Country"
        error={errors.country}
        required
        />
        <Button type='submit' disabled={isSubmitting} className='yellow-btn w-full mt-5'>
          {isSubmitting?"Creating Account":"Start your Investing Journey"}
        </Button>
        <FooterLinks text="Already have an account?" linkText="Sign in" href="/sign-in" />
      </form>
    </>
  )
}

export default SignUp