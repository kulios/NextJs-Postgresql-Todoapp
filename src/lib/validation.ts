import {z} from "zod"


const requiredString = z.string().trim().min(1,"الزامی")



export const createTaskSchema = z.object({title:requiredString})