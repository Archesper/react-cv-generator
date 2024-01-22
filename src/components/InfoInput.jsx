import CustomInput from "./CustomInput.jsx";

export default function InfoInput({fullName, phoneNumber, email, address, stateUpdater}) {
  return (
    <>
      <CustomInput name="fullName" defaultValue={fullName} onChange={stateUpdater}> </CustomInput>
      <CustomInput name="phoneNumber" defaultValue={phoneNumber} onChange={stateUpdater}> </CustomInput>
      <CustomInput name="email" defaultValue={email} onChange={stateUpdater}> </CustomInput>
      <CustomInput name="address" defaultValue={address} onChange={stateUpdater}> </CustomInput>
    </>
  );
}
