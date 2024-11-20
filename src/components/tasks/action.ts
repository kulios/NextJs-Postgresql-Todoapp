"use server"

import prisma from "@/lib/prisma"
import { createTaskSchema } from "@/lib/validation"
import { revalidatePath } from "next/cache"


export async function submitTask(input:string ,status:boolean){
  const { title } = createTaskSchema.parse({title:input})
  await prisma.task.create({
    data:{
      title,
      status
    }
  })
  revalidatePath("/")
}

export async function deleteTask(taskId:string) {
  await prisma.task.delete({
    where:{
      id: taskId
    }
  })
  revalidatePath("/")
}
export async function updateTask(taskId:string , newTitle:string){
  await prisma.task.update({
    where:{
      id: taskId
    },
    data:{
      title:newTitle
    }
  })
  revalidatePath("/")
}

export async function updateStatus(taskId:string,status:boolean){

  if(status){
    await prisma.task.update({
      where:{
        id:taskId
      },
      data:{
        status:false
      }
    })
  }else{
    await prisma.task.update({
      where:{
        id:taskId
      },
      data:{
        status:true
      }
    })
  }
  revalidatePath("/")
}
