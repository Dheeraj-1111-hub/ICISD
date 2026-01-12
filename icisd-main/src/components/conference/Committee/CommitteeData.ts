export const committeeData = {
  chiefPatrons: [
    {
      name: "Name 1",
      role: "Chief Patron",
      organization: "SRM Institute of Science and Technology",
    },
    {
      name: "Name 2",
      role: "Chief Patron",
      organization: "SRM Institute of Science and Technology",
    },
  ],

  patrons: [
    {
      name: "Name 1",
      role: "Patron",
      organization: "SRM Institute of Science and Technology",
    },
    {
      name: "Name 2",
      role: "Patron",
      organization: "SRM Institute of Science and Technology",
    },
    {
      name: "Name 3",
      role: "Patron",
      organization: "SRM Institute of Science and Technology",
    },
  ],

  convener: [
    {
      name: "Name 1",
      role: "Convener",
      organization: "Department of CSE, SRMIST",
    },
  ],

  programChairs: [
    {
      name: "Name 1",
      role: "Program Chair",
      organization: "SRM Institute of Science and Technology",
    },
    {
      name: "Name 2",
      role: "Program Co-Chair",
      organization: "SRM Institute of Science and Technology",
    },
  ],

  organisingSecretaries: [
    {
      name: "Name 1",
      role: "Organising Secretary",
      organization: "SRMIST",
    },
    {
      name: "Name 2",
      role: "Organising Secretary",
      organization: "SRMIST",
    },
    {
      name: "Name 3",
      role: "Organising Secretary",
      organization: "SRMIST",
    },
  ],

  steeringCommittee: Array.from({ length: 6 }).map((_, i) => ({
    name: `Name ${i + 1}`,
    role: "Steering Committee Member",
    organization: "University / Organization",
  })),

  programCommittee: Array.from({ length: 8 }).map((_, i) => ({
    name: `Name ${i + 1}`,
    role: "Program Committee Member",
    organization: "University / Organization",
  })),

  organisingCommittee: Array.from({ length: 8 }).map((_, i) => ({
    name: `Name ${i + 1}`,
    role: "Organising Committee Member",
    organization: "SRM Institute of Science and Technology",
  })),
};
