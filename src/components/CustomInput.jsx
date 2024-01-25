import { useState } from "react";

export default function CustomInput({
  labelName,
  name,
  defaultValue,
  onChange,
}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <>
      <label for={name}> {labelName}</label>
      <input
        name={name}
        type="text"
        value={value}
        onChange={(event) => {
          setValue(event.target.value);
          if (onChange) {
            onChange(event);
          }
        }}
      />
    </>
  );
}
