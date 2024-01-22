import { useState } from "react"

export default function CustomInput({name, defaultValue, onChange}) {
  const [value, setValue] = useState(defaultValue);
  return (
    <input
      name = {name}
      type = "text"
      value = {value}
      onChange = {(event) => {
        setValue(event.target.value);
        if (onChange) {
          onChange(event);
        }
      }}
    />
  ); 
}