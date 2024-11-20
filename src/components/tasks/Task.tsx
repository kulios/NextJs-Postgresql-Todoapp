"use client"
import { formatDate } from "@/lib/utils";
import{Task as TaskData} from "@prisma/client"
import { Check, ClipboardList, Pen, Trash } from "lucide-react";
import { Button } from "../ui/button";
import { deleteTask, updateStatus, updateTask } from "./action";
import prisma from "@/lib/prisma";
import { useState } from "react";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import { Checkbox } from "@radix-ui/react-checkbox";


interface TaskProps{
  task: TaskData;
}



export default function Task({task}:TaskProps){
const [editing,setEditing] = useState(false)
const [Completed,setCompleted] = useState(false)
 const editor = useEditor({
    extensions:[
      StarterKit.configure({bold:false,italic:false}),
    

  Placeholder.configure({
    placeholder:task.title
  })
]
  });

  async function onDelete(){
    await deleteTask(task.id);
    }
  async function onUpdate(){
    const newTitle = editor?.getText() || "";
    await updateTask(task.id,newTitle)
    setEditing(false)
  }
  async function onStatus(){
    await updateStatus(task.id,task.status)
  }
  return <article className="space-y-1 rounded-2xl bg-card p-5 shadow-lg">
    <div className="flex items-center justify-between">
      <div className="flex items-center justify-center ">
        {!task.status?<button onClick={onStatus} className="w-5 rounded-sm border-2 border-black mr-2 h-5"></button>:
        <button onClick={onStatus} className="w-5 rounded-sm border-2 border-black bg-green-500 mr-2 h-5"></button>
        } 
      
      {!editing ?
      <div className="flex items-center justify-center gap-3">
        {task.title} 
        <div>{task.status? <p className="text-[10px]  text-green-400">Completed</p>: <p className="text-[10px] text-muted-foreground">Not Completed</p>}</div>
      </div> :
      <div className="flex items-center justify-center ">
        <EditorContent className="w-full p-1 border-2 rounded-md border-black h-full" editor ={editor} />
        <Button onClick={onUpdate} className="w-[1rem] bg-card shadow-lg border-2 border-blue-700 hover:bg-gray-200 ml-2">
          <Check color={"green"}/>
        </Button>
      </div>
      }
      
      </div>
      <div className="flex items-center gap-2">
        <div className="block text-xs text-muted-foreground ">
          {formatDate(task.createdAt)}
        </div>
        <Button onClick={()=>setEditing(!editing)} className="w-[1rem] bg-card shadow-lg border-2 border-blue-700 hover:border-dashed">
          <Pen color={"blue"}/>
        </Button>
        <Button onClick={onDelete}className="w-[1rem] bg-card shadow-lg border-2 border-red-700 hover:bg-red-500">
         <Trash color={"red"}/>
        </Button>
      </div>
    
    </div>
    
  </article>
}
