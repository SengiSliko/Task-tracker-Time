import { useState } from "react";

const AddTask = ({ taskList, setTaskList }) => {
  const [addModal, setAddModal] = useState(false);
  const [projectName, setProjectName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === "projectName") {
      setProjectName(value);
      if (value) setErrorMessage(""); // Clear error when valid input
    }
    if (name === "taskDescription") {
      setTaskDescription(value);
    }
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (!projectName) {
      setErrorMessage("Enter project name to continue");
      return;
    }

    const newTask = {
      projectName,
      taskDescription,
      timestamp: new Date().getTime(),
      duration: 0,
    };

    setTaskList([...taskList, newTask]);
    localStorage.setItem("taskList", JSON.stringify([...taskList, newTask]));
    setAddModal(false); // Close modal
    setProjectName(""); // Reset input fields
    setTaskDescription("");
    setErrorMessage("");
  };

  return (
    <>
      <button
        className="bg-blue-500 text-white uppercase text-sm font-semibold py-1 mx-1.5 pl-2 pr-2.5 rounded hover:opacity-70"
        type="button"
        onClick={() => setAddModal(true)}
      >
        +New
      </button>

      {addModal && (
        <div className="flex items-center justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-100">
          <div className="w-9/12 bg-white max-w-lg rounded-lg shadow-md relative flex flex-col">
            <div className="flex flex-row justify-between p-5 border-b border-slate-200 rounded-t">
              <h3 className="text-3xl font-semibold">Add New Task</h3>
              <button
                className="px-1 text-gray-400 text-3xl font-semibold"
                onClick={() => setAddModal(false)}
              >
                X
              </button>
            </div>

            <form className="px-6 pt-6 pb-4" onSubmit={handleAdd}>
              <div>
                <label
                  className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                  htmlFor="project-name"
                >
                  Project Name
                </label>
                <input
                  className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
                  id="project-name"
                  name="projectName"
                  type="text"
                  placeholder="Project Name"
                  value={projectName}
                  onChange={handleInput}
                  required
                />
                {errorMessage && (
                  <p className="text-red-500 text-center mt-2 mb-5">
                    {errorMessage}
                  </p>
                )}
              </div>

              <div>
                <label
                  className="track-wide uppercase text-gray-700 text-xs font-semibold mb-2 block"
                  htmlFor="task-description"
                >
                  Task Description
                </label>
                <textarea
                  className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-5 leading-tight focus:outline-none focus:bg-white"
                  id="task-description"
                  name="taskDescription"
                  rows="3"
                  placeholder="Task Description"
                  value={taskDescription}
                  onChange={handleInput}
                />
              </div>

              <div className="flex justify-end p-6 border-t border-slate-200 rounded-b">
                <button
                  className="bg-blue-500 text-white font-semibold uppercase text-sm px-6 py-3 rounded hover:opacity-70"
                  type="submit"
                >
                  Add Task
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default AddTask;
