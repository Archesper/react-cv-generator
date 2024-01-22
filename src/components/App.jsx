import CV from "./CV";
import InfoInput from "./InfoInput.jsx";
import { useState } from "react";

export default function App() {
  const defaultResumeData = {
    fullName: "Balhaoui Walid",
    phoneNumber: "0671711008",
    email: "wbhaoui@gmail.com",
    address: "Casablanca, Morocco",
  };
  const [resumeData, setResumeData] = useState(defaultResumeData);
  const handleDataUpdate = (e) => {
    console.log(e.target.name);
    const newData = { ...resumeData, [e.target.name]: e.target.value };
    setResumeData(newData);
  };
  return (
    <>
      <InfoInput
        stateUpdater={handleDataUpdate}
        fullName={resumeData.fullName}
        phoneNumber={resumeData.phoneNumber}
        email={resumeData.email}
        address={resumeData.address}
      >
      </InfoInput>
      <CV data={resumeData}></CV>
    </>
  );
}
