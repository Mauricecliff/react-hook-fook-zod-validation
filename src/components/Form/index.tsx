"use client"


import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import userSchema, { userSchemaType } from "@/libs/formSchema";

import { ZodType, z } from "zod";



//  const userSchema: ZodType = z.object({
//    firstName: z.string().min(3).max(15),
//    lastName: z.string().min(3).max(15),
//    email: z.string().email(),
//    age: z.number().min(18).max(70),
//    password: z.string().min(6).max(15),
//    confirmPassword: z.string().min(6).max(15)
// }).refine((data) => data.password === data.confirmPassword, {
//     message: "Password word does not match!",
//     path: ["confirmPassword"]
// })



// const loginSchema: ZodType = z.object({
//    email: z.string().email(),
//    password: z.string().min(6).max(8)
// })

// type fieldType = {
//   email: string;
//   password: string;
// }

// using the zod schema to define the form type
// type fieldType = z.infer<typeof userSchema>

export default function FormComp() {

  //  const [showPass, setShowPass]= useState<boolean>(true)
   

  //  const onSubmit= (data: formDataType ) => {
  //     console.log('form data>>>', data)
  //  }
  // const { register, handleSubmit, setError, setValue, formState:{errors, isSubmitting} } = useForm<fieldType>({
  //   defaultValues: {
  //     email: 'coderz'
  //   },
  //   resolver: zodResolver(loginSchema)
  // });

  // const onSubmit:SubmitHandler<fieldType> = async(data) => {

  //   try{
  //     await new Promise((resolve) => setTimeout(resolve, 3000))
  //     console.log('form data>>>', data)
  //     throw new Error()
  //   }catch(error){
  //     setError("root", {
  //       message: "Oops sorry an unknown error..."
  //     })
  //   }
     
  // }

  const {register, handleSubmit, setError, formState:{errors}} = useForm<userSchemaType>({resolver: zodResolver(userSchema)})
   
   const onSubmit:SubmitHandler<userSchemaType> = (data) => {
    console.log('form data>>>', data)
    console.log('form data>>>', errors)
   }


  return (
<form class="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
  <div class="relative z-0 w-full mb-5 group">
      <input type="email" name="floating_email" id="floating_email" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("email")} />
      <label for="floating_email" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
  </div>
  {errors.email && (
    <div>
      <small className="text-red-600">{errors.email?.message}</small>
    </div>
  )}
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="floating_password" id="floating_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("password")} />
      <label for="floating_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
  </div>
  {errors.password && (
    <div>
      <small className="text-red-600">{errors.password?.message}</small>
    </div>
  )}
  <div class="relative z-0 w-full mb-5 group">
      <input type="password" name="repeat_password" id="floating_repeat_password" class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " {...register("confirmPassword")}/>
      <label for="floating_repeat_password" class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm password</label>
  </div>
  {errors.confirmPassword && (
    <div>
      <small className="text-red-600">{errors.confirmPassword?.message}</small>
    </div>
  )}
  <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

   

  //  <form className="max-w-md mx-auto" onSubmit={handleSubmit(onSubmit)}>
  //   <div>
  //     <input type="email" {...register("email")} />
  //   </div><br />
  //   {errors && (<span>{errors.email?.message}</span>)}
  //    <div>
  //     <input type={showPass ? "password" : "text"} {...register("password")}  />
  //    </div><br />
  //    {errors && (<span>{errors.password?.message}</span>)}
  //    <div>
  //     <button disabled={isSubmitting}>{isSubmitting ? 'submitting...' : 'submit'}</button>
  //    </div>
  //    {errors.root && (<span>{errors.root?.message}</span>)}

  //    <button onClick={handleShowPass}>twik</button>
  // </form>
 
  );


}
