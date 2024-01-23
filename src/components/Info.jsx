import { useState } from "react";

export default function Info({
  name,
  onClick,
  visible,
  visibilityToggler,
  target,
  targetid,
}) {
  return (
    <div onClick={onClick}>
      {name}
      <button
        data-target={target}
        data-targetid={targetid}
        onClick={(e) => {
          e.stopPropagation();
          visibilityToggler(e);
        }}
      >
        {visible ? "hide" : "show"}
      </button>
    </div>
  );
}
