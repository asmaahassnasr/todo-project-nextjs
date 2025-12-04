'use server'
import { TodoFormValues} from "@/shema";

import { PrismaClient } from '../generated/prisma/client'
import { revalidatePath } from "next/cache";
import { ITodo } from "@/interfaces";

const prisma = new PrismaClient()

export const getTodoAction = async ({userId}:{userId:string|null}) => {
    return await prisma.todo.findMany({
        where:{
            user_id:userId as string,
        },
        orderBy:{
            createdAt:"desc",
        }
    });
}
export const createTodoAction = async (params:TodoFormValues , userId:string | null) => {
    const {title,body, completed} = params;
     await prisma.todo.create({
        data:{
            title,
            body,
            completed,
            user_id:userId as string,
        }
    })
    revalidatePath("/")

}
export const updateTodoAction = async ({id,title,body,completed}:ITodo) => {
    await prisma.todo.update({
        where:{
            id
        },
        data:{
            title,
            body,
            completed
        }
    })
    revalidatePath("/")
}
export const deleteTodoAction = async ({id}:{id:string}) => {
     await prisma.todo.delete({
        where:{
            id
        }
    })
    revalidatePath("/")
}