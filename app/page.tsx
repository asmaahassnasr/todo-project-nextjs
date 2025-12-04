import { getTodoAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";
import { auth } from "@clerk/nextjs/server";


export default async function Home() {

const {userId}  =await auth();
const todos = await getTodoAction({userId});

  return (
    <main className="container p-3">
      <AddTodoForm userId={userId}/>
      <TodosTable todos={todos}/>
    </main>
  );
}
