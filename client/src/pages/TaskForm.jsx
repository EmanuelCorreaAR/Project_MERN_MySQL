import { Formik, Form } from "formik";

function TaskForm() {
  return (
    <div>
      <Formik>
        <Form>
          <label>title</label>
          <input type="text" name="title" placeholder="Write a title" />
          <label>description</label>
          <textarea
            name="description"
            rows="5"
            placeholder="Write a description"
          ></textarea>
          <button>Save</button>
        </Form>
      </Formik>
    </div>
  );
}

export default TaskForm;
