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
    // The state is used conditionally - if there is an onChange prop, rely on defaultValue for input value
    // If not, use its own state. This change was implemented because this component is used in two different
    // other components, one needing it controlled and the other uncontrolled
    value: onChange ? (defaultValue ? defaultValue : "") : value,
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
        <textarea {...properties}></textarea>
      ) : (
        <input {...properties} />
      )}
    </>
  );
}
