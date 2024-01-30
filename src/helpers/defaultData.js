const defaultResumeData = {
  fullName: undefined,
  phoneNumber: "0612345678",
  email: "doejohn@mail.com",
  address: "City, Country",
  education: [
    {
      id: 0,
      school: "High School",
      name: "High School", // For MultiInput component to distinguish
      // between "education" and "experience" objects
      degree: "High School Diploma",
      startDate: "09/2018",
      endDate: "06/2021",
      location: "City, Country",
      visible: true,
    },
    {
      id: 1,
      school: "College",
      name: "College", // For MultiInput component to distinguish
      // between "education" and "experience" objects
      degree: "Degree in Major",
      startDate: "06/2021",
      endDate: "09/2023",
      location: "Other City, Country",
      visible: true,
    },
  ],
  experience: [
    {
      id: 0,
      companyName: "Company",
      name: "Company",
      positionTitle: "Working Person",
      startDate: "10/2023",
      endDate: "present",
      location: "City, Other Country",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
        dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.`,
      visible: true,
    },
  ],
};

export default defaultResumeData;
