import { useState } from "react";

export default function CustomInput({
  labelName,
  name,
  type,
  isTextArea,
  defaultValue,
  onChange,
}) {
  const [value, setValue] = useState(defaultValue);
  const properties = {
    name: name,
    id: name,
    type: type ? type : "text",
    value: value,
    onChange: (event) => {
      setValue(event.target.value);
      if (onChange) {
        onChange(event);
      }
    },
  };
  return (
    <>
      <label htmlFor={name}> {labelName}</label>
      {isTextArea ? (
        <textarea {...properties} ></textarea>
      ) : (
        <input {...properties} />
      )}
    </>
  );
}
