import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Hans Wurst",
      image: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
      places: 4,
    },
    {
      id: "u2",
      name: "Peter Salami",
      image: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
      places: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;