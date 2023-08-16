import { BASE_URL } from "@/config/env";
import { headers } from "next/headers";
import Image from "next/image";
import React from "react";
import DefaultImage from "../../../public/images/defaultImage.png";

type ProfileProps = {
  name: string;
  content: string;
};
const ProfileDetail = (props: ProfileProps) => {
  const { name, content } = props;
  return (
    <div className="flex flex-col w-full lg:w-[47%]">
      <p className="dark:text-gray-300 p-2">{name}</p>
      <p className="p-2 w-full rounded border border-gray-400 dark:text-gray-300">
        {content}
      </p>
    </div>
  );
};

async function getUserProfile() {
  const res = await fetch(`${BASE_URL}/api/account/profile`, {
    // cache: "no-store",
    // credentials: "include",
    method: "GET",
    headers: headers(),
  });

  if (!res.ok) {
    console.error("Failed to fetch All Books!");
  }
  return res.json();
}
type Props = {};

const Profile = async (props: Props) => {
  const { data: profile } = await getUserProfile();
  // console.log({ userProfile: profile });
  return (
    <div className="w-full flex flex-col gap-4 items-center lg:items-start lg:flex-row">
      <div className="w-[14rem] h-[14rem] lg:w-[20%] lg:justify-between lg:h-[15rem] rounded-[50%] bg-green-500 overflow-hidden">
        <Image
          src={profile.image ? profile.image : DefaultImage}
          alt="profile Image"
          className="h-full w-full"
        />
      </div>
      <div className="flex w-full  flex-col lg:w-[70%]">
        <h3 className="text-[1.5rem] lg:text-[2rem] text-center lg:text-start font-semibold dark:text-white">
          Personal Information
        </h3>
        <div className="w-full py-2 flex flex-col lg:flex-row lg:flex-wrap lg:justify-between">
          <ProfileDetail name="First Name" content={profile.firstname} />
          <ProfileDetail name="Last Name" content={profile.lastname} />
          <ProfileDetail name="Email" content={profile.email} />
          {profile.gender ? (
            <ProfileDetail name="Gender" content={profile.gender} />
          ) : (
            ""
          )}
          <ProfileDetail name="Subscription Plan" content={profile.plan} />
        </div>
      </div>
    </div>
  );
};

export default Profile;
