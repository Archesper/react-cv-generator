import { useState } from "react";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import  VisibilityOffOutlinedIcon  from "@mui/icons-material/VisibilityOffOutlined";

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
          console.log(e.target);
          e.stopPropagation();
          visibilityToggler(e);
        }}
      >
        {visible ? <VisibilityOutlinedIcon></VisibilityOutlinedIcon> : <VisibilityOffOutlinedIcon> </VisibilityOffOutlinedIcon>}
      </button>

    </div>
  );
}
