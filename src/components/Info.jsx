import { useState } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';

export default function Info({
  name,
  onClick,
  visible,
  visibilityToggler,
  target,
  targetid,
}) {
  return (
    <div className="info" onClick={onClick}>
      <p className="infoText">{name}</p>
      <button
      className="visibility-btn"
        data-target={target}
        data-targetid={targetid}
        onClick={(e) => {
          e.stopPropagation();
          visibilityToggler(e);
        }}
      >
        <VisibilityOutlinedIcon></VisibilityOutlinedIcon>
      </button>

    </div>
  );
}
