import { useState } from "react";
import CustomInput from "./CustomInput";
import Info from "./Info";

export default function MultiInput({ target, fields, content, editHandler }) {
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
      </>
    );
  } else if (inputState.action === "edit") {
    const contentToEdit = content.find((item) => item.id === inputState.id);
    return (
      <>
        <form
          onSubmit={(e) => {
            editHandler(e);
            setInputState({ action: "default" });
          }}
          id={target + "Form"}
          data-target={target}
          data-targetid={inputState.id}
        >
          {fields.map((field, index) => {
            return (
              <label id={crypto.randomUUID()}>
                {" "}
                {field}
                <CustomInput
                  name={field}
                  defaultValue={contentToEdit[field]}
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
