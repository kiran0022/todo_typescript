export default function TryOwn({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <p>{title}</p>
      <p>{subtitle}</p>
    </div>
  );
}
