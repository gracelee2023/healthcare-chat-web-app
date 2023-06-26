import React from "react";
import PostItem from "./PostItem";

const HomePostsList = (props) => {
  let businessesData = [];
  // let loggedIn = props.loggedIn;
  if (props.businessesData && props.businessesData.length) {
    businessesData = props.businessesData;
  }
  return (
    <>
      <ul className="list-inline">
        {businessesData.map((business) => (
          <PostItem key={business.id} business={business} />
        ))}
      </ul>
    </>
  );
};
export default HomePostsList;
