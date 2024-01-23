import { useState } from "react";
import CustomInput from "./CustomInput";
import Info from "./Info";

export default function MultiInput({ target, fields, content, editHandler, addHandler }) {
  const [inputState, setInputState] = useState({ action: "default" });
  if (inputState.action === "default") {
    return (
      <>
        {content.map((item) => {
          return (
            <Info
              onClick={() => {
                setInputState({ action: "edit", id: item.id });
              }}
              key={item.id}
              name={item.name}
            ></Info>
          );
        })}
        <button onClick={() => setInputState({action: 'add'})}>Add</button>
      </>
    );
  } else if (inputState.action === "edit" || inputState.action === "add") {
    const contentToEdit =
      inputState.action === "edit"
        ? content.find((item) => item.id === inputState.id)
        : null;
    return (
      <>
        <form
          onSubmit={(e) => {
            inputState.action === 'edit' ? editHandler(e) : addHandler(e);
            setInputState({ action: "default" });
          }}
          id={target + "Form"}
          data-target={target}
          {...(inputState.action === "edit"
            ? { "data-targetid": inputState.id }
            : {})}
        >
          {fields.map((field, index) => {
            return (
              <label key={index}>
                {" "}
                {field}
                <CustomInput
                  name={field}
                  defaultValue={contentToEdit ? contentToEdit[field] : ""}
                ></CustomInput>
              </label>
            );
          })}
          <button onClick={() => setInputState({ action: "default" })}>
            cancel
          </button>
          <button type="submit">Confirm</button>
        </form>
      </>
    );
  }
}
