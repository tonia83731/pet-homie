export default function SubTitle() {
  const { title, className = "" } = props;
  return <h3 className={`text-xl font-bold ${className}`}>{title}</h3>;
}
