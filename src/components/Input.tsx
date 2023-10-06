import { FormEvent, useState } from "react";

export default function Input({
  handleSubmit,
}: {
  handleSubmit: (e: FormEvent<HTMLFormElement>, value: string) => void;
}) {
  const [newTask, setNewTask] = useState("");
  return (
    <div>
      <form
        action=""
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          handleSubmit(e, newTask);
          setNewTask("");
        }}
      >
        <div className="flex flex-col">
          <label className="text-white">Enter your next task:</label>
          <input
            className="p-1 rounded-md border-2 border-green-300 outline-none"
            type="text"
            value={newTask} // Set the input value to newTask
            onChange={(e) => setNewTask(e.target.value)} // Set newTask to the input value whenever the user types something
          />
        </div>
        <button
          type="submit"
          className="bg-green-100 rounded-lg hover:bg-green-200 p-1"
        >
          Add task
        </button>
      </form>
    </div>
  );
}
