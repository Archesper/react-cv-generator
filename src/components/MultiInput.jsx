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
  // Helper function, converts camelCase to Camel Case
  const camelToProper = (str) => {
    let firstWord = str.charAt(0).toUpperCase();
    let secondWord = "";
    let i = 1;
    while (
      str.charAt(i) === str.charAt(i).toLowerCase() &&
      str.charAt(i) !== str.charAt(i).toUpperCase()
    ) {
      firstWord += str.charAt(i);
      i += 1;
    }
    secondWord = str.slice(i);
    return firstWord + " " + secondWord;
  };
  const [inputState, setInputState] = useState({ action: "default" });
  // The first condition is for when the app data is reset while the input was editing
  // Somewhat hacky fix as there is no way to alter state from the parent
  if (
    (inputState.action === "edit" && content.length === 0) ||
    inputState.action === "default"
  ) {
    return (
      <>
        <div className="info-container">
          {content &&
            content.map((item) => {
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
          className="detail-form"
          data-target={target}
          {...(inputState.action === "edit"
            ? { "data-targetid": inputState.id }
            : {})}
        >
          {fields.map((field, index) => {
            return (
              <CustomInput
                key={index}
                labelName={camelToProper(field.name)}
                name={field.name}
                {...(field.type ? { type: field.type } : {})}
                {...(field.isTextArea ? { isTextArea: field.isTextArea } : {})}
                defaultValue={contentToEdit ? contentToEdit[field.name] : ""}
              ></CustomInput>
            );
          })}
          {/*The buttons beside the submit button have type="button"
           to fix the "form submission cancelled"
           warning when submitting form with the Enter key*/}
          <div className="form-btn-grp">
            <button
              type="button"
              className="cancel-btn"
              onClick={() => setInputState({ action: "default" })}
            >
              Cancel
            </button>
            <button type="submit" className="confirm-btn">
              Confirm
            </button>
            {inputState.action === "edit" && (
              <button
                type="button"
                className="delete-btn"
                data-target={target}
                data-targetid={inputState.id}
                onClick={deleteHandler}
              >
                Delete
              </button>
            )}
          </div>
        </form>
      </>
    );
  }
}
