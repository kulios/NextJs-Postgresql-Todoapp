"use client"

import Placeholder from '@tiptap/extension-placeholder'
import { EditorContent, useEditor } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import React from 'react'
import { submitTask } from './action'
import { boolean } from 'zod'
import { types } from 'util'
import { Button } from '../ui/button'
import { Plus } from 'lucide-react'
import "./style.css"
export default function TaskEditor() {

  const editor = useEditor({
    extensions:[
      StarterKit.configure({bold:false,italic:false}),
    

  Placeholder.configure({
    placeholder:"What do you wanna do bro?"
  })
]
  });
  const input = editor?.getText({
    blockSeparator:"\n",
  }) || ""

  async function onSubmit(){
    await submitTask(input,false);
      editor?.commands.clearContent();
    
  }
  return(
  <div className='flex flex-col gap-5 bg-card p-5 shadow-lg'>
    <div className='flex gap-5'>
    <EditorContent editor={editor} className='w-full max-h-[5rem] overflow-y-auto bg-gray-100 border-2 rounded-2xl px-5 py-3'/>
    </div>
    <div className='flex justify-end'>
    <Button onClick={onSubmit} disabled={!input.trim()} className='min-w-20'>
      <Plus/>
     Add Task
    </Button>
    </div>
  </div>
  )
}
