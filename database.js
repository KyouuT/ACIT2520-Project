let Database = [
  {
    id: 1,
    name : "Cindy",
    email: "cindy@test.com",
    password: "cindy123",
    role: "admin",
    reminders: [
      {
        id: 1,
        title: "Grocery shopping",
        description: "Buy milk and bread from safeway",
        completed: false,
      },
      {
        id: 2,
        title: "Grocery shopping",
        description: "Buy milk and bread from safeway",
        completed: false,
      },
      {
        id: 3,
        title: "Grocery shopping",
        description: "Buy milk and bread from safeway",
        completed: true,
      },
    ],
  },
  {
    id: 2,
    name : "Alex",
    email: "alex@test.com",
    password: "alex123",
    role: "user",
    reminders: [
      {
        id: 1,
        title: "Clothes shopping",
        description: "Buy clothes from H&M",
        completed: false,
      },
      {
        id: 2,
        title: "Clothes shopping",
        description: "Buy clothes from H&M",
        completed: false,
      },
      {
        id: 3,
        title: "Clothes shopping",
        description: "Buy clothes from H&M",
        completed: false,
      },
    ],
  },
  {
    id: 3,
    name : "Rony",
    email: "rony@test.com",
    password: "rony123",
    role: "user",
    reminders: [
      {
        id: 1,
        title: "Tire shopping",
        description: "Buy tire from Costco",
        completed: false,
      },
      {
        id: 2,
        title: "Tire shopping",
        description: "Buy tire from Costco",
        completed: false,
      },
      {
        id: 3,
        title: "Tire shopping",
        description: "Buy tire from Costco",
        completed: false,
      },
    ],
  },
];

module.exports =Database;
