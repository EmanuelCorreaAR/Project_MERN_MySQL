import { Formik, Form } from "formik";
import { useTasks } from "../context/TaskProvider";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function TaskForm() {
  const { createTask, getTask, updateTask } = useTasks();
  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadTask = async () => {
      if (params.id) {
        const task = await getTask(params.id);
        setTask({
          title: task.title,
          description: task.description,
        });
      }
    };
    loadTask();
  }, []);

  return (
    <div>
      <Formik
        initialValues={task}
        enableReinitialize={true} //Formik no permite reinicilizar los valores, por eso usamos el metodo
        onSubmit={async (values, actions) => {
          console.log(values);
          if (params.id) {
            await updateTask(params.id, values);
          } else {
            await createTask(values);
          }
          navigate("/");
          setTask({
            title: "",
            description: "",
          });
        }}
      >
        {(
          { handleChange, handleSubmit, values, isSubmitting } //metemos el formulario dentro de una funcion jsx
        ) => (
          <Form
            onSubmit={handleSubmit}
            className="bg-slate-300 max-w-sm rounded-md p-4 mx-auto"
          >
            <h1 className="text-xl font-bold uppercase text-center ">
              {params.id ? "Edit Task" : "New Task"}
            </h1>
            <label className="block font-bold uppercase text-center m-2">title</label>
            <input
              className="px-2 py-1 rounded-sm w-full"
              type="text"
              name="title"
              placeholder="Write a title"
              onChange={handleChange}
              value={values.title}
            />
            <label className="block font-bold uppercase text-center m-2">description</label>
            <textarea
              className="px-2 py-1 rounded-sm w-full"
              name="description"
              rows="5"
              placeholder="Write a description"
              onChange={handleChange}
              value={values.description}
            ></textarea>
            <button
              className="block bg-indigo-500 text-white px-2 py-1 rounded-sm w-full"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Saving..." : "Save"}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default TaskForm;
