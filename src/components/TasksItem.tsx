export default function TasksItem({
  name,
  done,
  id,
  toogleDone,
  handleDelete,
}: {
  name: string;
  done: boolean;
  id: number;
  toogleDone: (id: number, done: boolean) => void;
  handleDelete: (id: number) => void;
}) {
  return (
    <div>
      <div className="flex justify-between bg-white p-1 px-3 rounded-sm">
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={done}
            onChange={() => toogleDone(id, !done)}
          />
          {name}
        </div>
        <button
          className="bg-green-200 hover:bg-green-300 rounded-lg p-1 px-3"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
