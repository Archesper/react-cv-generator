import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function CV({ data }) {
  const { fullName, phoneNumber, email, address, education, experience } = data;
  return (
    <div id="CV">
      <div className="personal-info">
        <h1 className="resume-name">{fullName}</h1>
        <div className="contact-info">
          {phoneNumber && (
            <div className="contact-wrapper">
              <LocalPhoneIcon></LocalPhoneIcon>
              <span className="phone-number"> {phoneNumber}</span>
            </div>
          )}
          {email && (
            <div className="contact-wrapper">
              <EmailIcon></EmailIcon>
              <span className="email"> {email}</span>
            </div>
          )}
          {address && (
            <div className="contact-wrapper">
              <LocationOnIcon></LocationOnIcon>
              <span className="address"> {address}</span>
            </div>
          )}
        </div>
      </div>
      <h3>Education</h3>
      {education.map((ed) => {
        return (
          ed.visible && (
            <div key={ed.id}>
              {ed.school} {ed.degree} {ed.startDate} {ed.endDate} {ed.location}
            </div>
          )
        );
      })}
      <h3>Experience</h3>
      {experience.map((exp) => {
        return (
          exp.visible && (
            <div key={exp.id}>
              {exp.companyName} {exp.positionTitle} {exp.startDate}{" "}
              {exp.endDate} {exp.location} {exp.description}
            </div>
          )
        );
      })}
    </div>
  );
}
