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
          {email && (
            <div className="contact-wrapper">
              <EmailIcon></EmailIcon>
              <span className="email"> {email}</span>
            </div>
          )}
          {phoneNumber && (
            <div className="contact-wrapper">
              <LocalPhoneIcon></LocalPhoneIcon>
              <span className="phone-number"> {phoneNumber}</span>
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
      <div className="resume-section">
        {education.filter((ed) => ed.visible).length > 0 && <h3 className="resume-header-text">Education</h3>}
        {education.length > 0 &&
          education.map((ed) => {
            return (
              ed.visible && (
                <div className="info-group" key={ed.id}>
                  <p>
                    {ed.startDate} - {ed.endDate}
                  </p>
                  <p className="info-group-header">{ed.school}</p>
                  <p>{ed.location}</p>
                  <p>{ed.degree}</p>
                </div>
              )
            );
          })}
      </div>
      <div className="resume-section">
        {experience.filter((exp) => exp.visible).length > 0 && <h3 className="resume-header-text">Experience</h3>}
        {experience.length > 0 &&
          experience.map((exp) => {
            return (
              exp.visible && (
                <div className="info-group" key={exp.id}>
                  <p>
                    {exp.startDate} - {exp.endDate}
                  </p>
                  <p className="info-group-header">{exp.companyName}</p>
                  <p>{exp.location}</p>
                  <p>{exp.positionTitle}</p>
                  <p className="info-group-description">{exp.description}</p>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
}
