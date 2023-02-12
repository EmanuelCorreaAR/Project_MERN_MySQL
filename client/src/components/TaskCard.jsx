function TaskCard({task}){
return(
    <div key={task.id}>
    <h2>{task.title}</h2>
    <p>{task.description}</p>
    <span>{task.done === 1 ? "✅" : "❎"}</span>
    <span>{task.createAt}</span>
    <button>Edit</button>
    <button>Delete</button>
</div>
)
}

export default TaskCard;