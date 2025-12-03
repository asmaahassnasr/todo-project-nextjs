"use client";

import React from "react";
import {
  Pen,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { deleteTodoAction } from "@/actions/todo.actions";
import { useState } from "react";
import Spinner from "./spinner";

const TodosTableActions = ({id}:{id:string}) => {
  const[loading , setLoading] = useState(false)

  return (
    <>
      <Button size={"icon"} className="cursor-pointer">
        <Pen size={16} />
      </Button>
      <Button
        size={"icon"} className="cursor-pointer"
        variant={"destructive"}
        onClick={async () => {
          setLoading(true);
          await deleteTodoAction({ id });
          setLoading(false);
        }}
      >
        {loading ? <Spinner /> : <Trash size={16} />}
      </Button>
    </>
  );
};

export default TodosTableActions;
