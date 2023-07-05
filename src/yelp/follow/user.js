import { Link } from "react-router-dom";

const User = ({ user }) => {
  if (!user) {
    return <div>No user data</div>;
  }
  return (
    <li className="p-2 ttr-tuit list-group-item d-flex rounded-0">
      <div className="pe-2">
        {
          <img
            src={
              user.profilePhoto === undefined
                ? "/images/user_profile_avatar.png"
                : `${user.profilePhoto}`
            }
            className="ttr-tuit-avatar-logo"
            width="50px"
            height="50px"
          />
        }
      </div>
      <div className="w-100">
        <h2 className="fs-5">
          <Link
            to={`/profile/${user.username}`}
            className="text-decoration-none"
          >
            <b>
              {user && user.firstName} {user && user.lastName}
            </b>
          </Link>
        </h2>
        @{user && user.username}
      </div>
    </li>
  );
};
export default User;
