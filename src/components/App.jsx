import CV from "./CV";
import InfoInput from "./InfoInput.jsx";
import MultiInput from "./MultiInput";
import { useState } from "react";

export default function App() {
  const defaultResumeData = {
    fullName: "Balhaoui Walid",
    phoneNumber: "0671711008",
    email: "wbhaoui@gmail.com",
    address: "Casablanca, Morocco",
    education: [
      {
        id: 0,
        school: "Maarif",
        name: "Maarif", // For MultiInput component to distinguish
        // between "education" and "experience" objects
        degree: "Bac SMA",
        startDate: "09/2018",
        endDate: "06/2021",
        location: "Mohammedia, Morocco",
        visible: true
      },
      {
        id: 1,
        school: "Maarif",
        name: "Maarif", // For MultiInput component to distinguish
        // between "education" and "experience" objects
        degree: "Bac SMA",
        startDate: "09/2018",
        endDate: "06/2021",
        location: "Mohammedia, Morocco",
        visible: true
      },
    ],
  };
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
        newItem['visible'] = item.visible;
        newItem["name"] =
          targettedSection === "education" ? newItem.school : newItem.company;
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
    })
    newItem.id = resumeData[targettedSection].length;
    newItem.visible = true;
    newItem["name"] =
          targettedSection === "education" ? newItem.school : newItem.company;
    const newContent = [...resumeData[targettedSection], newItem];
    const newData = {...resumeData, [targettedSection]: newContent};
    setResumeData(newData); 
  };
  const handleContentDelete = (e) => {
    const targettedSection = e.target.dataset.target;
    const targetID = e.target.dataset.targetid;
    const newContent = resumeData[targettedSection].filter((item) => item.id != targetID);
    const newData = {...resumeData, [targettedSection]: newContent};
    setResumeData(newData);
  }
  const handleVisibilityToggle = (e) => {
    console.log(e.target.dataset);
    const targettedSection = e.target.dataset.target;
    const targetID = e.target.dataset.targetid;
    const newItem = {...resumeData[targettedSection][targetID], visible: !resumeData[targettedSection][targetID].visible};
    const newContent = resumeData[targettedSection].map((item) => {
      if (item.id != targetID) {
        return item;
      } else {
        return newItem;
      }
    })
    const newData = {...resumeData, [targettedSection]: newContent};
    setResumeData(newData);
  };
  return (
    <>
      <h2>Personal details</h2>
      <InfoInput
        stateUpdater={handlePersonalDataUpdate}
        fullName={resumeData.fullName}
        phoneNumber={resumeData.phoneNumber}
        email={resumeData.email}
        address={resumeData.address}
      ></InfoInput>
      <h2>Education</h2>
      <MultiInput
        editHandler={handleTargettedUpdate}
        addHandler={handleContentAdd}
        deleteHandler={handleContentDelete}
        visiblityToggler={handleVisibilityToggle}
        target="education"
        fields={["school", "degree", "startDate", "endDate", "location"]}
        content={resumeData.education}
      ></MultiInput>
      <CV data={resumeData}></CV>
    </>
  );
}
