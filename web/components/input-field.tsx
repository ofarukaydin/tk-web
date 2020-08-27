import { useField, Field } from "formik";
import { InputHTMLAttributes } from "react";
import "twin.macro";

type PropTypes = InputHTMLAttributes<HTMLInputElement> & {
  label: string | React.ReactNode;
  name: string;
  rightAlign?: boolean;
};

const InputField = (props: PropTypes) => {
  const [field, { error }] = useField(props);

  if (props.type === "checkbox") {
    return (
      <label tw="inline-flex items-center">
        {props.rightAlign && <span tw="mr-2">{props.label}</span>}
        <input
          type="checkbox"
          tw="form-checkbox mt-1 block bg-gray-100 text-green-600"
          {...field}
          {...props}
          id={props.name}
        />
        {!props.rightAlign && <span tw="ml-2">{props.label}</span>}
        {error && <div>{error}</div>}
      </label>
    );
  }

  if (props.type === "radio") {
    return (
      <label tw="inline-flex items-center ">
        <input
          type="radio"
          tw="form-radio text-green-600"
          {...field}
          {...props}
          id={props.name}
        />
        <span tw="ml-4 text-gray-500 text-lg">{props.label}</span>
        {error && <div>{error}</div>}
      </label>
    );
  }

  if (props.type === "textarea") {
    return (
      <label tw="block">
        <span tw="text-gray-700">{props.label}</span>
        <Field
          as="textarea"
          tw="form-textarea mt-1 block w-full border-0"
          rows={2}
          cols={100}
          {...field}
          {...props}
          id={props.name}
        ></Field>
        {error && <div>{error}</div>}
      </label>
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
