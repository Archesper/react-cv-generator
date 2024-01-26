import { useState } from "react";
import CustomInput from "./CustomInput";
import Info from "./Info";

export default function MultiInput({
  target,
  fields,
  content,
  editHandler,
  addHandler,
  deleteHandler,
  visiblityToggler,
}) {
  const [inputState, setInputState] = useState({ action: "default" });
  if (inputState.action === "default") {
    return (
      <>
        <div className="info-container">
          {content.map((item) => {
            return (
              <Info
                visibilityToggler={visiblityToggler}
                visible={item.visible}
                target={target}
                targetid={item.id}
                onClick={() => {
                  setInputState({ action: "edit", id: item.id });
                }}
                key={item.id}
                name={item.name}
              ></Info>
            );
          })}
        </div>
        <button
          className="info-add-btn"
          onClick={() => setInputState({ action: "add" })}
        >
          + Add
        </button>
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
            e.preventDefault();
            inputState.action === "edit" ? editHandler(e) : addHandler(e);
            setInputState({ action: "default" });
          }}
          id={target + "-form"}
          data-target={target}
          {...(inputState.action === "edit"
            ? { "data-targetid": inputState.id }
            : {})}
        >
          {fields.map((field, index) => {
            return (

                <CustomInput
                  labelName={field}
                  name={field}
                  defaultValue={contentToEdit ? contentToEdit[field] : ""}
                ></CustomInput>

            );
          })}
          {/*The buttons beside the submit button have type="button"
           to fix the "form submission cancelled"
           warning when submitting form with the Enter key*/}
          <button
            type="button"
            onClick={() => setInputState({ action: "default" })}
          >
            cancel
          </button>
          <button type="submit">Confirm</button>
          {inputState.action === "edit" && (
            <button
              type="button"
              data-target={target}
              data-targetid={inputState.id}
              onClick={deleteHandler}
            >
              Delete
            </button>
          )}
        </form>
      </>
    );
  }
}
