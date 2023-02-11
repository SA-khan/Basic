import TodoAction from "./TodoAction";
import {useEffect, useState} from "react"
import { Todo } from "./Todo";

const TodoList = (props) => {
    let tasks: Todo[] = ([new Todo(1, "Breakfast", "Having breakfast", true),
    new Todo(2, "Goto Office", "Going Office", false)]); 
    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Status</th>
                        <th colSpan="2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                {tasks.map((todo) => (
                        <tr className="todo">
                            <td className="todoId">{todo.todoId}.</td>
                        <td>{todo.title}</td>
                        <td>{todo.description}</td>
                        <td className={todo.isActive == 1 ? "isTodoActiveStatus" : "isTodoInActiveStatus"}>{todo.isActive == 1 ? "Active" : "In-active"}</td>
                        <td>
                            <TodoAction Id = {todo.todoId} />
                        </td>
                    </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="5">-</th>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
}

export default TodoList;