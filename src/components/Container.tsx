export default function Container({
  children,
  title,
}: {
  children: JSX.Element;
  title?: string;
}) {
  return (
    <div>
      {title && (
        <h2 className="bg-green-600 p-4 border shadow rounded-md">{title}</h2>
      )}
      <div>{children}</div>
    </div>
  );
}
