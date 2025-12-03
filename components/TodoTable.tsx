"use client";
import * as React from "react";
import {
  Pen,
  Trash,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { ITodo } from "@/interfaces";
import { Badge } from "./ui/badge";

export default function TodosTable({todos}:{todos:ITodo[]}) {
  
  return (
    <div className="w-full">
      <div className="overflow-hidden rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Title</TableHead>
              <TableHead>Completed</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {todos.map(todo => (
              <TableRow key={todo.id}>
              <TableCell>{todo.id} </TableCell>
              <TableCell>{todo.title}</TableCell>
              <TableCell>{todo.completed? <Badge>Completed</Badge> : <Badge variant={"secondary"}>InCompleted </Badge>}</TableCell>
              <TableCell className="flex items-center justify-end space-x-2">
                <Button size={"icon"}>
                  <Pen size={16} />
                </Button>
                <Button size={"icon"} variant={"destructive"}>
                  <Trash size={16} />
                </Button>
              </TableCell>
            </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
