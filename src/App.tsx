import { FormEvent, useState } from "react";

import "./App.css";
import Container from "./components/Container";
import Summary from "./components/Summary";
import Input from "./components/Input";
import Tasks from "./components/Tasks";
import TryOwn from "./components/TryOwn";

export type Task = {
  name: string;
  done: boolean;
  id: number;
};

const intitalTasks = [
  {
    name: "task one",
    done: false,
    id: 1,
  },
  {
    name: "task two",
    done: true,
    id: 2,
  },
];
function App() {
  // const [count-, setCount] = useState(0)

  const [tasks, setTasks] = useState<Task[]>(intitalTasks);

  const handleSubmit = (e: FormEvent<HTMLFormElement>, value: string) => {
    e.preventDefault();
    const newTask = {
      name: value,
      done: false,
      id: tasks.length + 1,
    };
    setTasks((tasks) => [...tasks, newTask]);
  };
  const toggleDoneTask = (id: number, done: boolean) => {
    setTasks((tasks) =>
      tasks.map((t) => {
        if (t.id === id) {
          t.done = done;
        }
        return t;
      })
    );
  };
  const handleDeleteTask = (id: number) => {
    setTasks((tasks) => tasks.filter((t) => t.id !== id));
  };
  return (
    <>
      <div className="flex justify-center m-5">
        <div className="flex flex-col items-center">
          <div className="sm:w-[640px] border shadow p-10 flex flex-col gap-10">
            <Container title={"Summary"}>
              <Summary tasks={tasks} />
            </Container>
            <Container>
              <Input handleSubmit={handleSubmit} />
            </Container>
            <Container title={"Tasks"}>
              <Tasks
                tasks={tasks}
                toogleDone={toggleDoneTask}
                handleDelete={handleDeleteTask}
              />
            </Container>
            <Container>
              <TryOwn title={"Testing try"} subtitle={"created by mr"} />
            </Container>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
