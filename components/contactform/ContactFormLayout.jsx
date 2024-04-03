import SubTitle from "../tools/title/SubTitle";
export default function ContactFormLayout(props) {
  const { children, title } = props;
  return (
    <div className="">
      <div className="">
        <SubTitle title={title} className="text-live-green" />
      </div>
      {children}
    </div>
  );
}
