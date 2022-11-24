import React from "react";
import ProfileName from "../../Components/Profile/ProfileName";
import ProfileEmail from "../../Components/Profile/ProfileEmail";
import ProfilePassword from "../../Components/Profile/ProfilePassword";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../Components/LoadingSpinner";

const ProfileDetails = () => {
  const { user } = useSelector((store) => store.user);
  if (!user) {
    return <LoadingSpinner />;
  }
  return (
    <div className="account-info">
      <div className="profile-head">
        <h2>profile</h2>
        <p>
          Manage your details, view your tier status and change your password
        </p>
      </div>
      <ProfileName firstName={user.firstName} lastName={user.lastName} />
      <ProfileEmail email={user.email} />
      <ProfilePassword />
    </div>
  );
};

export default ProfileDetails;
