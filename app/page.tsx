import { getTodoAction } from "@/actions/todo.actions";
import AddTodoForm from "@/components/AddTodoForm";

export default async function Home() {

const todos = await getTodoAction();
  return (
    <main>
      
      {/* <ul>
        {todos.map(ele => <li key={ele.id}>{ele.title}</li>)}
      </ul> */}

      <AddTodoForm />
    </main>
  );
}
