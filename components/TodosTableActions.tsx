"use client";

import React from "react";
import {
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import Spinner from "./spinner";
import { ITodo } from "@/interfaces";
import EditTodoForm from "./EditTodoForm";

const TodosTableActions = ({todo}:{todo:ITodo}) => {
  const[loading , setLoading] = useState(false)

  return (
    <>
      <EditTodoForm todo={todo}/>
      <Button
        size={"icon"} className="cursor-pointer"
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id:todo.id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
