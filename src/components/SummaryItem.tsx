type SummmaryItemProps = { itemName: string; itemValue: number };

export default function SummaryItem({
  itemName,
  itemValue,
}: SummmaryItemProps) {
  return (
    <div>
      <article className="bg-green-50 w-36 rounded-sm flex justify-between p-2">
        <h3 className="font-bold">{itemName}</h3>
        <span className="bg-green-900 text-white px-2 rounded-sm">
          {itemValue}
        </span>
      </article>
    </div>
  );
}
