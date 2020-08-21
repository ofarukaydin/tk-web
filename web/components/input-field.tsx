import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import "twin.macro";

type PropTypes = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  name: string;
};

const InputField = (props: PropTypes) => {
  const [field, { error }] = useField(props);

  if (props.type === "checkbox") {
    return (
      <div>
        <label tw="inline-flex items-center">
          <input
            type="checkbox"
            tw="form-checkbox mt-1 block bg-gray-100"
            {...field}
            {...props}
            id={props.name}
          />
          <span tw="ml-2">{props.label}</span>
          {error && <div>{error}</div>}
        </label>
      </div>
    );
  }
  return (
    <div>
      {/*       <label tw="block text-gray-700" htmlFor={field.name}>
        {props.label}
      </label> */}
      <input
        tw="form-input mt-1 block w-full bg-gray-100"
        {...field}
        {...props}
        id={props.name}
      />
      {error && <div>{error}</div>}
    </div>
  );
};

export default InputField;
