export default function SubTitle(props) {
  const { title, className = "" } = props;
  return <h3 className={`text-xl font-bold mb-4 ${className}`}>{title}</h3>;
}
