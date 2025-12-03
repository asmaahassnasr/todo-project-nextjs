import { getTodoAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";
import TodosTable from "@/components/TodoTable";

export default async function Home() {

const todos = await getTodoAction();
  return (
    <main className="container p-3">
      <AddTodoForm />
      <TodosTable todos={todos}/>
    </main>
  );
}
