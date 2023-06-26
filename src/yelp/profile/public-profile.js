import React from "react";

const AnoyProfile = ({ profile }) => {
  console.log(profile);

  return (
    <>
      <div className="wd-profile-header">
        <div className="wd-banner-photo" />
        <img
          src={
            profile.profilePhoto === undefined || null
              ? "/images/user_profile.jpeg"
              : `${profile.profilePhoto}`
          }
          className="wd-profile-photo"
        />
      </div>
      <div className="wd-profile-name">
        <h5 className="text-black mb-0">
          <b>
            {profile.firstName} {profile.lastName}
          </b>
        </h5>
        <p className="pt-2">
          <b>Things I Love</b>
          <br />
          {profile.thingsILove && <span>{profile.thingsILove}</span>}
          {profile.thingsILove === undefined && (
            <span>You haven't told us anything yet ... </span>
          )}
        </p>
      </div>
    </>
  );
};

export default AnoyProfile;
