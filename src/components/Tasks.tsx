import { Task } from "../App";
import TasksItem from "./TasksItem";

// const BlogPostComponent = (props:
//     { title: string, subtitle: string }
//   )

export default function Tasks({
  tasks,
  toogleDone,
  handleDelete,
}: {
  tasks: Task[];
  toogleDone: (id: number, done: boolean) => void;
  handleDelete: (id: number) => void;
}) {
  return (
    <div>
      <div className="flex flex-col gap-2">
        {tasks.length ? (
          tasks.map((item) => (
            <TasksItem
              key={item.id}
              name={item.name}
              done={item.done}
              id={item.id}
              toogleDone={toogleDone}
              handleDelete={handleDelete}
            />
          ))
        ) : (
          <span className="text-green-100">no task yet!</span>
        )}
      </div>
    </div>
  );
}
