import { Task } from "../App";
import SummaryItem from "./SummaryItem";

export default function Summary({ tasks }: { tasks: Task[] }) {
  const total = tasks.length;
  const pending = tasks.filter((item) => item.done === false).length;
  const done = tasks.filter((item) => item.done === true).length;

  return (
    <div>
      <div className="flex justify-between">
        <SummaryItem itemName={"Total"} itemValue={total} />
        <SummaryItem itemName={"To do"} itemValue={pending} />
        <SummaryItem itemName={"Done"} itemValue={done} />
      </div>
    </div>
  );
}
