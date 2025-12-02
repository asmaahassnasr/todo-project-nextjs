'use server'
import { TodoFormValues} from "@/shema";

import { PrismaClient } from '../generated/prisma/client'

const prisma = new PrismaClient()

export const getTodoAction = async () => {
    return await prisma.todo.findMany();
}
export const createTodoAction = async (params:TodoFormValues) => {
    const {title,body, completed} = params;
    return await prisma.todo.create({
        data:{
            title,
            body,
            completed
        }
    })
}
export const updateTodoAction = async () => {}
export const deleteTodoAction = async () => {}