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

export  const userSchema = z.object({
    email: z.string().email(),
    password: z.string()
    .min(6)
    .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
    .regex(/[a-z]/, "Password must contain at least one lowercase letter")
    .regex(/[0-9]/, "Password must contain at least one number")
    .regex(/[@$!%*?&#]/, "Password must contain at least one special character"),
    confirmPassword: z.string().min(6) 
 }).refine((data) => data.password === data.confirmPassword, {
    message: "Password word does not match",
    path: ["confirmPassword"]
 })
 

 
export type userSchemaType = z.infer<typeof userSchema>

export default userSchema