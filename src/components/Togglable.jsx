import { useState } from "react";
import "../styles/togglable.css";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function Togglable({ title, children }) {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <h2 className="section-expander" onClick={() => setIsActive(!isActive)}>
        <span>{title}</span>{" "}
        <ExpandLessIcon
          {...(isActive ? {} : { className: "icon-collapsed" })}
        ></ExpandLessIcon>
      </h2>
      <div className={"togglableContent " + (isActive ? "toggled" : "")}>
        {children}
      </div>
    </>
  );
}
