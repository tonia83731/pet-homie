export default function MainTitle(props) {
  const { title, className = "" } = props;
  return (
    <h1 className={`text-2xl font-semibold mb-8 ${className}`}>{title}</h1>
  );
}
