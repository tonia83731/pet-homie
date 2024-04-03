export default function ControlBtnLayout(props) {
  const { children } = props;
  return <div className="mt-12 mb-4 grid grid-cols-4">{children}</div>;
}
