export default function Header({ title }: { title?: string }) {
  return (
    <div className="mb-8">
      {title && <h1 className="text-6xl mb-">{title}</h1>}
      <p className="text-lg">
        Today is
        <strong className="text-blue-300">{new Date().toLocaleString()}</strong>
      </p>
    </div>
  );
}
