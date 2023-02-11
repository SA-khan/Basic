import { useState } from "react";

const requestTodo = (e) => {
  tasks.push(e);
};

const todoForm = (props) => {
  const [title, updateTitle] = useState(props.title);
  const [description, updateDescription] = useState(props.description);
  const [isActive, updateIsActive] = useState(props.isActive);
  const [tasks, updateTask] = useState([]);

  return (
    <div className="bg-secondary text-center">
      <form onSubmit={e => {
        e.preventDefault();
        requestTodo(e.target.value);
      }}>
        <table className="">
          <thead>
            <tr>
              <th colSpan={2}>
                <span className="todo-header-text"> Todo Form </span>
              </th>
            </tr>
          </thead>
          <tbody>
          <tr>
            <td>
              <label htmlFor="title">Title</label>
            </td>
            <td>
              <input
                id="title"
                value={title}
                placeholder="Title"
                onChange={(e) => updateTitle(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="description"> Description</label>
            </td>
            <td>
              <input
                id="description"
                value={description}
                placeholder="Description"
                onChange={(e) => updateDescription(e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="isActive"> Status</label>
            </td>
            <td>
              <input
                id="isActive"
                type="range"
                value={isActive}
                min = "0"
                max = "1"
                placeholder="Is Active"
                onChange={(e) => updateIsActive(e.target.value)}
              />
              <label className={isActive == 1 ? "isActiveStatus" : "isInActiveStatus"}>{isActive == 1 ? "Active" : "In-active" }</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <button>Save</button>
            </td>
          </tr>
          </tbody>
          <tfoot>
            <tr>
              <th colSpan={2}>
                <span> - </span>
              </th>
            </tr>
          </tfoot>
        </table>
      </form>
    </div>
  );
};

export default todoForm;
