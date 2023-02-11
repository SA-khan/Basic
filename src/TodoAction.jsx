const TodoAction = (props) => {
    return (
        <div>
            <a className="avatar edit" href={"/edit/"+props.Id}>Edit</a>
            <a className="avatar delete" href={"/delete/"+props.Id}>Delete</a>
        </div>
    );
}

export default TodoAction;