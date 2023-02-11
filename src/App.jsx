import { createRoot } from "react-dom/client";
import Pet from "./Pet";
import TodoParams from "./TodoForm";
import Animal from './Animal';
import TodoList from "./TodoList";
import { Todo } from "./Todo";

const App = () => {
  return (
    <div>
      <TodoParams title="1st" description="1st Task" isActive="1" createdBy="self"  />
      <TodoList todos={[]} />
      <Animal />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
