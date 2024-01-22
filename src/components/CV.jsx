export default function CV({data}) {
  const {fullName, phoneNumber, email, address} = data;
  return (
    <div id="CV">
      <div className="personal-info">
        <h1 className="resume-name">{fullName}</h1>
        <div className="contact-info">
          <span className="phone-number">{phoneNumber}</span>
          <span className="email">{email}</span>
          <span className="address">{address}</span>
        </div>
      </div>
    </div>
  );
}