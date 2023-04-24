import { Bold, Text } from "@tremor/react";
import React from "react";
import { useSelector } from "react-redux";

const UserPanel = () => {
  const { user } = useSelector((state) => state.auth.value);

  const getUserPhoto = () => {
    let photo = "user_defalult.png";
    if (user.photo) {
      photo = user.photo;
    }
    return photo;
  };

  return (
    <div className="mr-6 flex items-center">
      <div className="m-1 mr-2 w-9 h-9 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
        <img src={getUserPhoto()} className="rounded-full" />
      </div>
      <div className="h-full">
        <Bold>{user.fullName}</Bold>
        <Text>{user.role}</Text>
      </div>
    </div>
  );
};

export default UserPanel;
