import defaultResumeData from "../helpers/defaultData";
import CV from "./CV";
import InfoInput from "./InfoInput.jsx";
import MultiInput from "./MultiInput";
import Togglable from "./togglable";
import { useState } from "react";
import PrintIcon from "@mui/icons-material/PrintOutlined";
import VisibilityIcon from "@mui/icons-material/VisibilityOutlined";

export default function App() {
  
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const handlePersonalDataUpdate = (e) => {
    console.log(e.target.name);
    const newData = { ...resumeData, [e.target.name]: e.target.value };
    setResumeData(newData);
  };
  const handleTargettedUpdate = (e) => {
    e.preventDefault();
    const targettedSection = e.target.dataset.target;
    const targetID = e.target.dataset.targetid;
    console.log(targetID);
    const newContent = resumeData[targettedSection].map((item) => {
      if (item.id != targetID) {
        return item;
      } else {
        const newItem = {};
        Array.from(e.target.elements).forEach((el) => {
          newItem[el.name] = el.value;
        });
        newItem["id"] = Number(targetID);
        newItem["visible"] = item.visible;
        newItem["name"] =
          targettedSection === "education"
            ? newItem.school
            : newItem.companyName;
        return newItem;
      }
    });
    const newData = { ...resumeData, [targettedSection]: newContent };
    console.log(newData);
    setResumeData(newData);
  };
  // This function is for adding new education/experience sections
  const handleContentAdd = (e) => {
    e.preventDefault();
    const targettedSection = e.target.dataset.target;
    const newItem = {};
    Array.from(e.target.elements).forEach((el) => {
      newItem[el.name] = el.value;
    });
    newItem.id = resumeData[targettedSection].length;
    newItem.visible = true;
    newItem["name"] =
      targettedSection === "education" ? newItem.school : newItem.companyName;
    const newContent = [...resumeData[targettedSection], newItem];
    const newData = { ...resumeData, [targettedSection]: newContent };
    setResumeData(newData);
  };
  const handleContentDelete = (e) => {
    const targettedSection = e.target.dataset.target;
    const targetID = e.target.dataset.targetid;
    const newContent = resumeData[targettedSection].filter(
      (item) => item.id != targetID
    );
    const newData = { ...resumeData, [targettedSection]: newContent };
    setResumeData(newData);
  };
  const handleVisibilityToggle = (e) => {
    console.log(e.currentTarget.dataset);
    const targettedSection = e.currentTarget.dataset.target;
    const targetID = e.currentTarget.dataset.targetid;
    const newItem = {
      ...resumeData[targettedSection][targetID],
      visible: !resumeData[targettedSection][targetID].visible,
    };
    const newContent = resumeData[targettedSection].map((item) => {
      if (item.id != targetID) {
        return item;
      } else {
        return newItem;
      }
    });
    const newData = { ...resumeData, [targettedSection]: newContent };
    setResumeData(newData);
  };
  const eventHandlers = {
    addHandler: handleContentAdd,
    deleteHandler: handleContentDelete,
    editHandler: handleTargettedUpdate,
    visiblityToggler: handleVisibilityToggle,
  };
  return (
    <>
      <div className="corner-buttons">
        <button  onClick={window.print} className="print-btn btn-wrapper">
          <PrintIcon></PrintIcon>
          <div className="button-tooltip">
            For best results, use no margins, A4 format, and enable background
            graphics
          </div>
        </button>
        <button onClick={(e) => {
            const overlay = document.querySelector('.resume-container')
            const printButton = document.querySelector('.print-btn')
            const visibility = overlay.style.visibility;
            overlay.style.visibility = visibility === 'visible' ? 'hidden' : 'visible';
            printButton.style.display = visibility === 'visible' ? 'none' : 'grid';
            console.log(printButton);
            console.log(printButton.style.display);
          }}  className="btn-wrapper show-resume-btn">
          <VisibilityIcon ></VisibilityIcon>
        </button>
      </div>
      <main>
        <div id="data-input">
          <form id="personal-details">
            <h2>Personal details</h2>
            <InfoInput
              stateUpdater={handlePersonalDataUpdate}
              fullName={resumeData.fullName}
              phoneNumber={resumeData.phoneNumber}
              email={resumeData.email}
              address={resumeData.address}
            ></InfoInput>
          </form>
          <section className="detail-section">
            <Togglable title="Education">
              <MultiInput
                {...eventHandlers}
                target="education"
                fields={[
                  { name: "school" },
                  { name: "degree" },
                  { name: "startDate" },
                  { name: "endDate" },
                  { name: "location" },
                ]}
                content={resumeData.education}
              ></MultiInput>
            </Togglable>
          </section>
          <section className="detail-section">
            <Togglable title="Experience">
              <MultiInput
                {...eventHandlers}
                target="experience"
                fields={[
                  { name: "companyName" },
                  { name: "positionTitle" },
                  { name: "startDate" },
                  { name: "endDate" },
                  { name: "location" },
                  { name: "description", isTextArea: true },
                ]}
                content={resumeData.experience}
              ></MultiInput>
            </Togglable>
          </section>
        </div>
        <div className="resume-container">
          <CV data={resumeData}></CV>
        </div>
      </main>
    </>
  );
}
