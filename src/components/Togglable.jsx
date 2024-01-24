import { useState } from "react";
import '../styles/togglable.css'

export default function Togglable({title, children}) {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      <h2 onClick={()=> setIsActive(!isActive)}>{title}</h2>
      <div className={"togglableContent " + (isActive ? 'toggled' : '')}>{children}</div>
    </>
  );
}