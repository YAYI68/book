import React from "react";

type Props = {};

const UserProfileForm = (props: Props) => {
  const handleUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.addEventListener("load", () => {});
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return <div></div>;
};

export default UserProfileForm;
