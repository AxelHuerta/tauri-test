import { Input } from "keep-react";

type Props = {
  placeholder: string;
  type: string;
};

function InputForm(props: Readonly<Props>) {
  return (
    <Input
      placeholder={props.placeholder}
      type={props.type}
      className="my-4 w-full rounded-full placeholder:text-slate-500"
    />
  );
}

export default InputForm;