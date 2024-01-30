import CustomInput from "./CustomInput.jsx";

export default function InfoInput({
  fullName,
  phoneNumber,
  email,
  address,
  stateUpdater,
}) {
  return (
    <>
      <CustomInput
        labelName="Full Name"
        name="fullName"
        defaultValue={fullName}
        onChange={stateUpdater}
      >
        {" "}
      </CustomInput>
      <CustomInput
        labelName="Phone Number"
        name="phoneNumber"
        type="tel"
        defaultValue={phoneNumber}
        onChange={stateUpdater}
      >
        {" "}
      </CustomInput>
      <CustomInput
        labelName="Email"
        name="email"
        defaultValue={email}
        onChange={stateUpdater}
      >
        {" "}
      </CustomInput>
      <CustomInput
        labelName="Address"
        name="address"
        defaultValue={address}
        onChange={stateUpdater}
      >
        {" "}
      </CustomInput>
    </>
  );
}
