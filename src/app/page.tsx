import Task from "@/components/tasks/Task";
import TaskEditor from "@/components/tasks/TaskEditor";
import prisma from "@/lib/prisma";

export default async function Home() {

  const tasks =  await prisma.task.findMany({
    orderBy:{createdAt:"desc"}
  })
  return (
    <main className="w-full flex flex-col justify-center items-center mx-auto mt-4">
      <div className=" text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold ">Todo app</h1>
      </div>
       <div className="w-[90%] min-w-0 space-y-2 overflow-y-auto overflow-hidden max-h-[80vh] h-auto shadow-2xl p-5 rounded-3xl ">
          <TaskEditor/>
          {tasks.map((task)=>(
            <Task key={task.id} task={task}/>
          ))}
        </div>
    </main>
  )
}